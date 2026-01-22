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

// 1. Dados da equipe (Mesma estrutura)
const teamMembers = [
  {
    name: "Dra. Sarah M.",
    role: "Coord. Geral",
    photo: "../src/time/ex.jpg",
    bgColor: "#fff7cd", 
    maskColor: "#ffc107", // Usado agora apenas para a forma do fundo
    social: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    name: "Alex Chen",
    role: "Líder Técnico",
    photo: "https://i.pravatar.cc/300?img=33",
    bgColor: "#d0f0fd", 
    maskColor: "#2196f3",
    social: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    name: "Maya Patel",
    role: "Oficinas",
    photo: "https://i.pravatar.cc/300?img=29",
    bgColor: "#fddde6", 
    maskColor: "#e91e63",
    social: { linkedin: "#", instagram: "#", github: "#" }
  },
  {
    name: "James W.",
    role: "Institucional",
    photo: "https://i.pravatar.cc/300?img=12",
    bgColor: "#e2f6ca", 
    maskColor: "#8bc34a",
    social: { linkedin: "#", instagram: "#", github: "#" }
  },
   {
    name: "Léa Vincent",
    role: "Design",
    photo: "https://i.pravatar.cc/300?img=45",
    bgColor: "#d7effe", 
    maskColor: "#00bcd4",
    social: { linkedin: "#", instagram: "#", github: "#" }
  },
   {
    name: "Théo Faure",
    role: "Marketing",
    photo: "https://i.pravatar.cc/300?img=68",
    bgColor: "#ede7f6", 
    maskColor: "#673ab7",
    social: { linkedin: "#", instagram: "#", github: "#" }
  }
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
          <a href="${member.social.linkedin}" class="social-btn"><i data-lucide="linkedin"></i></a>
          <a href="${member.social.instagram}" class="social-btn"><i data-lucide="instagram"></i></a>
          <a href="${member.social.github}" class="social-btn"><i data-lucide="github"></i></a>
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
  { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop", caption: "Palestra Magna: O Futuro da IA", date: "02 Mar 2024" },
  { id: 2, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop", caption: "Networking no Coffee Break", date: "02 Mar 2024" },
  { id: 3, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop", caption: "Hackathon: Equipes Focadas", date: "04 Mar 2024" },
  { id: 4, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=750&fit=crop", caption: "Workshop de React Avançado", date: "03 Mar 2024" },
  { id: 5, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=800&fit=crop", caption: "Auditório Principal Lotado", date: "02 Mar 2024" },
  { id: 6, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=800&fit=crop", caption: "Mentoria com Especialistas", date: "05 Mar 2024" },
  
  // Lote 2 (Carregar Mais)
  { id: 7, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop", caption: "Mesa Redonda: Mulheres na TI", date: "03 Mar 2024" },
  { id: 8, src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=800&fit=crop", caption: "Momentos de Descontração", date: "04 Mar 2024" },
  { id: 9, src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=450&fit=crop", caption: "Reunião de Líderes de Comunidade", date: "06 Mar 2024" },
  { id: 10, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=900&fit=crop", caption: "Premiação dos Vencedores", date: "06 Mar 2024" },
  { id: 11, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop", caption: "Time de Organização", date: "01 Mar 2024" },
  { id: 12, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop", caption: "Brainstorming Criativo", date: "05 Mar 2024" }
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
    <div class="gallery-item" onclick="openModal('${item.src}', '${item.caption}', '${item.date}')">
      <img src="${item.src}" alt="${item.caption}">
      <div class="gallery-overlay">
        <span class="gallery-date">${item.date}</span>
        <p class="gallery-caption">${item.caption}</p>
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