'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { BrandLoader } from '@/components/ui/BrandLoader';

const MIN_VISIBLE_MS = 450;

function isModifiedEvent(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

export function PageTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const startedAtRef = useRef<number | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || isModifiedEvent(event)) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest('a');

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      if (anchor.target && anchor.target !== '_self') {
        return;
      }

      if (anchor.hasAttribute('download')) {
        return;
      }

      const href = anchor.href;

      if (!href) {
        return;
      }

      const destination = new URL(href, window.location.href);
      const current = new URL(window.location.href);

      if (destination.origin !== current.origin) {
        return;
      }

      if (destination.pathname === current.pathname && destination.search === current.search) {
        return;
      }

      startedAtRef.current = Date.now();
      setIsVisible(true);
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const startedAt = startedAtRef.current ?? Date.now();
    const remainingTime = Math.max(MIN_VISIBLE_MS - (Date.now() - startedAt), 0);
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
      startedAtRef.current = null;
    }, remainingTime);

    return () => window.clearTimeout(timeout);
  }, [pathname, searchParams, isVisible]);

  if (!isVisible) {
    return null;
  }

  return <BrandLoader label="Preparing the next view..." fullscreen />;
}