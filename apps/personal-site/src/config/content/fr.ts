import type { SiteContent } from "../types";

export const fr: SiteContent = {
  meta: {
    siteTitle:
      "Josh Horwitz — Ingénieur Principal Fractionnel et Architecte pour SaaS",
    siteDescription:
      "J'aide les équipes SaaS en phase d'amorçage à préparer leurs produits pour passer à l'échelle — architecture, implémentation full-stack, DevOps et infrastructure. Ingénierie fractionnelle pour les startups de Seed à Série B.",
    ogImage: "/og-image.png",
    twitterHandle: "@jahorwitz",
  },

  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Réalisations", href: "#work-highlights" },
      { label: "Tarifs", href: "#how-i-work" },
      { label: "Contact", href: "#cta-footer" },
    ],
    contactCta: "Réserver un Appel",
  },

  hero: {
    headline: "Ingénieur Principal Fractionnel pour Équipes SaaS en Croissance",
    subheadline:
      "J'aide les équipes SaaS en phase d'amorçage à préparer leurs produits pour passer à l'échelle — architecture, implémentation full-stack, DevOps et infrastructure. De la modélisation de données aux pipelines CI/CD, je rends votre système prêt pour la production.",
    primaryCta: {
      label: "Réserver un Appel",
      href: "https://calendly.com/joshs-room",
    },
    secondaryCta: {
      label: "M'envoyer un Email",
      href: "mailto:jahorwitz94@gmail.com",
    },
  },

  whoIHelp: {
    sectionTitle: "Qui J'Accompagne",
    sectionSubtitle:
      "Je travaille avec deux types d'équipes — les deux ont besoin de bases backend solides.",
    segments: [
      {
        title: "Équipes SaaS de Seed à Série B",
        description:
          "Votre MVP fonctionne mais ne passera pas à l'échelle. Vous avez besoin de quelqu'un pour renforcer le backend, mettre en place le CI/CD, introduire l'observabilité et préparer l'architecture pour la prochaine phase de croissance — sans ralentir le développement de fonctionnalités.",
        icon: "building-2",
      },
      {
        title: "Indépendants et Petites Entreprises",
        description:
          "Vous avez besoin d'une application web, d'une intégration API ou d'un tableau de bord bien conçu dès le départ. Je gère la partie technique de la conception au déploiement pour que vous puissiez vous concentrer sur votre activité.",
        icon: "user",
      },
    ],
  },

  services: {
    sectionTitle: "Services",
    sectionSubtitle: "Deux niveaux. Un seul standard de qualité.",
    primary: {
      tierLabel: "Fractionnel / Conseil",
      tierDescription:
        "Leadership technique intégré pour les équipes SaaS qui ont besoin d'expertise backend senior sans embauche à temps plein.",
      services: [
        {
          title: "Ingénieur Principal Fractionnel",
          description:
            "Je m'intègre à votre équipe 10–30 heures par semaine en tant qu'ingénieur principal. J'écris du code, je revois les PRs, je mentore les développeurs et je pilote les décisions d'architecture.",
          features: [
            "10–30 hrs/semaine intégré",
            "Code pratique + architecture",
            "Revue de PRs et mentorat",
            "Communication directe Slack/async",
          ],
        },
        {
          title: "Audit d'Architecture",
          description:
            "Une évaluation ciblée de 2–4 semaines de vos systèmes backend. Je livre une feuille de route d'améliorations priorisée avec une analyse claire coûts/bénéfices.",
          features: [
            "Engagement de 2–4 semaines",
            "Revue du code et de l'infrastructure",
            "Feuille de route d'améliorations priorisée",
            "Registres de décisions d'architecture",
          ],
        },
        {
          title: "Sprint de Renforcement Backend",
          description:
            "Un sprint intensif de 4–8 semaines pour traiter la dette technique la plus critique, les lacunes de fiabilité et les blocages de scalabilité de votre backend.",
          features: [
            "Engagement ciblé de 4–8 semaines",
            "Améliorations des pipelines CI/CD",
            "Mise en place d'observabilité et monitoring",
            "Optimisation de base de données et requêtes",
          ],
        },
      ],
    },
    secondary: {
      tierLabel: "Freelance / Projets Ciblés",
      tierDescription:
        "Projets délimités pour les équipes et individus qui ont besoin d'ingénierie de qualité sans engagement à long terme.",
      services: [
        {
          title: "Fonctionnalités MVP et Corrections de Bugs",
          description:
            "Besoin de fonctionnalités livrées ou de bugs corrigés ? Je m'intègre à votre codebase et livre du code prêt pour la production avec des tests.",
          features: [
            "Développement de fonctionnalités",
            "Triage et correction de bugs",
            "Amélioration de la couverture de tests",
            "Nettoyage de la qualité du code",
          ],
        },
        {
          title: "Applications Web et Tableaux de Bord",
          description:
            "Des outils internes aux tableaux de bord clients — je construis des applications web propres et performantes adaptées à vos besoins.",
          features: [
            "Frontends React + TypeScript",
            "Backends Node.js / Python",
            "Conception et configuration de bases de données",
            "Déploiement et hébergement",
          ],
        },
        {
          title: "Intégrations API",
          description:
            "Je connecte vos systèmes — facturation Stripe, synchronisation CRM, pipelines de webhooks et APIs tierces branchées proprement et de manière fiable.",
          features: [
            "Stripe, HubSpot, Salesforce",
            "Pipelines de traitement de webhooks",
            "Flux OAuth et authentification",
            "Gestion des erreurs et logique de retry",
          ],
        },
        {
          title: "Performance et Fiabilité",
          description:
            "Requêtes lentes, déploiements instables, monitoring absent ? J'identifie les goulets d'étranglement et les corrige systématiquement.",
          features: [
            "Profilage de requêtes et endpoints",
            "Stratégies de mise en cache",
            "Mise en place du suivi des erreurs",
            "Tests de charge et optimisation",
          ],
        },
      ],
    },
  },

  workHighlights: {
    sectionTitle: "Expérience Sélectionnée",
    sectionSubtitle: "Résultats en SaaS, fintech et infrastructure média.",
    highlights: [
      {
        title: "SaaS de Modélisation Financière",
        outcome: "Temps de calcul réduit de ~30s à moins d'une seconde",
        description:
          "J'ai repensé le moteur de modélisation principal en passant d'une approche par agrégats à une architecture par deltas. J'ai mis en place des pistes d'audit, configuré des pipelines CI/CD et implémenté l'infrastructure as code pour des déploiements reproductibles.",
        tags: ["Architecture Delta", "CI/CD", "IaC", "Audit", "Performance"],
      },
      {
        title: "Plateforme de Production Vidéo en Direct",
        outcome: "Montée en charge à plus de 1 000 lieux en direct",
        description:
          "J'ai mis à l'échelle l'infrastructure WebRTC et temps réel pour une plateforme de production vidéo en direct. J'ai construit des encodeurs cloud avec auto-scaling et optimisé les pipelines média pour gérer des événements en direct simultanés dans plus de mille lieux.",
        tags: [
          "WebRTC",
          "Temps Réel",
          "Auto-scaling",
          "Pipelines Média",
          "Infrastructure Cloud",
        ],
      },
      {
        title: "SaaS Entreprise / Conformité",
        outcome: "Workflows de conformité livrés et fiabilité améliorée",
        description:
          "J'ai livré des fonctionnalités de workflows de conformité pour une plateforme SaaS entreprise. J'ai mené des améliorations de fiabilité et d'observabilité qui ont réduit la fréquence des incidents et amélioré le temps moyen de résolution.",
        tags: [
          "Conformité",
          "Observabilité",
          "Fiabilité",
          "Entreprise",
          "Réduction d'Incidents",
        ],
      },
    ],
  },

  howIWork: {
    sectionTitle: "Comment Je Travaille",
    sectionSubtitle: "Modèle d'engagement transparent. Sans surprises.",
    engagementModel: {
      title: "Détails de l'Engagement",
      steps: [
        {
          title: "Horaires Flexibles",
          description:
            "10–30 heures par semaine pour les engagements fractionnels. Projets délimités pour le travail freelance.",
        },
        {
          title: "Async par Défaut",
          description:
            "Je travaille de manière asynchrone par défaut avec des mises à jour écrites et de la documentation. Je suis disponible sur Slack, par email ou sur vos outils d'équipe.",
        },
        {
          title: "Points Réguliers",
          description:
            "Points réguliers — hebdomadaires ou plusieurs fois par semaine, selon votre préférence — pour aligner les priorités, revoir l'avancement et débloquer les problèmes.",
        },
        {
          title: "Comptes Rendus Écrits",
          description:
            "Résumés de fin de semaine couvrant ce qui a été livré, ce qui est en cours et les prochaines étapes. Pas de confusion sur l'état d'avancement.",
        },
        {
          title: "Standups d'Équipe",
          description:
            "Disponible pour participer aux standups et réunions de votre équipe selon les besoins, pour rester aligné et contribuer directement.",
        },
      ],
    },
    pricing: {
      title: "Tarifs",
      description:
        "À l'heure : 100–160 $/h selon le périmètre. Forfaits à partir de 8 000 $+/mois pour les engagements fractionnels.",
      note: "Un appel découverte gratuit permettra de déterminer le périmètre du projet et le tarif final. Sans obligation.",
    },
  },

  problemsIFix: {
    sectionTitle: "Problèmes que Je Résous",
    sectionSubtitle:
      "Si l'un de ces problèmes vous parle, nous devrions discuter.",
    problems: [
      {
        text: "« Notre backend fonctionne, mais il ne survivra pas à une croissance de 10x. »",
        category: "Scalabilité",
      },
      {
        text: "« Nous livrons des fonctionnalités mais nous cassons constamment des choses en production. »",
        category: "Fiabilité",
      },
      {
        text: "« Les temps de réponse de notre API dégradent l'expérience utilisateur. »",
        category: "Performance",
      },
      {
        text: "« Nous n'avons ni CI/CD, ni tests, ni monitoring — et ça commence à poser problème. »",
        category: "DevOps",
      },
      {
        text: "« Nous avons besoin d'un développeur backend senior mais ne pouvons pas encore justifier une embauche à temps plein. »",
        category: "Équipe",
      },
    ],
  },

  ctaFooter: {
    headline: "Construisons quelque chose qui dure.",
    subheadline:
      "Que vous ayez besoin d'un ingénieur fractionnel ou d'un projet ciblé — je suis là pour aider votre équipe à livrer de meilleurs logiciels.",
    cta: {
      label: "Réserver un Appel",
      href: "https://calendly.com/joshs-room",
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Josh Horwitz. Tous droits réservés.`,
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
    backToHome: "Retour à l'Accueil",
    loading: "Chargement...",
    notFound: {
      title: "Page Introuvable",
      description:
        "La page que vous recherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'Accueil",
    },
  },
};
