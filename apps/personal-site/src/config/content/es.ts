import type { SiteContent } from "../types";

export const es: SiteContent = {
  meta: {
    siteTitle:
      "Josh Horwitz — Arquitecto Backend Fraccional e Ingeniero Full-Stack",
    siteDescription:
      "Ayudo a equipos SaaS a fortalecer su backend, crear sistemas escalables y mejorar la confiabilidad. Ingeniería fraccional y consultoría para startups de Seed a Serie B.",
    ogImage: "/og-image.png",
    twitterHandle: "@jahorwitz",
  },

  nav: {
    links: [
      { label: "Servicios", href: "#services" },
      { label: "Trabajo", href: "#work-highlights" },
      { label: "Precios", href: "#how-i-work" },
      { label: "Contacto", href: "/contact" },
    ],
    contactCta: "Agendar Llamada",
  },

  hero: {
    headline: "Arquitectura Backend para SaaS Operacional",
    subheadline:
      "Fortalezco MVPs para convertirlos en sistemas escalables, desenredo backends heredados y aporto confiabilidad a equipos SaaS en rápido crecimiento — para que puedas lanzar con confianza.",
    primaryCta: {
      label: "Agendar Llamada",
      href: "https://calendly.com/joshs-room",
    },
    secondaryCta: {
      label: "Envíame un Email",
      href: "mailto:josh@withjosh.net",
    },
  },

  whoIHelp: {
    sectionTitle: "A Quién Ayudo",
    sectionSubtitle:
      "Trabajo con dos tipos de equipos — ambos necesitan bases sólidas de backend.",
    segments: [
      {
        title: "Equipos SaaS de Seed a Serie B",
        description:
          "Tu MVP funciona pero no va a escalar. Necesitas a alguien que fortalezca el backend, configure CI/CD, introduzca observabilidad y prepare la arquitectura para la siguiente etapa de crecimiento — sin frenar el desarrollo de funcionalidades.",
        icon: "building-2",
      },
      {
        title: "Individuos y Pequeños Negocios",
        description:
          "Necesitas una aplicación web, una integración de API o un dashboard bien hecho desde el principio. Me encargo de la parte técnica desde el diseño hasta el despliegue para que puedas enfocarte en tu negocio.",
        icon: "user",
      },
    ],
  },

  services: {
    sectionTitle: "Servicios",
    sectionSubtitle: "Dos niveles. Un mismo estándar de calidad.",
    primary: {
      tierLabel: "Fraccional / Asesoría",
      tierDescription:
        "Liderazgo técnico integrado para equipos SaaS que necesitan experiencia senior en backend sin contratar a tiempo completo.",
      services: [
        {
          title: "Ingeniero Principal Fraccional",
          description:
            "Me integro con tu equipo 10–30 horas por semana como ingeniero principal. Escribo código, reviso PRs, mentoreo desarrolladores y lidero decisiones de arquitectura.",
          features: [
            "10–30 hrs/semana integrado",
            "Código práctico + arquitectura",
            "Revisión de PRs y mentoría",
            "Comunicación directa por Slack/async",
          ],
        },
        {
          title: "Auditoría de Arquitectura",
          description:
            "Una evaluación enfocada de 2–4 semanas de tus sistemas backend. Entrego un plan de mejoras priorizado con análisis claro de costo/beneficio.",
          features: [
            "Compromiso de 2–4 semanas",
            "Revisión de código e infraestructura",
            "Plan de mejoras priorizado",
            "Registros de decisiones de arquitectura",
          ],
        },
        {
          title: "Sprint de Fortalecimiento Backend",
          description:
            "Un sprint intensivo de 4–8 semanas para abordar la deuda técnica más crítica, las brechas de confiabilidad y los bloqueos de escalabilidad en tu backend.",
          features: [
            "Compromiso enfocado de 4–8 semanas",
            "Mejoras en pipelines CI/CD",
            "Configuración de observabilidad y monitoreo",
            "Optimización de base de datos y consultas",
          ],
        },
      ],
    },
    secondary: {
      tierLabel: "Freelance / Proyectos Menores",
      tierDescription:
        "Proyectos acotados para equipos e individuos que necesitan ingeniería de calidad sin un compromiso a largo plazo.",
      services: [
        {
          title: "Funcionalidades MVP y Corrección de Errores",
          description:
            "¿Necesitas funcionalidades o corregir bugs? Me integro a tu código y entrego código listo para producción con tests.",
          features: [
            "Desarrollo de funcionalidades",
            "Triaje y corrección de bugs",
            "Mejora de cobertura de tests",
            "Limpieza de calidad de código",
          ],
        },
        {
          title: "Aplicaciones Web y Dashboards",
          description:
            "Desde herramientas internas hasta dashboards para clientes — construyo aplicaciones web limpias y eficientes adaptadas a tus necesidades.",
          features: [
            "Frontends React + TypeScript",
            "Backends Node.js / Python",
            "Diseño y configuración de bases de datos",
            "Despliegue y hosting",
          ],
        },
        {
          title: "Integraciones de API",
          description:
            "Conecto tus sistemas — facturación con Stripe, sincronización de CRM, pipelines de webhooks y APIs de terceros conectadas de forma limpia y confiable.",
          features: [
            "Stripe, HubSpot, Salesforce",
            "Pipelines de procesamiento de webhooks",
            "Flujos OAuth y autenticación",
            "Manejo de errores y lógica de reintentos",
          ],
        },
        {
          title: "Rendimiento y Limpieza de Confiabilidad",
          description:
            "¿Consultas lentas, despliegues inestables, monitoreo ausente? Identifico los cuellos de botella y los resuelvo sistemáticamente.",
          features: [
            "Análisis de consultas y endpoints",
            "Estrategias de caché",
            "Configuración de rastreo de errores",
            "Pruebas de carga y ajuste",
          ],
        },
      ],
    },
  },

  workHighlights: {
    sectionTitle: "Experiencia Seleccionada",
    sectionSubtitle: "Resultados en SaaS, fintech e infraestructura de medios.",
    highlights: [
      {
        title: "SaaS de Modelado Financiero",
        outcome: "Tiempo de cómputo reducido de ~30s a menos de un segundo",
        description:
          "Rediseñé el motor de modelado principal de un enfoque basado en agregados a una arquitectura basada en deltas. Implementé registros de auditoría, configuré pipelines de CI/CD e implementé infraestructura como código para despliegues repetibles.",
        tags: [
          "Arquitectura Delta",
          "CI/CD",
          "IaC",
          "Auditoría",
          "Rendimiento",
        ],
      },
      {
        title: "Plataforma de Producción de Video en Vivo",
        outcome: "Escalado a más de 1.000 venues en vivo",
        description:
          "Escalé la infraestructura WebRTC y en tiempo real para una plataforma de producción de video en vivo. Construí encoders en la nube con autoescalado y optimicé los pipelines de medios para manejar eventos en vivo simultáneos en más de mil venues.",
        tags: [
          "WebRTC",
          "Tiempo Real",
          "Autoescalado",
          "Pipelines de Medios",
          "Infraestructura Cloud",
        ],
      },
      {
        title: "SaaS Empresarial / Compliance",
        outcome: "Flujos de compliance entregados y confiabilidad mejorada",
        description:
          "Entregué funcionalidades de flujos de compliance para una plataforma SaaS empresarial. Impulsé mejoras de confiabilidad y observabilidad que redujeron la frecuencia de incidentes y mejoraron el tiempo medio de resolución.",
        tags: [
          "Compliance",
          "Observabilidad",
          "Confiabilidad",
          "Empresarial",
          "Reducción de Incidentes",
        ],
      },
    ],
  },

  howIWork: {
    sectionTitle: "Cómo Trabajo",
    sectionSubtitle: "Modelo de trabajo transparente. Sin sorpresas.",
    engagementModel: {
      title: "Detalles del Compromiso",
      steps: [
        {
          title: "Horas Flexibles",
          description:
            "10–30 horas por semana para compromisos fraccionales. Proyectos acotados para trabajo freelance.",
        },
        {
          title: "Async por Defecto",
          description:
            "Trabajo de forma asíncrona por defecto con actualizaciones escritas y documentación. Estoy disponible en Slack, email o las herramientas de tu equipo.",
        },
        {
          title: "Sincronización Semanal",
          description:
            "Una reunión fija por semana para alinear prioridades, revisar avances y desbloquear cualquier problema.",
        },
        {
          title: "Reportes Escritos",
          description:
            "Resúmenes de fin de semana cubriendo lo entregado, lo que está en progreso y los próximos pasos. Sin confusiones sobre el estado de las cosas.",
        },
      ],
    },
    pricing: {
      title: "Precios",
      description:
        "Por hora: $130–160/hr según alcance y compromiso. Retainers desde $8k+/mes para compromisos fraccionales.",
      note: "Cada compromiso comienza con una llamada de descubrimiento gratuita de 30 minutos. Sin obligación.",
    },
  },

  problemsIFix: {
    sectionTitle: "Problemas que Resuelvo",
    sectionSubtitle: "Si alguno de estos te suena familiar, deberíamos hablar.",
    problems: [
      {
        text: '"Nuestro backend funciona, pero no sobrevivirá un crecimiento de 10x."',
        category: "Escalabilidad",
      },
      {
        text: '"Lanzamos funcionalidades pero seguimos rompiendo cosas en producción."',
        category: "Confiabilidad",
      },
      {
        text: '"Los tiempos de respuesta de nuestra API están matando la experiencia del usuario."',
        category: "Rendimiento",
      },
      {
        text: '"No tenemos CI/CD, tests ni monitoreo — y está empezando a doler."',
        category: "DevOps",
      },
      {
        text: '"Necesitamos un senior de backend pero todavía no justificamos una contratación a tiempo completo."',
        category: "Equipo",
      },
    ],
  },

  ctaFooter: {
    headline: "Construyamos algo que perdure.",
    subheadline:
      "Ya sea que necesites un ingeniero fraccional o un proyecto enfocado — estoy aquí para ayudar a tu equipo a lanzar mejor software.",
    cta: {
      label: "Agendar Llamada",
      href: "https://calendly.com/joshs-room",
    },
  },

  contact: {
    pageTitle: "Contacto",
    pageDescription:
      "¿Tienes un proyecto en mente o quieres conversar sobre cómo puedo ayudar? Completa el formulario y te responderé en un día hábil.",
    form: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "tu@ejemplo.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "¿En qué puedo ayudarte?",
      subjectOptions: [
        { value: "general", label: "Consulta General" },
        { value: "fractional", label: "Compromiso CTO Fraccional" },
        { value: "freelance", label: "Proyecto Freelance" },
        { value: "advisory", label: "Asesoría / Consultoría" },
        { value: "other", label: "Otro" },
      ],
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto o desafío...",
      submitLabel: "Enviar Mensaje",
      successMessage: "¡Gracias por escribirme! Te responderé en un día hábil.",
      errorMessage:
        "Hubo un problema al enviar tu mensaje. Intenta de nuevo o envíame un email directamente.",
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Josh Horwitz. Todos los derechos reservados.`,
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
    backToHome: "Volver al Inicio",
    loading: "Cargando...",
    notFound: {
      title: "Página No Encontrada",
      description: "La página que buscas no existe o ha sido movida.",
      cta: "Ir al Inicio",
    },
  },
};
