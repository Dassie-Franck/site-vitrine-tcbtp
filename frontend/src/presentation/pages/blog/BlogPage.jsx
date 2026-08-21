import { PageHero } from "../../components/common/PageHero";

import { BlogListSection } from "./sections/BlogListSection";

export function BlogPage() {
  return (
    <>
      <PageHero title="Blog" backgroundImage="/assets/6.jpg" />
      <BlogListSection />
    </>
  );
}