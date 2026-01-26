// CONTADOR ANIMADO
const counters = document.querySelectorAll("[data-count]");
const sections = document.querySelectorAll(".section");
const grid = document.getElementById("workshopsGrid");
const scheduleGrid = document.getElementById("scheduleGrid");
const track = document.getElementById('team-track');
const galleryGrid = document.getElementById('gallery-grid');
const loadMoreBtn = document.getElementById('load-more-btn');
const loadMoreContainer = document.getElementById('load-more-container');
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
let modalDate = document.getElementById('modal-date-display');
const closeModal = document.querySelector('.modal-close');

const itemsPerPage = 6;
let currentPage = 0;

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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));



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

      <!-- EXTRA INFO -->
      <div class="workshop-extra">
        <span class="workshop-slots">
          ${w.slots} vagas
        </span>

        <span class="workshop-duration">
          ${w.duration} de curso
        </span>

        <span class="workshop-audience classificacao-${w.audience.toLowerCase()}">
          ${w.audience}
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
          <strong class="classificacao-${ev.classificacao.toLowerCase()}">${ev.classificacao}</strong>
          <strong>${ev.hora}</strong>
          <span>${ev.titulo}</span>
        </li>
      `).join("")}
    </ul>
  </article>
`).join("");



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

function createJoinCardHTML() {
  return `
    <div class="cta-content-glass">
    <div class="glow-border"></div>
    <h1>Inscrições Abertas</h1>
    <a class="btn-primary-glow" href="https://forms.gle/Zw79s4dVDyG2tQKy9" target="_blank">
      Venha Fazer Parte
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </a>
  </div>
  `;
}

// 3. Renderização e Lógica de Loop Infinito

if (track) {
  const viewport = track.parentElement; // .carousel-viewport
  let cardsHTML;
  if (teamMembers.length === 0) {
    cardsHTML = createJoinCardHTML();
    track.innerHTML = cardsHTML;
    viewport.classList.add('no-animation');
  } else {
    cardsHTML = teamMembers.map((member, index) => createCardHTML(member, index)).join('');
    track.innerHTML = cardsHTML + cardsHTML;
    viewport.classList.remove('no-animation');
  }

  // Recarregar ícones
  if (window.lucide) lucide.createIcons();
}



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
function hideModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

if (closeModal) closeModal.addEventListener('click', hideModal);
if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideModal(); });

// HEADER FIXO NO SCROLL
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) { // Threshold maior para transição mais suave
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

// FAQs ACCORDION
document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');
      
      // Fecha todas as outras
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      // Abre a clicada se não estava ativa
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});