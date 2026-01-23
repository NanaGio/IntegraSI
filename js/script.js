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

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
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
    title: "N/A",
    date: "Sex, 15 Mar 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec"
  },
  {
    image: "src/workshops/background.png",
    title: "N/A",
    date: "Seg, 18 Mar 2026",
    organizer: "IntegraSI",
    link: "https://www.sympla.com.br/produtor/latec"
  }
];

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
        <a href="${w.link}" class="btn-buy" target="_blank">Inscreva-se</a>
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
          <strong>${ev.classificacao}</strong>
          <strong>${ev.hora}</strong>
          <span>${ev.titulo}</span>
        </li>
      `).join("")}
    </ul>
  </article>
`).join("");

// 1. Dados da equipe (Mesma estrutura)
const teamMembers = [
  {
    name: "João Mira",
    role: "Líder da LATEC",
    photo: "src/img/jmira.jpg",
    bgColor: "#d0f0fd", 
    maskColor: "#2196f3",
    social: { linkedin: "https://www.linkedin.com/in/jo%C3%A3o-mira/", github: "https://github.com/jaomira" }
  },
  {
    name: "Giovanna Araujo",
    role: "Vice-Líder da LATEC",
    photo: "src/img/giovanna.jpeg",
    bgColor: "#fddde6", 
    maskColor: "#ffa6c4",
    social: { linkedin: "https://www.linkedin.com/in/giovanna-oliveira-araujo-9b0bb7323/", github: "https://github.com/NanaGio" }
  },

];
function createCardHTML(member, index) {
  return `
    <div class="team-card" style="background-color: ${member.bgColor}">
      <div class="abstract-shape shape-style-${index % 3}" style="background-color: ${member.maskColor}"></div>
      <div class="card-content">
        <div class="simple-image-wrapper">
          <img src="${member.photo}" alt="${member.name}">
        </div>
        <h3>${member.name}</h3>
        <span>${member.role}</span>
        <div class="social-row">
          <a href="${member.social.linkedin}" class="social-btn" target="_blank"><i data-lucide="linkedin"></i></a>
          <a href="${member.social.github}" class="social-btn" target="_blank"><i data-lucide="github"></i></a>
        </div>
      </div>
    </div>
  `;
}

// 3. Renderização e Lógica de Loop Infinito
const track = document.getElementById('team-track');

if (track) {
  // Passo A: Gerar os cards originais
  const cardsHTML = teamMembers.map((member, index) => createCardHTML(member, index)).join('');
  
  // Passo B: Injetar DUAS vezes a lista na trilha
  // A primeira vez é a lista que vemos, a segunda é a "cópia" que entra suavemente
  track.innerHTML = cardsHTML + cardsHTML;

  // Recarregar ícones
  if (window.lucide) lucide.createIcons();
}


// 1. DADOS DA GALERIA 
// Usei tamanhos diferentes nas URLs (ex: 500x700, 500x400) para criar o visual "quebrado/dinâmico"
const galleryData = [
  // Lote 1
  { id: 1, src: "src/img/evento1.jpeg",  date: "2025" },
  { id: 2, src: "src/img/evento2.jpeg",  date: "2025" },
  { id: 3, src: "src/img/evento3.jpeg",  date: "2025" },
  { id: 4, src: "src/img/evento4.jpeg",  date: "2025" },
  { id: 5, src: "src/img/evento5.jpeg",  date: "2025" },
 
  
  // Lote 2 (Carregar Mais)
  { id: 7, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop", date: "03 Mar 2024" },
  { id: 8, src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=800&fit=crop", date: "04 Mar 2024" },
  { id: 9, src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=450&fit=crop", date: "06 Mar 2024" },
  { id: 10, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=900&fit=crop", date: "06 Mar 2024" },
  { id: 11, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop", date: "01 Mar 2024" },
  { id: 12, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop", date: "05 Mar 2024" }
];

const itemsPerPage = 6;
let currentPage = 0;

const galleryGrid = document.getElementById('gallery-grid');
const loadMoreBtn = document.getElementById('load-more-btn');
const loadMoreContainer = document.getElementById('load-more-container');

// FUNÇÃO RENDERIZAR
function renderGallery() {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsRender = galleryData.slice(start, end);

  const html = itemsRender.map(item => `
    <div class="gallery-item" onclick="openModal('${item.src}', '${item.date}')">
      <img src="${item.src}" alt="${item.caption}">
      <div class="gallery-overlay">
        <span class="gallery-date">${item.date}</span>
      </div>
    </div>
  `).join('');

  galleryGrid.insertAdjacentHTML('beforeend', html);
  currentPage++;

  if (currentPage * itemsPerPage >= galleryData.length) {
    loadMoreContainer.style.display = 'none';
  }
}

// Inicializar
renderGallery();

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', renderGallery);
}

// LÓGICA DO MODAL (Atualizada com Data)
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');

// Criamos um elemento novo para a data no modal dinamicamente se não existir
let modalDate = document.getElementById('modal-date-display');
if (!modalDate && modalCaption) {
    modalDate = document.createElement('span');
    modalDate.id = 'modal-date-display';
    modalDate.className = 'modal-date';
    // Insere antes da legenda
    modalCaption.parentNode.insertBefore(modalDate, modalCaption);
}

// Abre o modal
window.openModal = function(src, caption, date) {
  modalImg.src = src;
  modalCaption.innerText = caption;
  if(modalDate) modalDate.innerText = date;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fecha o modal
const closeModal = document.querySelector('.modal-close');
function hideModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

if (closeModal) closeModal.addEventListener('click', hideModal);
if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideModal(); });