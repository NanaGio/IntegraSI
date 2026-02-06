
/*===========================================
            GALERIA DATA 
===========================================*/

const galleryData = [
  // 2025.2
  { id: 1, src: "src/galeria/e1.jpeg",  date: "2025.2" },
  { id: 2, src: "src/galeria/e2.jpeg",  date: "2025.2" },
  { id: 3, src: "src/galeria/e3.jpeg",  date: "2025.2" },
  { id: 4, src: "src/galeria/e4.jpeg",  date: "2025.2" },
  { id: 5, src: "src/galeria/e5.jpeg",  date: "2025.2" },
  { id: 6, src: "src/galeria/e6.jpeg",  date: "2025.2" },
  { id: 7, src: "src/galeria/e7.jpeg",  date: "2025.2" },
  { id: 8, src: "src/galeria/e8.jpeg",  date: "2025.2" },
  { id: 9, src: "src/galeria/e9.jpeg",  date: "2025.2" },
  { id: 10, src: "src/galeria/e10.jpeg", date: "2025.2" },
  { id: 11, src: "src/galeria/e11.jpeg", date: "2025.2" },
  { id: 12, src: "src/galeria/e12.jpeg", date: "2025.2" },
  { id: 13, src: "src/galeria/e13.jpeg", date: "2025.2" },
  { id: 14, src: "src/galeria/e14.jpeg", date: "2025.2" },
  { id: 15, src: "src/galeria/e15.jpeg", date: "2025.2" },
  { id: 16, src: "src/galeria/e16.jpeg", date: "2025.2" },
  { id: 17, src: "src/galeria/e17.jpeg", date: "2025.2" },
  { id: 18, src: "src/galeria/e18.jpeg", date: "2025.2" },
  { id: 19, src: "src/galeria/e19.jpeg", date: "2025.2" },
  { id: 20, src: "src/galeria/e20.jpeg", date: "2025.2" },
  { id: 21, src: "src/galeria/e21.jpeg", date: "2025.2" },
  { id: 22, src: "src/galeria/e22.jpeg", date: "2025.2" },
  { id: 23, src: "src/galeria/e23.jpeg", date: "2025.2" },
  { id: 24, src: "src/galeria/e24.jpeg", date: "2025.2" },

  // 2025.1
  { id: 25, src: "src/galeria/e25.jpeg", date: "2025.1" },
  { id: 26, src: "src/galeria/e26.jpeg", date: "2025.1" },
  { id: 27, src: "src/galeria/e27.jpeg", date: "2025.1" },
  { id: 28, src: "src/galeria/e28.jpeg", date: "2025.1" },
  { id: 29, src: "src/galeria/e29.jpeg", date: "2025.1" },
  { id: 30, src: "src/galeria/e30.jpeg", date: "2025.1" },
  { id: 31, src: "src/galeria/e31.jpeg", date: "2025.1" },
  { id: 32, src: "src/galeria/e32.jpeg", date: "2025.1" },
  { id: 33, src: "src/galeria/e33.jpeg", date: "2025.1" },
  { id: 34, src: "src/galeria/e34.jpeg", date: "2025.1" },
  { id: 35, src: "src/galeria/e35.jpeg", date: "2025.1" },
  { id: 36, src: "src/galeria/e36.jpeg", date: "2025.1" },
  { id: 37, src: "src/galeria/e37.jpeg", date: "2025.1" },
  { id: 38, src: "src/galeria/e38.jpeg", date: "2025.1" },
  { id: 39, src: "src/galeria/e39.jpeg", date: "2025.1" },
  { id: 40, src: "src/galeria/e40.jpeg", date: "2025.1" },

    // 2024.2

];

/*===========================================
            WORKSHOPS DATA - em andamento
===========================================*/



const workshops = [
  {
    id: 1,
    title: "Algoritmos e Programação",
    descricao: "Fundamentos da lógica de programação, algoritmos e estruturas de dados. Aprenda a pensar computacionalmente e desenvolver soluções eficientes.",
    icone: "code",
    cor: "blue",
    duration: "120h",
    professor: ["Prof. João Silva", "Prof. Maria Santos"],
    image: "../src/workshops/background.png",
    date: "Segunda-feira, 10 Fev 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec",
    slots: 10,
    audience: "Todos"
  },
  {
    id: 2,
    title: "Banco de Dados",
    descricao: "Modelagem, projeto e implementação de bancos de dados relacionais e não relacionais. SQL, NoSQL e boas práticas de armazenamento.",
    icone: "database",
    cor: "green",
    duration: "90h",
    professor: ["Profª. Maria Santos"],
    image: "../src/workshops/background.png",
    date: "Terça-feira, 11 Fev 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec",
    slots: 40,
    audience: "Veteranos"
  },
  {
    id: 3,
    title: "Engenharia de Software",
    descricao: "Metodologias ágeis, padrões de projeto, arquitetura de software e gestão de projetos. Desenvolvimento de sistemas robustos e escaláveis.",
    icone: "settings",
    cor: "purple",
    duration: "120h",
    professor: ["Prof. Carlos Oliveira"],
    image: "../src/workshops/background.png",
    date: "Quarta-feira, 12 Fev 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec",
    slots: 40,
    audience: "Todos"
  },
  {
    id: 4,
    title: "Redes de Computadores",
    descricao: "Fundamentos de redes, protocolos TCP/IP, segurança de rede, arquitetura de redes e administração de sistemas.",
    icone: "network",
    cor: "orange",
    duration: "90h",
    professor: ["Prof. Ana Costa"],
    image: "../src/workshops/background.png",
    date: "Quinta-feira, 13 Fev 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec",
    slots: 40,
    audience: "Veteranos"
  },
  {
    id: 5,
    title: "Inteligência Artificial",
    descricao: "Machine Learning, Deep Learning, processamento de linguagem natural e visão computacional. Aplicações práticas de IA.",
    icone: "brain",
    cor: "primary",
    duration: "60h",
    professor: ["Prof. Roberto Lima"],
    image: "../src/workshops/background.png",
    date: "Sexta-feira, 14 Fev 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec",
    slots: 40,
    audience: "Todos"
  },
  {
    id: 6,
    title: "Segurança da Informação",
    descricao: "Criptografia, segurança de sistemas, ética hacker, auditoria de segurança e conformidade com normas internacionais.",
    icone: "shield",
    cor: "red",
    duration: "60h",
    professor: ["Prof. Juliana Ferreira"],
    image: "../src/workshops/background.png",
    date: "Segunda-feira, 17 Fev 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec",
    slots: 40,
    audience: "Veteranos"
  },
  {
    id: 7,
    title: "Desenvolvimento Web",
    descricao: "HTML, CSS, JavaScript, frameworks modernos (React, Node.js), APIs REST e desenvolvimento full-stack.",
    icone: "globe",
    cor: "blue",
    duration: "90h",
    professor: ["Prof. Marcos Almeida"],
    image: "../src/workshops/background.png",
    date: "Terça-feira, 18 Fev 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec",
    slots: 40,
    audience: "Todos"
  },
  {
    id: 8,
    title: "Sistemas Operacionais",
    descricao: "Linux, Windows Server, virtualização, containers Docker, Kubernetes e administração de infraestrutura.",
    icone: "server",
    cor: "gray",
    duration: "60h",
    professor: ["Prof. Pedro Rodrigues", "Profª. Ana Costa"],
    image: "../src/workshops/background.png",
    date: "Quarta-feira, 19 Fev 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec",
    slots: 40,
    audience: "Veteranos"
  }
];

/*===========================================
            CRONOGRAMA DATA - em andamento
===========================================*/

const cronograma = [
  {
    dia: "Dia 1",
    data: "02 Mar, 2026",
    eventos: [
      { classificacao: "TODOS" ,hora: "18:30", titulo: "Abertura Oficial" },
      { classificacao: "TODOS" ,hora: "19:30", titulo: "Palestra 1 - Convidados externos" },
      { classificacao: "TODOS" ,hora: "20:20", titulo: "Palestra 2 - Convidados externos" },
    ]
  },
  {
    dia: "Dia 2",
    data: "03 Mar, 2026",
    eventos: [
      { classificacao: "CALOUROS" ,hora: "18:30", titulo: "CURSO 1" },
      { classificacao: "VETERANOS" ,hora: "18:30", titulo: "CURSO 1" },
      { classificacao: "VETERANOS" ,hora: "18:30", titulo: "CURSO 2" },
    ]
  },
  {
    dia: "Dia 3",
    data: "04 Mar, 2026",
    eventos: [
      { classificacao: "CALOUROS" ,hora: "18:30", titulo: "CURSO 2" },
      { classificacao: "VETERANOS" ,hora: "18:30", titulo: "CURSO 3" },
      { classificacao: "VETERANOS" ,hora: "18:30", titulo: "CURSO 4" },
    ]
  },
  {
    dia: "Dia 4",
    data: "05 Mar, 2026",
    eventos: [
      { classificacao: "CALOUROS" ,hora: "18:30", titulo: "CURSO 3" },
      { classificacao: "VETERANOS" ,hora: "18:30", titulo: "CURSO 5" },
      { classificacao: "VETERANOS" ,hora: "18:30", titulo: "CURSO 6" },
    ]
  },
  {
    dia: "Dia 5",
    data: "06 Mar, 2026",
    eventos: [
      { classificacao: "TODOS" ,hora: "18:30", titulo: "Palestra 3" },
      { classificacao: "TODOS" ,hora: "18:30", titulo: "Palestra 4" },
      { classificacao: "TODOS" ,hora: "20:20", titulo: "HACKATHON" },
    ]
  },
  {
    dia: "Dia 6",
    data: "07 Mar, 2026",
    eventos: [
      { classificacao: "TODOS" ,hora: "00:00", titulo: "HACKATHON" },

    ]
  }
];

/*===========================================
            TIME DATA - processo de iscrição
===========================================*/

const teamMembers = [
  
   {
     name: "João Mira",
     role: "Líder da LATEC / Divulgação e Mídias Digitais",
     photo: "src/time/jmira.jpg",
     bgColor: "#d0f0fd", 
     maskColor: "#2196f3",
     social: { linkedin: "https://www.linkedin.com/in/jo%C3%A3o-mira/", github: "https://github.com/jaomira" }
   },
   
   {
     name: "Giovanna Araujo",
     role: "Vice-Líder da LATEC / Divulgação e Mídias Digitais",
     photo: "src/time/giovanna.jpeg",
     bgColor: "#fddde6", 
     maskColor: "#ffa6c4",
     social: { linkedin: "https://www.linkedin.com/in/giovanna-oliveira-araujo-9b0bb7323/", github: "https://github.com/NanaGio" }
   },

   {
     name: "Carlos H. Santiago",
     role: "Financeiro e Organização das Rifas",
     photo: "src/time/caos.jpg",
     bgColor: "#c4db40", 
     maskColor: "#8588de",
     social: { linkedin: "https://www.linkedin.com/in/carlos-h-santiago/en", github: "https://github.com/CarlosH-Santiago" }
   },

   {
     name: "Henrique Estrela",
     role: "Divulgação e Mídias Digitais",
     photo: "src/time/estrela.jpeg",
     bgColor: "#ca9610", 
     maskColor: "#ca9610",
     social: { linkedin: "https://www.linkedin.com/in/henrique-estrela-21163921a/", github: "https://github.com/Henrique-Estrela" }
   },

   {
    name: "Rafael Brasil",
    role: "Coordenador de Si da UNEX",
     photo: "src/time/rafaelB.jpeg",
     bgColor: "#53f31e", 
     maskColor: "#53f31e",
     social: { linkedin: "https://www.linkedin.com/in/rafael-brasil21", github: "https://www.linkedin.com/in/rafael-brasil21" }
   },

   {
    name: "Lucas Silva",
    role: "Professor e Coordenador do evento",
     photo: "src/time/lucasS.jpeg",
     bgColor: "#DEE5E1",  
     maskColor: "#DEE5E1",
     social: { linkedin: "", github: "" }
   },

   {
    name: "Gustavo Nonato",
    role: "Configuração e Suporte a Oficinas e Laboratórios",
     photo: "src/time/nonato.jpeg",
     bgColor: "#AE2402",  
     maskColor: "#AE2402",
     social: { linkedin: "https://www.linkedin.com/in/codiguss/", github: "https://github.com/codiguss" }
   },

   {
    name: "Chaira Santos",
    role: "Organizadora do Hackathon",
     photo: "src/time/chairaS.jpeg",
     bgColor: "#D6C6E7",  
     maskColor: "#D6C6E7",
     social: { linkedin: "", github: "" }
   },

   {
    name: "Antonio Gabriel",
    role: "Apoio do Hackathon",
     photo: "src/time/antonio.jpeg",
     bgColor: "#DABA36",  
     maskColor: "#DABA36",
     social: { linkedin: "https://www.linkedin.com/in/antonio-gabriel-gomes-falc%C3%A3o-do-nascimento-a53a95306", github: "https://github.com/copperlamb78" }
   },

   {
    name: "Rebeca Helen",
    role: "Coffee Break e Decoração",
     photo: "src/time/rebeca.jpeg",
     bgColor: "#2CF7C5",  
     maskColor: "#2CF7C5",
     social: { linkedin: "https://www.linkedin.com/in/rebeca-helen-6340a22b3", github: "https://github.com/rebecaheIen" }
   },

   {
    name: "Amanda Ellen",
    role: "Divulgação e Mídias Digitais ",
     photo: "src/time/amanda.jpeg",
     bgColor: "#865DE3",  
     maskColor: "#865DE3",
     social: { linkedin: "https://www.linkedin.com/in/amanda-lima-dev", github: "https://github.com/ellyhtts" }
   },

   {
    name: "Danilo Santos",
    role: "Apoio do Hackathon",
     photo: "src/time/danilo.jpeg",
     bgColor: "#2A4725",  
     maskColor: "#2A4725",
     social: { linkedin: " https://br.linkedin.com/in/danilo-santos-b220652b0", github: "https://github.com/Santts075" }
   },

   {
    name: "Fatima Pereira",
    role: "Financeiro e Organização das Rifas",
     photo: "src/time/fatima.jpeg",
     bgColor: "#653B89",  
     maskColor: "#653B89",
     social: { linkedin: "", github: "" }
   },

   {
    name: "Giovanna Rodrigues",
    role: "Coffee Break e Decoração",
     photo: "src/time/giovanna2.jpeg",
     bgColor: "#FB9FD2",  
     maskColor: "#FB9FD2",
     social: { linkedin: "https://www.linkedin.com/in/giorodriguss/", github: "https://github.com/giorodriguss" }
   },

   {
    name: "Gustavo Costa",
    role: "Apoio",
     photo: "src/time/gustavo.jpeg",
     bgColor: "#FFE135",  
     maskColor: "#FFE135",
     social: { linkedin: "", github: "" }
   },

   {
    name: "Andrey Mota",
    role: "Configuração e Suporte a Oficinas e Laboratórios",
     photo: "src/time/andrey.jpeg",
     bgColor: "#BD0841",  
     maskColor: "#BD0841",
     social: { linkedin: "https://www.linkedin.com/in/andrey-mota-6567b1334", github: "https://github.com/dreyszk" }
   },

   {
    name: "Louise de Souza",
    role: "Configuração e Suporte a Oficinas e Laboratórios",
     photo: "src/time/louise.jpeg",
     bgColor: "#99BB73",  
     maskColor: "#99BB73",
     social: { linkedin: "https://www.linkedin.com/in/louise-santino-71339430b", github: "https://github.com/louisesantino" }
   },

   {
    name: "Leonardo Freitas",
    role: "Coffee Break e Decoração",
     photo: "src/time/leonardo.jpeg",
     bgColor: "#25C1C0",  
     maskColor: "#25C1C0",
     social: { linkedin: "", github: "" }
   },

   {
    name: "Gabriel Da Silva",
    role: "Configuração e suporte a oficinas e laboratórios",
     photo: "src/time/gabriel.jpeg",
     bgColor: "#496571",  
     maskColor: "#496571",
     social: { linkedin: "", github: "" }
   },

   {
    name: "Lucas Oliveira",
    role: "Configuração e suporte a oficinas e laboratórios",
     photo: "src/time/lucasO.jpeg",
     bgColor: "#CEA49A",  
     maskColor: "#CEA49A",
     social: { linkedin: "https://www.linkedin.com/in/lucas-oliveira-01331a265/", github: "https://github.com/lucasolivra1" }
   },
];

