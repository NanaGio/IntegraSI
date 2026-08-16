// CONTADOR ANIMADO
const counters = document.querySelectorAll("[data-count]");
const sections = document.querySelectorAll(".section");
const grid = document.getElementById("workshopsGrid");
const gridENADE = document.getElementById("workshopsEnadeGrid");
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


//OFICINAS
grid.innerHTML = workshops.filter(w => w.slots > 0).slice(0, 12).map(w => `
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
        ${w.local ? `<span>
          <i data-lucide="map-pin"></i>
        ${w.local}
        </span>` : ''}
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

//OFICINAS
gridENADE.innerHTML = workshopsEnade.filter(w => w.slots > 0).slice(0, 12).map(w => `
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
        ${w.local ? `<span>
          <i data-lucide="map-pin"></i>
        ${w.local}
        </span>` : ''}
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


//CRONOGRAMA
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
  const linkedinUrl = member.social?.linkedin || '#';
  const githubUrl = member.social?.github || '#';

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
          <a href="${linkedinUrl}" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de ${member.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6.94 8.5a1.56 1.56 0 1 0 0-3.12 1.56 1.56 0 0 0 0 3.12Z"></path>
              <path d="M5.5 9.75h2.88V18H5.5z"></path>
              <path d="M10.63 9.75h2.76v1.12h.04c.38-.72 1.31-1.48 2.7-1.48 2.88 0 3.41 1.9 3.41 4.37V18h-2.88v-7.22c0-1.72-.03-3.93-2.39-3.93-2.4 0-2.77 1.87-2.77 3.8V18H10.63z"></path>
            </svg>
          </a>
          <a href="${githubUrl}" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub de ${member.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path>
              <path d="M15 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-5.9a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C5.5 2.4 4.5 2.7 4.5 2.7a4.3 4.3 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.8 5.6 5.5 5.9a2.8 2.8 0 0 0-.8 2.2V21"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;
}


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

// HAMBURGER MENU FUNCTION
function toggleMenu() {
  const nav = document.querySelector('.header nav');
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.nav-overlay');

  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
}

// Close menu when clicking on nav links
document.querySelectorAll('.header nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});