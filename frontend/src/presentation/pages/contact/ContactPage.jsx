import { PageHero } from "../../components/common/PageHero";
import { ContactFormSection } from "./sections/ContactFormSection";

export function ContactPage() {
  return (
    <>
      <PageHero title="Contact" backgroundImage="/assets/1.jpg" />
      <ContactFormSection />
    </>
  );
}