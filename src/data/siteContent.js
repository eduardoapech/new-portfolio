export const personal = {
  name: 'Eduardo Augusto Pech',
  role: 'Software Developer',
  stacks: ['React', 'React Native', 'Node', 'PostgreSQL'],
  phone: '+55 55 99186-4238',
  email: 'eduardo.augusto.pech97@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eduardoapech',
  github: 'https://github.com/eduardoapech',
};

const whatsappDigits = personal.phone.replace(/\D/g, '');
const whatsappUrl = `https://wa.me/${whatsappDigits}`;

export const translations = {
  pt: {
    'nav-skills': 'Habilidades',
    'nav-projects': 'Projetos',
    'nav-contact': 'Contato',
    'nav-hire': 'Contratar',

    'hero-badge': personal.role,
    'hero-title': `Eduardo <span class='highlight'>Pech</span> — ${personal.role}.`,
    'hero-desc':
      `Sou ${personal.name}. Desenvolvo produtos em produção, como o Chama Vai: apps do passageiro, do motorista e do afiliado, com painel para operar a rede.`,

    'btn-work': 'Meus Trabalhos',
    'btn-talk': 'Vamos conversar?',

    'skills-sub': 'Expertise',
    'skills-title': "Minhas <span class='highlight-orange'>Stacks</span>",
    'skills-daily': 'No dia a dia',
    'skills-also': 'Também conheço',

    'proj-sub': 'Portfólio',
    'proj-title': "Galeria de <span class='highlight-cyan'>Projetos</span>",

    'contact-title': "Vamos criar algo <span class='highlight'>novo?</span>",
    'contact-desc': 'Atendimento remoto.',

    'ph-name': 'Nome',
    'ph-email': 'E-mail',
    'ph-msg': 'Sua mensagem...',
    'btn-send': 'Enviar Mensagem',
    'btn-sending': 'Enviando...',

    // Skills
    'level-advanced': 'Avançado',
    'level-medium': 'Intermediário',
    'level-basic': 'Básico',

    'skill-react': 'Criação de SPAs, componentes, hooks e boas práticas de performance.',
    'skill-rn': 'Apps mobile com foco em UI/UX e integração com APIs.',
    'skill-flutter': 'Interfaces multiplataforma e arquitetura organizada (widgets/estado).',
    'skill-node': 'APIs, integrações e automações com JavaScript/TypeScript.',
    'skill-pg': 'Banco da API em produção: tabelas, consultas e dados da operação.',
    'skill-csharp': 'Back-end com .NET, APIs REST e integrações com banco de dados.',
    'skill-java': 'Bases sólidas em OO, serviços e integração de sistemas.',

    'proj-chamavai-card':
      'Mobilidade em produção: apps do passageiro, do motorista e do afiliado, com painel para operar a rede.',

    'proj-chamavai':
      "Três aplicativos e um painel, para quem pede, quem dirige, quem indica e quem administra.<ul class='project-points'><li><strong>Passageiro</strong> escolhe o serviço no mapa.</li><li><strong>Motorista</strong> entra e atende a corrida.</li><li><strong>Afiliado</strong> indica e acompanha o resultado.</li><li><strong>Painel</strong> acompanha a operação da rede.</li></ul><p class='project-how'><strong>Como foi feito.</strong> Os apps foram feitos em React Native com Expo. O painel, em React. A API, em Node.js com PostgreSQL e atualização em tempo real. O que aparece aqui é o visual do produto.</p>",

    'cap-passageiro': 'App do passageiro',
    'cap-motorista': 'App do motorista',
    'cap-afiliado': 'App do afiliado',
    'cap-admin': 'Painel administrativo',
    'zoom-hint': 'Clique na imagem para aproximar',

    'proj-imobiliaria':
      "Site de imobiliária com páginas e navegação moderna.<br><strong>Stacks</strong>: Next.js, React, JavaScript, CSS.<br><strong>Site:</strong> <a href='https://site-imobiliaria-lyart.vercel.app/' target='_blank' rel='noreferrer'>Clique aqui</a>",

    'proj-restaurante':
      "Site de restaurante com páginas e navegação moderna.<br><strong>Stacks</strong>: FLUTTER WEB, HTML, CSS, JavaScript.<br><strong>Site:</strong> <a href='https://restaurante-swart-omega.vercel.app/' target='_blank' rel='noreferrer'>Clique aqui</a>",

    'view-project': 'VER PROJETO →',
    'view-details': 'VER DETALHES →',

    'alert-success': 'Sucesso! Sua mensagem foi enviada.',
    'alert-error': 'Erro ao enviar: ',
    'alert-fallback': 'Algo deu errado. Tente novamente.',
  },

  en: {
    'nav-skills': 'Skills',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    'nav-hire': 'Hire Me',

    'hero-badge': personal.role,
    'hero-title': `Eduardo <span class='highlight'>Pech</span> — ${personal.role}.`,
    'hero-desc':
      `I'm ${personal.name}. I ship live products, including Chama Vai: passenger, driver, and affiliate apps, plus the panel that runs the network.`,

    'btn-work': 'My Work',
    'btn-talk': "Let's talk?",

    'skills-sub': 'Expertise',
    'skills-title': "My <span class='highlight-orange'>Stacks</span>",
    'skills-daily': 'Day to day',
    'skills-also': 'Also familiar with',

    'proj-sub': 'Portfolio',
    'proj-title': "Project <span class='highlight-cyan'>Gallery</span>",

    'contact-title': "Let's build something <span class='highlight'>new?</span>",
    'contact-desc': 'Remote work available.',

    'ph-name': 'Name',
    'ph-email': 'Email',
    'ph-msg': 'Your message...',
    'btn-send': 'Send Message',
    'btn-sending': 'Sending...',

    'level-advanced': 'Advanced',
    'level-medium': 'Intermediate',
    'level-basic': 'Basic',

    'skill-react': 'SPAs, components, hooks, and performance-oriented practices.',
    'skill-rn': 'Mobile apps with strong UI/UX and API integration.',
    'skill-flutter': 'Cross-platform UI and organized architecture (widgets/state).',
    'skill-node': 'APIs, integrations, and automation with JS/TS.',
    'skill-pg': 'The production API database: tables, queries, and operational data.',
    'skill-csharp': '.NET back-end, REST APIs, and database integrations.',
    'skill-java': 'Solid OO fundamentals, services, and system integration.',

    'proj-chamavai-card':
      'A live mobility product: passenger, driver, and affiliate apps, plus a panel to run the network.',

    'proj-chamavai':
      "Three apps and one panel — for the person who requests, the person who drives, the person who refers, and the person who runs it.<ul class='project-points'><li><strong>Passenger</strong> picks the service on the map.</li><li><strong>Driver</strong> signs in and takes the ride.</li><li><strong>Affiliate</strong> refers people and follows the result.</li><li><strong>Panel</strong> follows the network operation.</li></ul><p class='project-how'><strong>How it was built.</strong> The apps were built with React Native and Expo. The panel, with React. The API, with Node.js, PostgreSQL, and real-time updates. What you see here is the product visual.</p>",

    'cap-passageiro': 'Passenger app',
    'cap-motorista': 'Driver app',
    'cap-afiliado': 'Affiliate app',
    'cap-admin': 'Admin panel',
    'zoom-hint': 'Click the image to zoom in',

    'proj-imobiliaria':
      "Real estate website with modern pages and navigation.<br><strong>Stack</strong>: Next.js, React, JavaScript, CSS.<br><strong>Live:</strong> <a href='https://site-imobiliaria-lyart.vercel.app/' target='_blank' rel='noreferrer'>Open</a>",

    'proj-restaurante':
      "Restaurant website with modern pages and navigation.<br><strong>Stack</strong>: Flutter Web, HTML, CSS, JavaScript.<br><strong>Live:</strong> <a href='https://restaurante-swart-omega.vercel.app/' target='_blank' rel='noreferrer'>Open</a>",

    'view-project': 'VIEW PROJECT →',
    'view-details': 'VIEW DETAILS →',

    'alert-success': 'Success! Your message has been sent.',
    'alert-error': 'Error sending: ',
    'alert-fallback': 'Something went wrong. Please try again.',
  },
};

export const dailySkills = [
  { id: 'skill-react', name: 'React', level: 'level-advanced' },
  { id: 'skill-rn', name: 'React Native', level: 'level-advanced' },
  { id: 'skill-node', name: 'Node', level: 'level-medium' },
  { id: 'skill-pg', name: 'PostgreSQL', level: 'level-medium' },
];

export const familiarSkills = ['Flutter', 'C# / .NET', 'Java'];

export const projects = [
  {
    id: 'proj-chamavai',
    title: 'Chama Vai',
    tech: ['React Native', 'Expo', 'React', 'Node.js', 'PostgreSQL'],
    summaryId: 'proj-chamavai-card',
    img: '/assets/image/projetos/chamavai/home.jpeg',
    imgPosition: 'top',
    type: 'modal',
    gallery: [
      { src: '/assets/image/projetos/chamavai/home.jpeg', captionKey: 'cap-passageiro' },
      { src: '/assets/image/projetos/chamavai/motorista.jpeg', captionKey: 'cap-motorista' },
      { src: '/assets/image/projetos/chamavai/afiliado.jpg', captionKey: 'cap-afiliado' },
      { src: '/assets/image/projetos/chamavai/admin.jpeg', captionKey: 'cap-admin' },
    ],
  },
  {
    id: 'proj-imobiliaria',
    title: 'Imobiliária',
    tech: ['Next', 'React', 'JavaScript', 'CSS'],
    img: '/assets/image/projetos/imobiliaria/thumb.svg',
    type: 'modal',
    link: 'https://site-imobiliaria-lyart.vercel.app/',
    gallery: [
      '/assets/image/projetos/imobiliaria/imobiliaria.png',
      '/assets/image/projetos/imobiliaria/imobiliaria2.png',
      '/assets/image/projetos/imobiliaria/lista.png',
      '/assets/image/projetos/imobiliaria/login.png',
    ],
  },
  {
    id: 'proj-restaurante',
    title: 'Restaurante',
    tech: ['Flutter Web','HTML', 'CSS', 'JavaScript'],
    img: '/assets/image/projetos/restaurante/restaurante.png',
    type: 'modal',
    link: 'https://restaurante-swart-omega.vercel.app/',
    gallery: [
      '/assets/image/projetos/restaurante/restaurante.png',
      '/assets/image/projetos/restaurante/sobre.png',
      '/assets/image/projetos/restaurante/lojas.png',
    ],
  },
];

export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    url: personal.github,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: personal.linkedin,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: whatsappUrl,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11.5a7.5 7.5 0 0 1-11.2 6.6L4 19l.9-4.8A7.5 7.5 0 1 1 20 11.5z"/><path d="M9 9c.4-1 1.2-1 1.6-.7.2.2.6.8.8 1.2.2.4.2.8 0 1.1l-.4.6c-.2.3-.2.6 0 .9.5.9 1.6 2 2.6 2.6.3.2.6.2.9 0l.6-.4c.3-.2.7-.2 1.1 0 .4.2 1 .6 1.2.8.3.4.3 1.2-.7 1.6-1.1.5-2.6.2-4.4-.9-1.8-1.1-3.3-2.6-4.4-4.4-1.1-1.8-1.4-3.3-.9-4.4z"/></svg>`,
  },
];
