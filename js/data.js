
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
    image: "src/workshops/background.png",
    title: "N/A",
    date: "Sex, 15 Mar 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec",
    slots: 40,
    duration: "4h",
    audience: "Veteranos"
  },
  {
    image: "src/workshops/background.png",
    title: "N/A",
    date: "Seg, 18 Mar 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec",
    slots: 120,
    duration: "8h",
    audience: "Todos"
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
  
  // {
  //   name: "João Mira",
  //   role: "Líder da LATEC",
  //   photo: "src/time/jmira.jpg",
  //   bgColor: "#d0f0fd", 
  //   maskColor: "#2196f3",
  //   social: { linkedin: "https://www.linkedin.com/in/jo%C3%A3o-mira/", github: "https://github.com/jaomira" }
  // },
  // {
  //   name: "Giovanna Araujo",
  //   role: "Vice-Líder da LATEC",
  //   photo: "src/time/giovanna.jpeg",
  //   bgColor: "#fddde6", 
  //   maskColor: "#ffa6c4",
  //   social: { linkedin: "https://www.linkedin.com/in/giovanna-oliveira-araujo-9b0bb7323/", github: "https://github.com/NanaGio" }
  // },
  //  {
  //   name: "Carlos H. Santiago",
  //   role: "Gestão dos labs",
  //   photo: "src/time/caos.jpg",
  //   bgColor: "#c4db40", 
  //   maskColor: "#8588de",
  //   social: { linkedin: "https://www.linkedin.com/in/carlos-h-santiago/en", github: "https://github.com/CarlosH-Santiago" }
  // },
  //  {
  //   name: "Henrique Estrela",
  //   role: "Gestão dos labs",
  //   photo: "src/time/estrela.jpeg",
  //   bgColor: "#ca9610", 
  //   maskColor: "#ca9610",
  //   social: { linkedin: "https://www.linkedin.com/in/henrique-estrela-21163921a/", github: "https://github.com/Henrique-Estrela" }
  // },
  // {
  //   name: "Rafael Brasil",
  //   role: "Coordenador do curso",
  //   photo: "src/time/rafaelB.jpeg",
  //   bgColor: "#53f31e", 
  //   maskColor: "#53f31e",
  //   social: { linkedin: "", github: "" }
  // },

];

