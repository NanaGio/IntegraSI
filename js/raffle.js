// Raffle visual-only renderer
document.addEventListener('DOMContentLoaded', () => {
  const GRID_SIZE = 100;
  const STORAGE_KEY = 'raffleMapV1';

  const grid = document.getElementById('raffleGrid');
  const availableEl = document.getElementById('raffle-available');
  const takenEl = document.getElementById('raffle-taken');

  const takenImagePath = 'src/img/taken.png'; // provide your occupied-image here

  // Preset map of reserved numbers.
  // Edit this object to set which numbers are already reserved and by whom.
  // Example: {"3": {name: "João", ts: 1692210000000}, "7": {name: "Ana"}}
  const PRESET_RAFFLE_MAP = {
    "3": { name: 'João', ts: Date.now() - 1000 * 60 * 60 },
    "7": { name: 'Ana', ts: Date.now() - 1000 * 60 * 60 },
    "15": { name: 'Carlos', ts: Date.now() - 1000 * 60 * 60 },
    "22": { name: 'Maria', ts: Date.now() - 1000 * 60 * 60 },
    "30": { name: 'Pedro', ts: Date.now() - 1000 * 60 * 60 },

  };

  // Use internal map (read-only view). Do NOT use localStorage for marking.
  let raffleMap = Object.assign({}, PRESET_RAFFLE_MAP);

  function render() {
    if (!grid) return;
    grid.innerHTML = '';
    let takenCount = 0;
    for (let i = 1; i <= GRID_SIZE; i++) {
      const cell = document.createElement('div');
      cell.className = 'raffle-cell';
      const num = document.createElement('div');
      num.className = 'raffle-number';
      num.textContent = i;
      cell.appendChild(num);

      if (raffleMap[i]) {
        takenCount++;
        // badge image marker (does not cover the number)
        const badge = document.createElement('img');
        badge.className = 'raffle-taken-badge';
        badge.src = 'src/img/icone.png';
        badge.alt = 'Reservado';
        cell.appendChild(badge);
        cell.classList.add('taken');
        cell.title = `Reservado por: ${raffleMap[i].name || '—'}`;
      } else {
        cell.classList.add('free');
      }

      grid.appendChild(cell);
    }
    availableEl && (availableEl.textContent = `Disponíveis: ${GRID_SIZE - takenCount}`);
    takenEl && (takenEl.textContent = `Reservados: ${takenCount}`);

    // render reservation list (number + name)
    const listContainer = document.getElementById('raffleList');
    if (listContainer) {
      listContainer.innerHTML = '';
      const entries = Object.keys(raffleMap).map(k => ({ num: Number(k), info: raffleMap[k] }));
      entries.sort((a, b) => a.num - b.num);
      if (entries.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'raffle-list-empty';
        empty.textContent = 'Nenhuma reserva no momento.';
        listContainer.appendChild(empty);
      } else {
        // global button to view all participants
        const viewAllBtn = document.createElement('button');
        viewAllBtn.className = 'view-all-btn';
        viewAllBtn.type = 'button';
        viewAllBtn.textContent = `Ver participantes (${entries.length})`;
        viewAllBtn.addEventListener('click', () => showAllParticipantsModal(entries));
        listContainer.appendChild(viewAllBtn);

        entries.forEach(e => {
            const item = document.createElement('div');
            item.className = 'raffle-list-item';
            const num = document.createElement('div');
            num.className = 'num';
            num.textContent = e.num;

           

            const meta = document.createElement('div');
            meta.className = 'meta';
            if (e.info.ts) {
              const d = new Date(e.info.ts);
              meta.textContent = d.toLocaleString();
            }

            item.appendChild(num);
            item.appendChild(btn);
            item.appendChild(meta);
            listContainer.appendChild(item);
          });

        // attach click handlers for modal buttons
        listContainer.querySelectorAll('.view-participants-btn').forEach(b => {
          b.addEventListener('click', () => {
            const n = b.dataset.num;
            const info = raffleMap[n] || {};
            showParticipantModal(Number(n), info);
          });
        });
      }
    }

    // modal helper
    function showParticipantModal(num, info) {
      // create overlay
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      const modal = document.createElement('div');
      modal.className = 'modal';
      const title = document.createElement('h3');
      title.textContent = `Reserva #${num}`;
      const content = document.createElement('div');
      content.className = 'modal-content';
      const who = document.createElement('div');
      who.textContent = `Nome: ${info.name || '—'}`;
      const when = document.createElement('div');
      when.textContent = info.ts ? `Data: ${new Date(info.ts).toLocaleString()}` : '';
      content.appendChild(who);
      if (info.ts) content.appendChild(when);
      const close = document.createElement('button');
      close.className = 'modal-close';
      close.type = 'button';
      close.textContent = 'Fechar';
      close.addEventListener('click', () => document.body.removeChild(overlay));
      modal.appendChild(title);
      modal.appendChild(content);
      modal.appendChild(close);
      overlay.appendChild(modal);
      overlay.addEventListener('click', (ev) => { if (ev.target === overlay) document.body.removeChild(overlay); });
      document.body.appendChild(overlay);
    }
  }

  function showAllParticipantsModal(entries) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    const modal = document.createElement('div');
    modal.className = 'modal';
    const title = document.createElement('h3');
    title.textContent = `Participantes (${entries.length})`;
    const content = document.createElement('div');
    content.className = 'modal-content';
    const list = document.createElement('div');
    list.className = 'participants-list';
    entries.forEach(e => {
      const row = document.createElement('div');
      row.className = 'participant-row';
      const n = document.createElement('div');
      n.className = 'p-num';
      n.textContent = `#${e.num}`;
      const name = document.createElement('div');
      name.className = 'p-name';
      name.textContent = e.info.name || '—';
      row.appendChild(n);
      row.appendChild(name);
      list.appendChild(row);
    });
    content.appendChild(list);
    const close = document.createElement('button');
    close.className = 'modal-close';
    close.type = 'button';
    close.textContent = 'Fechar';
    close.addEventListener('click', () => document.body.removeChild(overlay));
    modal.appendChild(title);
    modal.appendChild(content);
    modal.appendChild(close);
    overlay.appendChild(modal);
    overlay.addEventListener('click', (ev) => { if (ev.target === overlay) document.body.removeChild(overlay); });
    document.body.appendChild(overlay);
  }

  // Optional: expose a function to replace the raffle map programmatically
  // (useful for server-side rendering or admin scripts). This keeps the
  // UI read-only for visitors but allows the developer to update the map.
  window.setRaffleMap = function(newMap) {
    raffleMap = Object.assign({}, newMap || {});
    render();
  };

  // initial render using the preset map
  render();
});
