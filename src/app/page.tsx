import { CtaSection } from '@/components/home/CtaSection';
import { Hero } from '@/components/home/Hero';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ProjectsShowcase } from '@/components/home/ProjectsShowcase';
import { ProductsSection } from '@/components/home/ProductsSection';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <ProjectsShowcase />
      <ProductsSection />
      <WhyChooseUs />
      <CtaSection />
    </>
  );
}
