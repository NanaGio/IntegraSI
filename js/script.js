// CONTADOR ANIMADO
const counters = document.querySelectorAll("[data-count]");

counters.forEach(counter => {
  const target = +counter.dataset.count;
  let current = 0;
  const increment = Math.ceil(target / 60);

  const update = () => {
    current += increment;
    if (current >= target) {
      counter.innerText = target + "+";
    } else {
      counter.innerText = current;
      requestAnimationFrame(update);
    }
  };

  update();
});

// SCROLL SUAVE (preparado para futuras seções)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
  });
});


// Fade-in ao rolar
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));


const workshops = [
  {
    image: "src/workshops/background.png",
    title: "Desenvolvimento Full-Stack",
    date: "Sex, 15 Mar 2026",
    organizer: "IntegraSI",
    link: "#"
  },
  {
    image: "src/workshops/background.png",
    title: "Arquitetura de Banco de Dados",
    date: "Seg, 18 Mar 2026",
    organizer: "IntegraSI",
    link: "#"
  },
  {
    image: "src/workshops/background.png",
    title: "Aplicações Cloud Native",
    date: "Qua, 20 Mar 2026",
    organizer: "IntegraSI",
    link: "#"
  },
  {
    image: "src/workshops/background.png",
    title: "Fundamentos de Cibersegurança",
    date: "Qui, 21 Mar 2026",
    organizer: "IntegraSI",
    link: "#"
  },
  {
    image: "src/workshops/background.png",
    title: "IA & Machine Learning",
    date: "Sex, 22 Mar 2026",
    organizer: "IntegraSI",
    link: "#"
  },
  {
    image: "src/workshops/background.png",
    title: "Otimização de Performance Web",
    date: "Sex, 22 Mar 2026",
    organizer: "IntegraSI",
    link: "#"
  }
];

const cronograma = [
  {
    dia: "Dia 1",
    data: "02 Mar, 2026",
    eventos: [
      { hora: "08:00", titulo: "Credenciamento" },
      { hora: "09:30", titulo: "Abertura Oficial" },
      { hora: "10:30", titulo: "Palestra Magna" },
      { hora: "14:00", titulo: "Início Oficinas" }
    ]
  },
  {
    dia: "Dia 2",
    data: "03 Mar, 2026",
    eventos: [
      { hora: "08:00", titulo: "Oficinas Práticas" },
      { hora: "14:00", titulo: "Mesa Redonda" },
      { hora: "16:00", titulo: "Networking Coffee" },
      { hora: "08:00", titulo: "Hackathon Início" },
      { hora: "14:00", titulo: "Mentoria Técnica" },
      { hora: "22:00", titulo: "Corujão Code" }
    ]
  },
  {
    dia: "Dia 3",
    data: "04 Mar, 2026",
    eventos: [
      { hora: "09:00", titulo: "Workshop Cloud" },
      { hora: "14:00", titulo: "Segurança Web" },
      { hora: "18:00", titulo: "Happy Hour" }
    ]
  },
  {
    dia: "Dia 4",
    data: "05 Mar, 2026",
    eventos: [
      { hora: "08:00", titulo: "Hackathon Início" },
      { hora: "14:00", titulo: "Mentoria Técnica" },
      { hora: "22:00", titulo: "Corujão Code" },
      { hora: "08:00", titulo: "Hackathon Início" },
      { hora: "14:00", titulo: "Mentoria Técnica" },
      { hora: "22:00", titulo: "Corujão Code" }
    ]
  },
  {
    dia: "Dia 5",
    data: "06 Mar, 2026",
    eventos: [
      { hora: "10:00", titulo: "Pitch Hackathon" },
      { hora: "14:00", titulo: "Premiação" },
      { hora: "16:00", titulo: "Encerramento" }
    ]
  }
];


const grid = document.getElementById("workshopsGrid");

grid.innerHTML = workshops.map(w => `
  <article class="workshop-card">
    <div class="workshop-image">
      <img src="${w.image}" alt="${w.title}">
    </div>

    <div class="workshop-body">
      <h3>${w.title}</h3>

      <div class="workshop-meta">
        <span>
          <i data-lucide="calendar"></i>
          ${w.date}
        </span>
      </div>

      <div class="workshop-footer">
        <span class="organizer">
          Organizado Por <strong>${w.organizer}</strong>
        </span>
        <a href="${w.link}" class="btn-buy">Inscreva-se</a>
      </div>
    </div>
  </article>
`).join("");


const scheduleGrid = document.getElementById("scheduleGrid");

scheduleGrid.innerHTML = cronograma.map(dia => `
  <article class="card schedule-card">
    <div class="card-header">
      <div class="icon-circle text-green">
        <i data-lucide="calendar"></i>
      </div>
      <div>
        <h4>${dia.dia}</h4>
        <span class="date">${dia.data}</span>
      </div>
    </div>

    <ul class="schedule-list">
      ${dia.eventos.map(ev => `
        <li>
          <strong>${ev.hora}</strong>
          <span>${ev.titulo}</span>
        </li>
      `).join("")}
    </ul>
  </article>
`).join("");




