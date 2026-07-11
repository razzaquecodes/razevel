'use client';

import { useLenis } from '@/src/utils/lenis';

// Sections
import Hero from '@/src/components/sections/Hero';
import BrandStory from '@/src/components/sections/BrandStory';
import Philosophy from '@/src/components/sections/Philosophy';
import Craftsmanship from '@/src/components/sections/Craftsmanship';
import Bespoke from '@/src/components/sections/Bespoke';
import MenCollectionsHome from '@/src/components/sections/MenCollectionsHome';
import WomenCollectionsHome from '@/src/components/sections/WomenCollectionsHome';
import LuxuryPackaging from '@/src/components/sections/LuxuryPackaging';
import Testimonials from '@/src/components/sections/Testimonials';
import BookAppointment from '@/src/components/sections/BookAppointment';
import TrustSection from '@/src/components/sections/TrustSection';

export default function Home() {
  useLenis();
  return (
    <main>
      {/* 1. Hero — Cinematic Deep Black */}
      <Hero />
      
      {/* 2. Brand Heritage — Editorial */}
      <BrandStory />

      {/* 3. Our Philosophy — New */}
      <Philosophy />

      {/* 4. Our Craft — Tailor illustrations */}
      <Craftsmanship />

      {/* 5. Bespoke Journey — Illustrations */}
      <Bespoke />

      {/* 6. Men Collections — Expanded */}
      <MenCollectionsHome />

      {/* 7. Women Collections — Expanded */}
      <WomenCollectionsHome />

      {/* 8. Luxury Packaging — Branding focus */}
      <LuxuryPackaging />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Trust Section */}
      <TrustSection />

      {/* 11. Book Appointment */}
      <BookAppointment />

    </main>
  );
}
