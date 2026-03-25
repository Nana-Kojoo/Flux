import { MissionSection } from '@/components/about/MissionSection';
import { StudentNetwork } from '@/components/about/StudentNetwork';
import { TeamGrid } from '@/components/about/TeamGrid';
import { VisionSection } from '@/components/about/VisionSection';

export default function AboutPage() {
  return (
    <>
      <MissionSection />
      <StudentNetwork />
      <TeamGrid />
      <VisionSection />
    </>
  );
}
