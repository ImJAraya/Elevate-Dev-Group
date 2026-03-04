export interface ServiceItem {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  name: string;
  objective: string;
  solution: string;
  result: string;
  tag: string;
}

export interface ChatbotDemoStep {
  user: string;
  bot: string;
}

export interface ContactConfig {
  email: string;
  responseTime: string;
  whatsappNumber: string;
  whatsappPresetMessage: string;
}

export interface SiteConfig {
  brandName: string;
  title: string;
  description: string;
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  nav: Array<{ label: string; href: string }>;
  services: ServiceItem[];
  process: ProcessStep[];
  portfolio: PortfolioItem[];
  chatbot: {
    title: string;
    subtitle: string;
    note: string;
    steps: ChatbotDemoStep[];
  };
  contact: ContactConfig;
}

export const siteConfig: SiteConfig = {
  brandName: 'Elevate Dev Group',
  title: 'Elevate Dev Group | Landing pages y apps web que convierten',
  description:
    'Creamos landing pages, aplicaciones web y soluciones digitales enfocadas en resultados de negocio, velocidad y escalabilidad.',
  hero: {
    headline: 'Construimos productos web que venden, convierten y escalan.',
    subheadline:
      'En Elevate Dev Group diseñamos y desarrollamos landings y apps web con enfoque en crecimiento real para tu negocio.',
    primaryCta: 'Solicitar propuesta',
    secondaryCta: 'Hablar por WhatsApp',
  },
  nav: [
    { label: 'Inicio', href: '#home' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contacto', href: '#contacto' },
  ],
  services: [
    {
      title: 'Landing Pages',
      problem: 'Tu tráfico llega, pero no convierte en oportunidades reales.',
      solution:
        'Diseñamos y desarrollamos landings enfocadas en claridad de oferta, velocidad y CTA estratégicos.',
      outcome:
        'Más leads calificados y mejor rendimiento en campañas comerciales.',
    },
    {
      title: 'Web Apps',
      problem: 'Procesos manuales y herramientas sueltas frenan tu operación.',
      solution:
        'Construimos aplicaciones web a medida para centralizar flujos, datos y automatizaciones clave.',
      outcome:
        'Operación más eficiente, control total y escalabilidad técnica.',
    },
    {
      title: 'Desktop Apps',
      problem: 'Necesitas herramientas robustas para equipos con flujos internos específicos.',
      solution:
        'Desarrollamos apps de escritorio conectadas con tus sistemas para casos de uso avanzados.',
      outcome:
        'Mayor productividad interna y continuidad operativa en procesos críticos.',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Descubrimiento',
      description:
        'Alineamos objetivos, audiencia y métricas para definir la estrategia correcta desde el inicio.',
    },
    {
      step: '02',
      title: 'Prototipo y alcance',
      description:
        'Traducimos requisitos en una estructura funcional clara antes de construir.',
    },
    {
      step: '03',
      title: 'Desarrollo',
      description:
        'Implementamos con buenas prácticas técnicas, foco en performance y experiencia de usuario.',
    },
    {
      step: '04',
      title: 'Lanzamiento y soporte',
      description:
        'Publicamos, medimos resultados y dejamos una base preparada para mejorar continuamente.',
    },
  ],
  portfolio: [
    {
      name: 'SaaS de reservas médicas',
      objective: 'Aumentar agendamientos desde tráfico orgánico y anuncios.',
      solution: 'Landing de conversión + embudo de registro optimizado para móvil.',
      result: '+37% en solicitudes en 60 días (resultado referencial/demo).',
      tag: 'Landing + Funnel',
    },
    {
      name: 'Plataforma interna de logística',
      objective: 'Reducir errores operativos y tiempos de coordinación.',
      solution: 'Web app para control de rutas, estados y alertas por rol.',
      result: '-29% de incidencias operativas (resultado referencial/demo).',
      tag: 'Web App',
    },
    {
      name: 'Herramienta de gestión comercial',
      objective: 'Unificar seguimiento de prospectos y cierres del equipo de ventas.',
      solution: 'Dashboard de pipeline con integraciones y reportes semanales.',
      result: '+22% en tasa de cierre trimestral (resultado referencial/demo).',
      tag: 'App de negocio',
    },
  ],
  chatbot: {
    title: 'Chatbot para tu web',
    subtitle:
      'Muestra una experiencia de asistencia inmediata para captar y orientar leads 24/7.',
    note: 'Demo de experiencia, integración real disponible por proyecto.',
    steps: [
      {
        user: 'Hola, quiero una landing para captar clientes.',
        bot: 'Perfecto. Te recomiendo una landing enfocada en oferta, prueba social y CTA directo a contacto.',
      },
      {
        user: '¿Cuánto tarda un proyecto así?',
        bot: 'Un alcance inicial suele estar listo en 1 a 2 semanas, según complejidad y contenido.',
      },
      {
        user: '¿También hacen app web después?',
        bot: 'Sí. Diseñamos la landing para que sea la base de evolución hacia una web app escalable.',
      },
    ],
  },
  contact: {
    email: 'contacto@elevatedevgroup.com',
    responseTime: 'Respondemos en menos de 24 horas hábiles.',
    whatsappNumber: '+50686473460',
    whatsappPresetMessage: 'Hola, quiero una propuesta para mi proyecto digital.',
  },
};
