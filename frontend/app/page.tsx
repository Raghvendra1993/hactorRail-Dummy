import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import CargoSection from '@/components/CargoSection';
import WhySection from '@/components/WhySection';
import SustainabilitySection from '@/components/SustainabilitySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CareersSection from '@/components/CareersSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import {
  getHero,
  getStats,
  getServices,
  getCargoTypes,
  getPrinciples,
  getTestimonials,
  getJobOpenings,
  getArticles,
  getSiteSettings,
  getSustainabilitySection,
} from '@/lib/strapi';

export const revalidate = 60;

async function fetchAll() {
  const results = await Promise.allSettled([
    getHero(),
    getStats(),
    getServices(),
    getCargoTypes(),
    getPrinciples(),
    getTestimonials(),
    getJobOpenings(),
    getArticles(),
    getSiteSettings(),
    getSustainabilitySection(),
  ]);

  const [hero, stats, services, cargoTypes, principles, testimonials, jobOpenings, articles, siteSettings, sustainability] = results;

  return {
    hero:           hero.status           === 'fulfilled' ? hero.value           : null,
    stats:          stats.status          === 'fulfilled' ? stats.value          : [],
    services:       services.status       === 'fulfilled' ? services.value       : [],
    cargoTypes:     cargoTypes.status     === 'fulfilled' ? cargoTypes.value     : [],
    principles:     principles.status     === 'fulfilled' ? principles.value     : [],
    testimonials:   testimonials.status   === 'fulfilled' ? testimonials.value   : [],
    jobOpenings:    jobOpenings.status    === 'fulfilled' ? jobOpenings.value    : [],
    articles:       articles.status       === 'fulfilled' ? articles.value       : [],
    siteSettings:   siteSettings.status   === 'fulfilled' ? siteSettings.value   : null,
    sustainability: sustainability.status === 'fulfilled' ? sustainability.value : null,
  };
}

export default async function HomePage() {
  const {
    hero, stats, services, cargoTypes, principles,
    testimonials, jobOpenings, articles, siteSettings, sustainability,
  } = await fetchAll();

  return (
    <>
      <Hero hero={hero} />
      <StatsSection stats={stats} />
      <ServicesSection services={services} />
      <CargoSection cargoTypes={cargoTypes} />
      <WhySection principles={principles} />
      <SustainabilitySection data={sustainability} />
      <TestimonialsSection testimonials={testimonials} />
      <CareersSection jobOpenings={jobOpenings} siteSettings={siteSettings} />
      <NewsSection articles={articles} />
      <ContactSection siteSettings={siteSettings} services={services} />
    </>
  );
}
