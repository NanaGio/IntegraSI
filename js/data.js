
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
    id: 0,
    title: "ABERTURA - Ingresso Geral",
    descricao: "Integra-SI",
    icone: "code",
    cor: "blue",
    duration: "4h",
    professor: ["Lucas"],
    image: "https://images.sympla.com.br/69684a40bd474-lg.jpg",
    date: "17/08 a 21/08",
    local: "SALA 01",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/evento/integra-si-2026-1-abertura/3315972?algoliaID=e8bf2c3072f6aa7f419838e2ca9b8917&share_id=copiarlink",
    slots: 150,
    audience: "Todos"
  },
  {
    id: 1,
    title: "Soft Skills: O Diferencial do Profissional de Tecnologia na Era da Inteligência Artificial",
    descricao: "Nesta palestra, serão discutidas as principais mudanças provocadas pela IA e a crescente importância das soft skills, como comunicação, liderança, trabalho em equipe, inteligência emocional, criatividade e pensamento crítico. Os participantes serão convidados a refletir sobre o perfil do profissional do futuro e como desenvolver competências que os tornem mais preparados para os desafios e oportunidades da era da Inteligência Artificial.",
    icone: "brain",
    cor: "purple",
   duration: "4h",
    professor: ["Thaiany Santana"],
    image: "../src/workshops/1.jpeg",
    date: "21/08",
    local: "LAB 3",
    organizer: "IntegraSI",
    link: "",
    slots: 50,
    audience: "Veteranos"
  },
  {
    id: 2,
    title: "A Lógica do Acaso: Algoritmos, Ecossistemas de Software e Pseudoaleatoriedade",
    descricao: "O seminário explora a lógica dos algoritmos e sua integração em sistemas complexos, focando na ilusão da aleatoriedade computacional. Diferenciamos a geração pseudoaleatória (PRNG), baseada em fórmulas matemáticas, da aleatoriedade verdadeira (TRNG). Ilustramos esses conceitos analisando a lógica por trás de dados em RPGs virtuais e sistemas antifraude de plataformas de apostas (Provably Fair). A apresentação inclui uma demonstração prática de ordenação visual de dados e um experimento de geração de \"sorte\" real via ruído atmosférico.",
    icone: "settings",
    cor: "blue",
   duration: "4h",
    professor: ["João Paulo de Oliveira Carneiro, Agson Asafe Junqueira Pereira, Enzo Gabriel, Icaro Assis"],
    image: "../src/workshops/6.jpeg",
    date: "18/08",
    local: "LAB 2",
    organizer: "IntegraSI",
    link: "",
    slots: 30,
    audience: "Calouros"
  },
  {
    id: 3,
    title: "Do Zero ao Back-end: Construindo uma API de Gestão de Estoque com MongoDB",
    descricao: "Esta oficina prática guiará os participantes na criação de uma API REST funcional para Gestão de Estoque utilizando as tecnologias mais demandadas no mercado atual: Node.js, TypeScript e MongoDB (via Mongoose). Adotando a metodologia de aprendizado ativo (\"mão na massa\"), os alunos serão introduzidos aos conceitos de rotas, métodos HTTP e persistência em bancos NoSQL. Juntos, desenvolveremos as quatro operações fundamentais de um CRUD: Cadastrar produtos, Listar o estoque atual, Atualizar quantidades de mercadorias e Remover itens obsoletos.",
    icone: "database",
    cor: "green",
   duration: "4h",
    professor: [
      "João Guilherme G. Pinheiro",
      "Carlos Henrique De S. S. Santaigo"
    ],
    image: "../src/workshops/4.jpeg",
    date: "19/08",
    local: "LAB 3",
    organizer: "IntegraSI",
    link: "",
    slots: 30,
    audience: "Veteranos"
  },
  {
    id: 4,
    title: "Code Review da Vida Real: O método KISS contra as maiores gambiarras",
    descricao: "Esta palestra apresenta um choque de realidade entre a teoria acadêmica e a prática do mercado, utilizando o princípio KISS (Keep It Simple, Stupid). Através de uma \"Code Review da vida real\", analisaremos exemplos de códigos confusos, como o uso desnecessário de funções complexas de conversão de tipos ao invés de manter o nível de código alinhado com a equipe, ou tratativas exageradas para validar variáveis de rota que possuem lógicas simples e diretas. O objetivo é mostrar, com humor e estudos de caso focados no dia a dia, que a melhor solução é evitar o excesso de complexidade. O melhor desenvolvedor não é o que escreve lógicas indecifráveis, mas aquele que escreve um código óbvio, limpo e que toda a equipe consegue dar manutenção.",
    icone: "code",
    cor: "orange",
   duration: "4h",
    professor: ["Antonio Gabriel Gomes Falcão do Nascimento"],
    image: "../src/workshops/5.jpeg",
    date: "20/08",
    local: "LAB 3",
    organizer: "IntegraSI",
    link: "",
    slots: 30,
    audience: "Veteranos"
  },
  {
    id: 5,
    title: "Ética e Responsabilidade no Uso de Dados e IA",
    descricao: "Uma palestra com roda de conversa sobre ética e responsabilidade no uso de dados pessoais e inteligência artificial, temas centrais para quem vai atuar em tecnologia. Vamos discutir os impactos das decisões automatizadas, a privacidade dos usuários, vieses algorítmicos, transparência e conformidade com a legislação, além de boas práticas para o desenvolvimento e uso consciente da IA. Um espaço aberto para troca de ideias, reflexões e perguntas, conectando teoria, realidade e futuro.",
    icone: "shield",
    cor: "red",
   duration: "4h",
    professor: ["Fátima Pereira Santos Pinho"],
    image: "../src/workshops/2.jpeg",
    date: "20/08",
    local: "LAB 2",
    organizer: "IntegraSI",
    link: "",
    slots: 30,
    audience: "Calouros"
  },
  {
    id: 6,
    title: "Personalizando o Git",
    descricao: "como deixar seu perfil do github mais interessante",
    icone: "globe",
    cor: "gray",
   duration: "4h",
    professor: ["chaira santos"],
    image: "../src/workshops/7.jpeg",
    date: "18/08",
    local: "LAB 3",
    organizer: "IntegraSI",
    link: "",
    slots: 10,
    audience: "Calouros"
  },
  {
    id: 7,
    title: "Personalizando o Git",
    descricao: "como deixar seu perfil do github mais interessante",
    icone: "globe",
    cor: "gray",
   duration: "4h",
    professor: ["chaira santos"],
    image: "../src/workshops/3.jpeg",
    date: "21/08",
    local: "LAB 2",
    organizer: "IntegraSI",
    link: "",
    slots: 10,
    audience: "Veteranos"
  },
  {
    id: 8,
    title: "Jornada SI: Do Calouro ao Profissional de Tecnologia",
    descricao: "A palestra vai apresentar, de forma prática e inspiradora, os desafios e aprendizados da vida acadêmica em Sistemas de Informação, mostrando como transformar conhecimento em oportunidades no mercado de tecnologia. Uma conversa sobre escolhas, experiências e caminhos que conectam o calouro de hoje ao profissional que o mercado precisa amanhã.",
    icone: "settings",
    cor: "blue",
   duration: "4h",
    professor: ["Rafael Brasil"],
    image: "../src/workshops/8.jpeg",
    date: "19/08",
    local: "LAB 2",
    organizer: "IntegraSI",
    link: "",
    slots: 30,
    audience: "Calouros"
  },
];


/*===========================================
            CRONOGRAMA DATA - em andamento
===========================================*/


const cronograma = [
  {
    dia: "Dia 1",
    data: "17 Ago, 2026",
    eventos: [
      {
        classificacao: "TODOS",
        hora: "18:50",
        titulo: "ABERTURA INTEGRASI"
      }
    ]
  },

  {
    dia: "Dia 2",
    data: "18 Ago, 2026",
    eventos: [
      {
        classificacao: "CAL",
        hora: "18:50",
        titulo:
          "A Lógica do Acaso: Algoritmos, Ecossistemas de Software e Pseudoaleatoriedade"
      },
      {
        classificacao: "VET",
        hora: "18:50",
        titulo: "Personalizando o seu git"
      },
      {
        classificacao: "ENA",
        hora: "18:50",
        titulo: "FUNDAMENTOS E ESTRATÉGIA"
      }
    ]
  },

  {
    dia: "Dia 3",
    data: "19 Ago, 2026",
    eventos: [
      {
        classificacao: "CAL",
        hora: "18:50",
        titulo:
          "Jornada SI: Do Calouro ao Profissional de Tecnologia - Rafael Brasil"
      },
      {
        classificacao: "VET",
        hora: "18:50",
        titulo:
          "Do Zero ao Back-end: Construindo uma API de Gestão de Estoque com MongoDB"
      },
      {
        classificacao: "ENA",
        hora: "18:50",
        titulo: "DESENVOLVIMENTO E INFRAESTRUTURA"
      }
    ]
  },

  {
    dia: "Dia 4",
    data: "20 Ago, 2026",
    eventos: [
      {
        classificacao: "CAL",
        hora: "18:50",
        titulo: "Ética e Responsabilidade no Uso de Dados e IA"
      },
      {
        classificacao: "VET",
        hora: "18:50",
        titulo:
          "Code Review da Vida Real: O método KISS contra as maiores gambiarrias"
      },
      {
        classificacao: "ENA",
        hora: "18:50",
        titulo: "GESTÃO, DADOS E SEGURANÇA"
      }
    ]
  },

  {
    dia: "Dia 5",
    data: "21 Ago, 2026",
    eventos: [
      {
        classificacao: "CAL",
        hora: "18:50",
        titulo: "Personalizando o seu git"
      },
      {
        classificacao: "VET",
        hora: "18:50",
        titulo:
          "Soft Skills: O Diferencial do Profissional de Tecnologia na Era da Inteligência Artificial"
      },
      {
        classificacao: "ENA",
        hora: "18:50",
        titulo: "ALGORITMOS, MODELAGEM E DESENVOLVIMENTO"
      }
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
    role: "Professor e Organizador do evento",
     photo: "src/time/lucasS.jpeg",
     bgColor: "#DEE5E1",  
     maskColor: "#DEE5E1",
     social: { linkedin: "https://www.linkedin.com/in/lasilvas", github: "https://github.com/lasilva" }
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
     photo: "src/time/chaira.jpeg",
     bgColor: "#D6C6E7",  
     maskColor: "#D6C6E7",
     social: { linkedin: "#", github: "https://github.com/chairass" }
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
     social: { linkedin: "https://www.linkedin.com/in/f%C3%A1tima-pinho-9086562b3/", github: "https://github.com/fatimapsp" }
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
     social: { linkedin: "https://www.linkedin.com/in/gustavo-costa-5878591b4/", github: "https://github.com/brguzz" }
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

  //  {
  //   name: "Leonardo Freitas",
  //   role: "Coffee Break e Decoração",
  //    photo: "src/time/leonardo.jpeg",
  //    bgColor: "#25C1C0",  
  //    maskColor: "#25C1C0",
  //    social: { linkedin: "", github: "" }
  //  },

   {
    name: "Gabriel Da Silva",
    role: "Configuração e suporte a oficinas e laboratórios",
     photo: "src/time/gabriel.jpeg",
     bgColor: "#496571",  
     maskColor: "#496571",
     social: { linkedin: "https://www.linkedin.com/in/gabriel-silva-61b034219", github: "https://github.com/bielav" }
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
