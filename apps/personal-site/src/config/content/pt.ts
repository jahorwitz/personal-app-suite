import type { SiteContent } from "../types";

export const pt: SiteContent = {
  meta: {
    siteTitle:
      "Josh Horwitz — Arquiteto Backend Fracional e Engenheiro Full-Stack",
    siteDescription:
      "Ajudo equipas SaaS a fortalecer o backend, criar sistemas escaláveis e melhorar a confiabilidade. Engenharia fracional e consultoria para startups de Seed a Série B.",
    ogImage: "/og-image.png",
    twitterHandle: "@jahorwitz",
  },

  nav: {
    links: [
      { label: "Serviços", href: "#services" },
      { label: "Trabalho", href: "#work-highlights" },
      { label: "Preços", href: "#how-i-work" },
      { label: "Contacto", href: "/contact" },
    ],
    contactCta: "Agendar Chamada",
  },

  hero: {
    headline: "Arquitectura Backend para SaaS Operacional",
    subheadline:
      "Fortaleço MVPs e transformo-os em sistemas escaláveis, desenredo backends legados e trago confiabilidade a equipas SaaS em rápido crescimento — para que possam lançar com confiança.",
    primaryCta: {
      label: "Agendar Chamada",
      href: "https://calendly.com/joshs-room",
    },
    secondaryCta: {
      label: "Enviar Email",
      href: "mailto:josh@withjosh.net",
    },
  },

  whoIHelp: {
    sectionTitle: "Quem Eu Ajudo",
    sectionSubtitle:
      "Trabalho com dois tipos de equipas — ambas precisam de bases sólidas de backend.",
    segments: [
      {
        title: "Equipas SaaS de Seed a Série B",
        description:
          "O vosso MVP funciona mas não vai escalar. Precisam de alguém que fortaleça o backend, configure CI/CD, introduza observabilidade e prepare a arquitectura para a próxima fase de crescimento — sem atrasar o desenvolvimento de funcionalidades.",
        icon: "building-2",
      },
      {
        title: "Indivíduos e Pequenos Negócios",
        description:
          "Precisam de uma aplicação web, uma integração de API ou um dashboard bem feito à primeira. Eu trato da parte técnica desde o design até ao deployment para que se possam focar no vosso negócio.",
        icon: "user",
      },
    ],
  },

  services: {
    sectionTitle: "Serviços",
    sectionSubtitle: "Dois níveis. Um único padrão de qualidade.",
    primary: {
      tierLabel: "Fracional / Consultoria",
      tierDescription:
        "Liderança técnica integrada para equipas SaaS que precisam de experiência sénior em backend sem uma contratação a tempo inteiro.",
      services: [
        {
          title: "Engenheiro Principal Fracional",
          description:
            "Integro-me na vossa equipa 10–30 horas por semana como engenheiro principal. Escrevo código, revejo PRs, mentorizo programadores e lidero decisões de arquitectura.",
          features: [
            "10–30 hrs/semana integrado",
            "Código prático + arquitectura",
            "Revisão de PRs e mentoria",
            "Comunicação directa por Slack/async",
          ],
        },
        {
          title: "Auditoria de Arquitectura",
          description:
            "Uma avaliação focada de 2–4 semanas dos vossos sistemas backend. Entrego um plano de melhorias priorizado com análise clara de custo/benefício.",
          features: [
            "Compromisso de 2–4 semanas",
            "Revisão de código e infraestrutura",
            "Plano de melhorias priorizado",
            "Registos de decisões de arquitectura",
          ],
        },
        {
          title: "Sprint de Fortalecimento Backend",
          description:
            "Um sprint intensivo de 4–8 semanas para resolver a dívida técnica mais crítica, falhas de confiabilidade e bloqueios de escalabilidade no vosso backend.",
          features: [
            "Compromisso focado de 4–8 semanas",
            "Melhorias nos pipelines CI/CD",
            "Configuração de observabilidade e monitorização",
            "Optimização de base de dados e consultas",
          ],
        },
      ],
    },
    secondary: {
      tierLabel: "Freelance / Projectos Menores",
      tierDescription:
        "Projectos delimitados para equipas e indivíduos que precisam de engenharia de qualidade sem um compromisso a longo prazo.",
      services: [
        {
          title: "Funcionalidades MVP e Correcção de Bugs",
          description:
            "Precisam de funcionalidades ou de corrigir bugs? Integro-me no vosso código e entrego código pronto para produção com testes.",
          features: [
            "Desenvolvimento de funcionalidades",
            "Triagem e correcção de bugs",
            "Melhoria de cobertura de testes",
            "Limpeza de qualidade de código",
          ],
        },
        {
          title: "Aplicações Web e Dashboards",
          description:
            "De ferramentas internas a dashboards para clientes — construo aplicações web limpas e eficientes adaptadas às vossas necessidades.",
          features: [
            "Frontends React + TypeScript",
            "Backends Node.js / Python",
            "Design e configuração de bases de dados",
            "Deployment e hosting",
          ],
        },
        {
          title: "Integrações de API",
          description:
            "Conecto os vossos sistemas — facturação Stripe, sincronização de CRM, pipelines de webhooks e APIs de terceiros ligadas de forma limpa e fiável.",
          features: [
            "Stripe, HubSpot, Salesforce",
            "Pipelines de processamento de webhooks",
            "Fluxos OAuth e autenticação",
            "Tratamento de erros e lógica de retentativas",
          ],
        },
        {
          title: "Desempenho e Limpeza de Confiabilidade",
          description:
            "Consultas lentas, deployments instáveis, monitorização ausente? Identifico os estrangulamentos e resolvo-os sistematicamente.",
          features: [
            "Análise de consultas e endpoints",
            "Estratégias de cache",
            "Configuração de rastreamento de erros",
            "Testes de carga e afinação",
          ],
        },
      ],
    },
  },

  workHighlights: {
    sectionTitle: "Experiência Seleccionada",
    sectionSubtitle: "Resultados em SaaS, fintech e infraestrutura de média.",
    highlights: [
      {
        title: "SaaS de Modelação Financeira",
        outcome:
          "Tempo de computação reduzido de ~30s para menos de um segundo",
        description:
          "Redesenhei o motor de modelação principal de uma abordagem baseada em agregados para uma arquitectura baseada em deltas. Implementei registos de auditoria, configurei pipelines de CI/CD e implementei infraestrutura como código para deployments repetíveis.",
        tags: ["Arquitectura Delta", "CI/CD", "IaC", "Auditoria", "Desempenho"],
      },
      {
        title: "Plataforma de Produção de Vídeo ao Vivo",
        outcome: "Escalado para mais de 1.000 venues ao vivo",
        description:
          "Escalei a infraestrutura WebRTC e em tempo real para uma plataforma de produção de vídeo ao vivo. Construí encoders na cloud com auto-escalamento e optimizei os pipelines de média para lidar com eventos ao vivo simultâneos em mais de mil venues.",
        tags: [
          "WebRTC",
          "Tempo Real",
          "Auto-escalamento",
          "Pipelines de Média",
          "Infraestrutura Cloud",
        ],
      },
      {
        title: "SaaS Empresarial / Conformidade",
        outcome: "Fluxos de conformidade entregues e confiabilidade melhorada",
        description:
          "Entreguei funcionalidades de fluxos de conformidade para uma plataforma SaaS empresarial. Impulsionei melhorias de confiabilidade e observabilidade que reduziram a frequência de incidentes e melhoraram o tempo médio de resolução.",
        tags: [
          "Conformidade",
          "Observabilidade",
          "Confiabilidade",
          "Empresarial",
          "Redução de Incidentes",
        ],
      },
    ],
  },

  howIWork: {
    sectionTitle: "Como Trabalho",
    sectionSubtitle: "Modelo de trabalho transparente. Sem surpresas.",
    engagementModel: {
      title: "Detalhes do Compromisso",
      steps: [
        {
          title: "Horas Flexíveis",
          description:
            "10–30 horas por semana para compromissos fracionais. Projectos delimitados para trabalho freelance.",
        },
        {
          title: "Async por Defeito",
          description:
            "Trabalho de forma assíncrona por defeito com actualizações escritas e documentação. Estou disponível no Slack, email ou nas ferramentas da vossa equipa.",
        },
        {
          title: "Sincronização Semanal",
          description:
            "Uma reunião fixa por semana para alinhar prioridades, rever o progresso e desbloquear qualquer problema.",
        },
        {
          title: "Relatórios Escritos",
          description:
            "Resumos de fim de semana cobrindo o que foi entregue, o que está em progresso e os próximos passos. Sem confusão sobre o estado das coisas.",
        },
      ],
    },
    pricing: {
      title: "Preços",
      description:
        "Por hora: $130–160/hr consoante o âmbito e compromisso. Retainers a partir de $8k+/mês para compromissos fracionais.",
      note: "Cada compromisso começa com uma chamada de descoberta gratuita de 30 minutos. Sem obrigação.",
    },
  },

  problemsIFix: {
    sectionTitle: "Problemas que Resolvo",
    sectionSubtitle: "Se algum destes lhe soa familiar, devíamos conversar.",
    problems: [
      {
        text: '"O nosso backend funciona, mas não vai sobreviver a um crescimento de 10x."',
        category: "Escalabilidade",
      },
      {
        text: '"Lançamos funcionalidades mas continuamos a partir coisas em produção."',
        category: "Confiabilidade",
      },
      {
        text: '"Os tempos de resposta da nossa API estão a prejudicar a experiência do utilizador."',
        category: "Desempenho",
      },
      {
        text: '"Não temos CI/CD, testes nem monitorização — e está a começar a custar."',
        category: "DevOps",
      },
      {
        text: '"Precisamos de um sénior de backend mas ainda não justificamos uma contratação a tempo inteiro."',
        category: "Equipa",
      },
    ],
  },

  ctaFooter: {
    headline: "Vamos construir algo que perdure.",
    subheadline:
      "Quer precise de um engenheiro fracional ou de um projecto focado — estou aqui para ajudar a sua equipa a lançar melhor software.",
    cta: {
      label: "Agendar Chamada",
      href: "https://calendly.com/joshs-room",
    },
  },

  contact: {
    pageTitle: "Contacte-me",
    pageDescription:
      "Tem um projecto em mente ou quer discutir como posso ajudar? Preencha o formulário e respondo-lhe num dia útil.",
    form: {
      nameLabel: "Nome",
      namePlaceholder: "O seu nome",
      emailLabel: "Email",
      emailPlaceholder: "voce@exemplo.com",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Em que posso ajudar?",
      subjectOptions: [
        { value: "general", label: "Consulta Geral" },
        { value: "fractional", label: "Compromisso CTO Fracional" },
        { value: "freelance", label: "Projecto Freelance" },
        { value: "advisory", label: "Consultoria / Assessoria" },
        { value: "other", label: "Outro" },
      ],
      messageLabel: "Mensagem",
      messagePlaceholder: "Conte-me sobre o seu projecto ou desafio...",
      submitLabel: "Enviar Mensagem",
      successMessage: "Obrigado pelo contacto! Responderei num dia útil.",
      errorMessage:
        "Ocorreu um problema ao enviar a sua mensagem. Tente novamente ou envie-me um email directamente.",
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Josh Horwitz. Todos os direitos reservados.`,
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
    backToHome: "Voltar ao Início",
    loading: "A carregar...",
    notFound: {
      title: "Página Não Encontrada",
      description: "A página que procura não existe ou foi movida.",
      cta: "Ir para o Início",
    },
  },
};
