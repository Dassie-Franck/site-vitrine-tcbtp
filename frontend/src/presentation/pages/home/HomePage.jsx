import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { ProjectsGallerySection } from "./sections/ProjectsGallerySection";
import { StatsSection } from "./sections/StatsSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Entreprise BTP - Vos travaux de construction à Yaoundé</title>
        <meta name="description" content="Expert en construction, rénovation et génie civil. Devis gratuit et intervention rapide." />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsGallerySection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  );
}

export default HomePage;