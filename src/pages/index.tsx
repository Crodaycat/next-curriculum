import { LinksBar } from '@/components/LinksBar';
import { MainContent } from '@/components/MainContent';
import { PersonalInformation } from '@/components/PersonalInformation';

export default function Home() {
  return (
    <main>
      <PersonalInformation />

      <MainContent />

      <LinksBar />
    </main>
  );
}
