/** Supported locale codes for the site. */
export type Locale = "en" | "es" | "pt" | "fr";

/** Complete site content structure — every string on the site lives here. */
export interface SiteContent {
  meta: SiteMeta;
  nav: NavContent;
  hero: HeroContent;
  whoIHelp: WhoIHelpContent;
  services: ServicesContent;
  workHighlights: WorkHighlightsContent;
  howIWork: HowIWorkContent;
  problemsIFix: ProblemsIFixContent;
  ctaFooter: CTAFooterContent;
  contact: ContactContent;
  footer: FooterContent;
  common: CommonContent;
}

/** Global site metadata for SEO and social sharing. */
export interface SiteMeta {
  siteTitle: string;
  siteDescription: string;
  ogImage: string;
  twitterHandle: string;
}

/** Navigation bar content. */
export interface NavContent {
  links: Array<{
    label: string;
    href: string;
  }>;
  contactCta: string;
}

/** Hero section content. */
export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

/** A single audience segment card. */
export interface AudienceSegment {
  title: string;
  description: string;
  icon: string;
}

/** "Who I Help" section content. */
export interface WhoIHelpContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  segments: [AudienceSegment, AudienceSegment];
}

/** A single service offering within a tier. */
export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

/** A service tier (primary or secondary). */
export interface ServiceTierContent {
  tierLabel: string;
  tierDescription: string;
  services: ServiceItem[];
}

/** Services section content with primary and secondary tiers. */
export interface ServicesContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  primary: ServiceTierContent;
  secondary: ServiceTierContent;
}

/** A single work highlight / case study card. */
export interface WorkHighlight {
  title: string;
  outcome: string;
  description: string;
  tags: string[];
}

/** Work highlights section content. */
export interface WorkHighlightsContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  highlights: WorkHighlight[];
}

/** "How I Work" section content. */
export interface HowIWorkContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  engagementModel: {
    title: string;
    steps: Array<{ title: string; description: string }>;
  };
  pricing: {
    title: string;
    description: string;
    note?: string;
  };
}

/** "Problems I Fix" section content. */
export interface ProblemsIFixContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  problems: Array<{
    text: string;
    category?: string;
  }>;
}

/** Final CTA section content. */
export interface CTAFooterContent {
  headline: string;
  subheadline?: string;
  cta: { label: string; href: string };
}

/** Contact page and form content. */
export interface ContactContent {
  pageTitle: string;
  pageDescription: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    subjectOptions: Array<{ value: string; label: string }>;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
  };
}

/** Footer content. */
export interface FooterContent {
  copyright: string;
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

/** Common / shared strings used across multiple pages. */
export interface CommonContent {
  backToHome: string;
  loading: string;
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
}
