import { PageHero } from "../../components/common/PageHero";

import { AboutSection } from "./section/AboutSection";

export function AboutPage() {
  return (
    <>
      <PageHero title="À Propos" backgroundImage="/assets/4.jpg" />
      <AboutSection />
    </>
  );
}