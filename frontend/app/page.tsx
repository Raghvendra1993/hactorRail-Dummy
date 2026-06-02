import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import CargoSection from '@/components/CargoSection';
import WhySection from '@/components/WhySection';
import SustainabilitySection from '@/components/SustainabilitySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CareersSection from '@/components/CareersSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';

export const revalidate = 60;

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <CargoSection />
      <WhySection />
      <SustainabilitySection />
      <TestimonialsSection />
      <CareersSection />
      <NewsSection />
      <ContactSection />
    </>
  );
}
