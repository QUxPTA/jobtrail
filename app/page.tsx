import AboutUs from '@/components/landing/AboutUs';
import Hero from '@/components/landing/Hero';
import Leaderboard from '@/components/landing/Leaderboard';
import Team from '@/components/landing/Team';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <article>
        <Hero />
      </article>
      <article>
        <Leaderboard />
      </article>
      <article>
        <AboutUs />
      </article>
      <article>
        <Team />
      </article>
    </main>
  );
}
