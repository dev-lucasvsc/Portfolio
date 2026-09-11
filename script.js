// ===========================
// TEMA
// ===========================
const toggle = document.getElementById('theme-toggle');
const body = document.body;

function applyThemeLabel(theme){
  toggle.textContent = theme === 'dark' ? 'modo claro' : 'modo escuro';
}

const savedTheme = localStorage.getItem('lv-theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
applyThemeLabel(savedTheme);

toggle.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  localStorage.setItem('lv-theme', next);
  applyThemeLabel(next);
});

// ===========================
// DADOS — PROJETOS
// ===========================
const projetos = [
  {
    nome: 'Sistema de Gestão — Clínicas Odontológicas',
    status: 'producao',
    statusLabel: 'em produção',
    desc: 'Sistema usado no dia a dia por duas clínicas do mesmo grupo. Cadastro de pacientes compartilhado entre unidades, ciclo completo de produção de próteses (do molde à entrega) e orçamentos de tratamento com fluxo de aprovação.',
    tags: ['Node.js', 'Fastify', 'PostgreSQL', 'Prisma', 'React', 'Docker'],
    metric: '2', metricLabel: 'clínicas em uso diário',
    link: null,
    linkLabel: 'projeto privado (cliente)',
    filtros: ['producao']
  },
  {
    nome: 'UniTinder',
    status: 'academico',
    statusLabel: 'acadêmico',
    desc: 'Plataforma de matching entre estagiários e empresas parceiras da Fábrica de Software. Backend com controle de acesso por cargo e autenticação JWT; frontend com validação de CPF/CNPJ.',
    tags: ['TypeScript', 'React', 'Node.js', 'Prisma', 'PostgreSQL'],
    metric: null, metricLabel: null,
    link: 'https://github.com/ProcessAI/unieuro-unitinder-202601',
    linkLabel: 'ver repositório',
    filtros: ['academico']
  },
  {
    nome: 'Sexta-Feira',
    status: 'pessoal',
    statusLabel: 'pessoal',
    desc: 'Assistente local com dois modelos de linguagem trabalhando em conjunto, ativação por voz offline (sem depender de internet) e controle direto do sistema operacional.',
    tags: ['Python', 'Ollama', 'Claude API', 'Vosk', 'WebSocket'],
    metric: null, metricLabel: null,
    link: 'https://github.com/dev-lucasvsc/Sexta-Feira',
    linkLabel: 'ver repositório',
    filtros: ['pessoal']
  },
  {
    nome: 'Sistema Hospitalar',
    status: 'academico',
    statusLabel: 'acadêmico',
    desc: 'Sistema de gestão hospitalar construído para estudar concorrência na prática: fila de mensagens com Redis, bloqueio otimista em atualizações simultâneas e broadcast em tempo real via WebSocket.',
    tags: ['Java', 'Spring Boot', 'Redis', 'WebSocket', 'PostgreSQL'],
    metric: null, metricLabel: null,
    link: 'https://github.com/dev-lucasvsc/hospital-management-system',
    linkLabel: 'ver repositório',
    filtros: ['academico']
  },
  {
    nome: 'Análise Fiscal Distribuída',
    status: 'academico',
    statusLabel: 'acadêmico · benchmark',
    desc: 'Pipeline em Python que processa notas fiscais em paralelo com multiprocessing. Cada otimização foi medida e comparada — não é estimativa, é benchmark real rodado do zero.',
    tags: ['Python', 'multiprocessing'],
    metric: '3,5x', metricLabel: 'mais rápido após otimização',
    link: 'https://github.com/dev-lucasvsc/Distribuido-Doc_fiscall',
    linkLabel: 'ver repositório',
    filtros: ['academico']
  },
  {
    nome: 'RPA Fiscal — Objetiva Atacadista',
    status: 'producao',
    statusLabel: 'produção · corporativo',
    desc: 'Automação de processos fiscais usada internamente pela empresa. Criada para um sistema legado sem API disponível, controlando diretamente a interface gráfica.',
    tags: ['Python', 'pyautogui', 'tkinter', 'SQLite'],
    metric: null, metricLabel: null,
    link: 'https://github.com/dev-lucasvsc/Automacao-Objtetiva',
    linkLabel: 'ver repositório',
    filtros: ['producao']
  },
  {
    nome: 'StreamApp',
    status: 'pessoal',
    statusLabel: 'pessoal',
    desc: 'Plataforma de streaming full-stack, com servidor HTTP nativo em Java no backend.',
    tags: ['Java', 'React', 'TypeScript'],
    metric: null, metricLabel: null,
    link: 'https://github.com/dev-lucasvsc/StreamApp',
    linkLabel: 'ver repositório',
    filtros: ['pessoal']
  },
  {
    nome: 'Nextime',
    status: 'academico',
    statusLabel: 'acadêmico · mobile',
    desc: 'App mobile de agendamento com dois perfis (cliente e prestador), chat integrado e dashboard financeiro.',
    tags: ['JavaScript', 'Cordova'],
    metric: null, metricLabel: null,
    link: 'https://github.com/dev-lucasvsc/nextime-mobile',
    linkLabel: 'ver repositório',
    filtros: ['academico']
  }
];

// ===========================
// RENDER — REGISTRY
// ===========================
const registry = document.getElementById('proj-registry');

function tagsHTML(tags){
  return tags.map(t => `<span class="reg-tag">${t}</span>`).join('');
}

function itemHTML(p){
  const linkHTML = p.link
    ? `<a href="${p.link}" target="_blank" rel="noopener" class="reg-link">${p.linkLabel}</a>`
    : `<span class="reg-link disabled">${p.linkLabel}</span>`;

  const metricHTML = p.metric
    ? `<div class="reg-metric">${p.metric}<span class="reg-metric-label">${p.metricLabel}</span></div>`
    : '';

  return `
    <details class="reg-item" data-status="${p.status}">
      <summary>
        <span class="reg-status ${p.status}">${p.statusLabel}</span>
        <span class="reg-name">${p.nome}</span>
        <span class="reg-meta">${p.tags.slice(0,2).join(' / ')}</span>
        <span class="reg-toggle">+</span>
      </summary>
      <div class="reg-detail">
        <div>
          <p>${p.desc}</p>
          <div class="reg-tags">${tagsHTML(p.tags)}</div>
          ${linkHTML}
        </div>
        <div class="reg-side">${metricHTML}</div>
      </div>
    </details>
  `;
}

function renderRegistry(filtro = 'todos'){
  const lista = filtro === 'todos'
    ? projetos
    : projetos.filter(p => p.filtros.includes(filtro));
  registry.innerHTML = lista.map(itemHTML).join('');
}

document.querySelectorAll('.f').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.f').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderRegistry(btn.dataset.f);
  });
});

renderRegistry();
