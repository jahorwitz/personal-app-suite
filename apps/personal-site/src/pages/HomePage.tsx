import {
  Hero,
  WhoIHelp,
  Services,
  WorkHighlights,
  HowIWork,
  ProblemsIFix,
  CTAFooter,
} from "../sections";

/**
 * Landing page assembling all seven content sections in sequence.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <WhoIHelp />
      <Services />
      <WorkHighlights />
      <HowIWork />
      <ProblemsIFix />
      <CTAFooter />
    </>
  );
}
