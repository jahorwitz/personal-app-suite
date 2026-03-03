import type { SiteContent } from "../types";

export const en: SiteContent = {
  meta: {
    siteTitle:
      "Josh Horwitz — Fractional Principal Engineer & Architect for SaaS",
    siteDescription:
      "I help early-stage SaaS teams harden their products for scale — architecture, full-stack implementation, DevOps, and infrastructure. Fractional engineering for Seed–Series B startups.",
    ogImage: "/og-image.png",
    twitterHandle: "@jahorwitz",
  },

  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work-highlights" },
      { label: "Pricing", href: "#how-i-work" },
      { label: "Contact", href: "#cta-footer" },
    ],
    contactCta: "Book a Call",
  },

  hero: {
    headline: "Fractional Principal Engineer for Growing SaaS Teams",
    subheadline:
      "I help early-stage SaaS teams harden their products for scale — architecture, full-stack implementation, DevOps, and infrastructure. From data modeling to CI/CD pipelines, I make your system production-ready.",
    primaryCta: {
      label: "Book a Call",
      href: "https://calendly.com/joshs-room",
    },
    secondaryCta: {
      label: "Email Me",
      href: "mailto:jahorwitz94@gmail.com",
    },
  },

  whoIHelp: {
    sectionTitle: "Who I Help",
    sectionSubtitle:
      "I work with two kinds of teams — both need strong backend foundations.",
    segments: [
      {
        title: "Seed–Series B SaaS Teams",
        description:
          "Your MVP works but won't scale. You need someone who can harden the backend, set up proper CI/CD, introduce observability, and make the architecture ready for the next stage of growth — without slowing down feature delivery.",
        icon: "building-2",
      },
      {
        title: "Individuals & Small Businesses",
        description:
          "You need a web app, an API integration, or a dashboard built right the first time. I handle the technical side from design through deployment so you can focus on running your business.",
        icon: "user",
      },
    ],
  },

  services: {
    sectionTitle: "Services",
    sectionSubtitle: "Two tiers. One standard of quality.",
    primary: {
      tierLabel: "Fractional / Advisory",
      tierDescription:
        "Embedded engineering leadership for SaaS teams that need senior backend expertise without a full-time hire.",
      services: [
        {
          title: "Fractional Principal Engineer",
          description:
            "I embed with your team 10–30 hours per week as a hands-on principal engineer. I write code, review PRs, mentor developers, and drive architectural decisions.",
          features: [
            "10–30 hrs/week embedded engagement",
            "Hands-on coding + architecture",
            "PR reviews and developer mentoring",
            "Direct Slack/async communication",
          ],
        },
        {
          title: "Architecture Audit",
          description:
            "A focused 2–4 week assessment of your backend systems. I deliver a prioritized roadmap of improvements with clear cost/benefit trade-offs.",
          features: [
            "2–4 week engagement",
            "Codebase and infrastructure review",
            "Prioritized improvement roadmap",
            "Architecture decision records",
          ],
        },
        {
          title: "Backend Hardening Sprint",
          description:
            "A 4–8 week intensive sprint to address the most critical technical debt, reliability gaps, and scalability blockers in your backend.",
          features: [
            "4–8 week focused engagement",
            "CI/CD pipeline improvements",
            "Observability and monitoring setup",
            "Database and query optimization",
          ],
        },
      ],
    },
    secondary: {
      tierLabel: "Freelance / Smaller Builds",
      tierDescription:
        "Scoped projects for teams and individuals who need quality engineering without a long-term commitment.",
      services: [
        {
          title: "MVP Features & Bug Fixes",
          description:
            "Need features shipped or bugs squashed? I jump into your codebase and deliver production-ready code with tests.",
          features: [
            "Feature development",
            "Bug triage and fixes",
            "Test coverage improvements",
            "Code quality cleanup",
          ],
        },
        {
          title: "Small Web Apps & Dashboards",
          description:
            "From internal tools to customer-facing dashboards — I build clean, performant web applications tailored to your needs.",
          features: [
            "React + TypeScript frontends",
            "Node.js / Python backends",
            "Database design and setup",
            "Deployment and hosting",
          ],
        },
        {
          title: "API Integrations",
          description:
            "I connect your systems — Stripe billing, CRM syncs, webhook pipelines, and third-party APIs wired up cleanly and reliably.",
          features: [
            "Stripe, HubSpot, Salesforce",
            "Webhook processing pipelines",
            "OAuth and authentication flows",
            "Error handling and retry logic",
          ],
        },
        {
          title: "Performance & Reliability Cleanup",
          description:
            "Slow queries, flaky deploys, missing monitoring? I identify the bottlenecks and fix them systematically.",
          features: [
            "Query and endpoint profiling",
            "Caching strategies",
            "Error tracking setup",
            "Load testing and tuning",
          ],
        },
      ],
    },
  },

  workHighlights: {
    sectionTitle: "Selected Experience",
    sectionSubtitle: "Outcomes across SaaS, fintech, and media infrastructure.",
    highlights: [
      {
        title: "Financial Modeling SaaS",
        outcome: "Reduced compute time from ~30s to sub-second",
        description:
          "Redesigned the core modeling engine from an aggregate-based approach to a delta-driven architecture. Introduced audit trails, set up CI/CD pipelines, and implemented infrastructure as code for repeatable deployments.",
        tags: [
          "Delta Architecture",
          "CI/CD",
          "IaC",
          "Audit Trails",
          "Performance",
        ],
      },
      {
        title: "Live Video Production Platform",
        outcome: "Scaled to 1,000+ live venues",
        description:
          "Scaled WebRTC and real-time infrastructure for a live video production platform. Built autoscaling cloud encoders and optimized media pipelines to handle concurrent live events across over a thousand venues.",
        tags: [
          "WebRTC",
          "Real-time",
          "Autoscaling",
          "Media Pipelines",
          "Cloud Infrastructure",
        ],
      },
      {
        title: "Enterprise SaaS / Compliance",
        outcome: "Shipped compliance workflows and improved reliability",
        description:
          "Delivered compliance workflow features for an enterprise SaaS platform. Drove reliability and observability improvements that reduced incident frequency and improved mean time to resolution.",
        tags: [
          "Compliance",
          "Observability",
          "Reliability",
          "Enterprise",
          "Incident Reduction",
        ],
      },
    ],
  },

  howIWork: {
    sectionTitle: "How I Work",
    sectionSubtitle: "Transparent engagement model. No surprises.",
    engagementModel: {
      title: "Engagement Details",
      steps: [
        {
          title: "Flexible Hours",
          description:
            "10–30 hours per week for fractional engagements. Scoped projects for freelance work.",
        },
        {
          title: "Async-Friendly",
          description:
            "I work asynchronously by default with written updates and documentation. I'm available on Slack, email, or your team's tools.",
        },
        {
          title: "Regular Syncs",
          description:
            "Regular syncs — weekly or multiple times per week, based on your preference — to align on priorities, review progress, and unblock any issues.",
        },
        {
          title: "Written Updates",
          description:
            "End-of-week summaries covering what shipped, what's in progress, and what's next. No confusion about where things stand.",
        },
        {
          title: "Team Standups",
          description:
            "Happy to join your team's standups and meetings as needed to stay aligned and contribute directly.",
        },
      ],
    },
    pricing: {
      title: "Pricing",
      description:
        "Hourly: $100–160/hr depending on scope. Retainers starting at $8k+/month for fractional engagements.",
      note: "A free discovery call will determine project scope and final pricing. No commitment required.",
    },
  },

  problemsIFix: {
    sectionTitle: "Common Problems I Fix",
    sectionSubtitle: "If any of these sound familiar, we should talk.",
    problems: [
      {
        text: '"Our backend works, but it won\'t survive 10x growth."',
        category: "Scalability",
      },
      {
        text: '"We ship features but keep breaking things in production."',
        category: "Reliability",
      },
      {
        text: '"Our API response times are killing the user experience."',
        category: "Performance",
      },
      {
        text: "\"We don't have CI/CD, tests, or monitoring — and it's starting to hurt.\"",
        category: "DevOps",
      },
      {
        text: '"We need a senior backend person but can\'t justify a full-time hire yet."',
        category: "Team",
      },
    ],
  },

  ctaFooter: {
    headline: "Let's build something that lasts.",
    subheadline:
      "Whether you need a fractional engineer or a focused project — I'm here to help your team ship better software.",
    cta: {
      label: "Book a Call",
      href: "https://calendly.com/joshs-room",
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Josh Horwitz. All rights reserved.`,
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/horwitzjoshua",
        icon: "linkedin",
      },
      {
        platform: "GitHub",
        url: "https://github.com/jahorwitz",
        icon: "github",
      },
    ],
  },

  common: {
    backToHome: "Back to Home",
    loading: "Loading...",
    notFound: {
      title: "Page Not Found",
      description:
        "The page you're looking for doesn't exist or has been moved.",
      cta: "Go Home",
    },
  },
};
