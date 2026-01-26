
// Função para renderizar os cursos
function renderCursos() {
  const cursosGrid = document.getElementById('cursosGrid');

  cursosGrid.innerHTML = workshops.filter(c => c.slots > 0).map(c => `
    <div class="curso-card">
      <div class="curso-image-wrapper">
        <img src="${c.image}" alt="${c.title}" class="curso-image">
      </div>

      <div class="curso-content">
        <h3 class="curso-title">${c.title}</h3>
        <div class="workshop-meta">
        <span>
          <i data-lucide="calendar"></i>
          ${c.date}
        </span>
      </div>
        <p class="curso-description">${c.descricao}</p>

        <div class="curso-meta">
          <div class="meta-item">
            <i data-lucide="clock"></i>
            <span>${c.duration}</span>
          </div>
          <div class="meta-item">
            <i data-lucide="users"></i>
            <span>${c.slots}</span>
          </div>
          <div class="meta-item">
            <i data-lucide="target"></i>
            <span class="audience-${c.audience.toLowerCase()}">${c.audience}</span>
          </div>
          <div class="meta-item">
            <i data-lucide="user"></i>
            <span>${Array.isArray(c.professor) ? c.professor.join(', ') : c.professor}</span>
          </div>
        </div>
        <div class="curso-footer">
          <span class="organizer">Por <strong>${c.organizer}</strong></span>
          <a href="${c.link}" class="btn-enroll btn-buy" target="_blank">
            Inscrever-se
            <i data-lucide="arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `).join("");

  // Re-inicializar ícones do Lucide
  lucide.createIcons();
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', renderCursos);