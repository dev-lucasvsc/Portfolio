// ===========================
// TEMA
// ===========================
const toggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('lv-theme') || 'light';
body.setAttribute('data-theme', savedTheme);

toggle.addEventListener('click', () => {
    const current = body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
    localStorage.setItem('lv-theme', next);
});


// ===========================
// DADOS — PROJETOS
// ===========================
const ICONS = {
    'Java':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    'Spring Boot':  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    'Python':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'React':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'TypeScript':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'PostgreSQL':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'JavaScript':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'SQLite':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
};

const projetos = [
    {
        nome: 'Sexta-Feira',
        emoji: '🤖',
        desc: 'Assistente virtual desktop com wake word offline, LLM dual (Claude + Ollama), visão computacional, controle do SO e interface holográfica via WebSocket.',
        tags: ['Python', 'SQLite'],
        extras: ['LLM', 'Ollama', 'Vosk', 'WebSocket'],
        link: 'https://github.com/dev-lucasvsc/Sexta-Feira',
        filtros: ['python'],
        destaque: true
    },
    {
        nome: 'Hospital Management System',
        emoji: '🏥',
        desc: 'Sistema hospitalar completo com Spring Boot, JWT, WebSocket e arquitetura em camadas — agendamento de consultas, gestão de funcionários e logs de auditoria.',
        tags: ['Java', 'Spring Boot', 'PostgreSQL'],
        extras: ['JWT', 'WebSocket', 'REST API'],
        link: 'https://github.com/dev-lucasvsc/hospital-management-system',
        filtros: ['java'],
        destaque: true
    },
    {
        nome: 'StreamApp',
        emoji: '📺',
        desc: 'Plataforma de streaming full-stack. Backend em Java com POO avançada e servidor HTTP nativo. Frontend em React + TypeScript + Tailwind.',
        tags: ['Java', 'React', 'TypeScript', 'Tailwind CSS'],
        extras: [],
        link: 'https://github.com/dev-lucasvsc/StreamApp',
        filtros: ['java'],
        destaque: false
    },
    {
        nome: 'RPA Fiscal — Objetiva Atacadista',
        emoji: '⚙️',
        desc: 'Solução de RPA para automatizar processos fiscais corporativos. Interface gráfica com tkinter e banco de dados local para rastreamento das execuções.',
        tags: ['Python', 'SQLite'],
        extras: ['pyautogui', 'tkinter', 'RPA'],
        link: 'https://github.com/dev-lucasvsc/Automacao-Objtetiva',
        filtros: ['python', 'automacao'],
        destaque: false
    },
    {
        nome: 'Benchmark de Paralelismo',
        emoji: '⚡',
        desc: 'Processamento paralelo de imagem PPM de 16 GB com multiprocessing Python. Análise completa de speedup e eficiência por número de processos.',
        tags: ['Python'],
        extras: ['multiprocessing', 'benchmark'],
        link: 'https://github.com/dev-lucasvsc/unieuro-concorrente-202601-atividade4',
        filtros: ['python', 'automacao'],
        destaque: false
    },
    {
        nome: 'Nextime',
        emoji: '📅',
        desc: 'App mobile de agendamento com dois perfis (cliente e prestador), chat integrado, dashboard financeiro e ciclo completo de agendamento de serviços.',
        tags: ['JavaScript'],
        extras: ['Cordova', 'Mobile', 'CSS'],
        link: 'https://github.com/dev-lucasvsc/nextime-mobile',
        filtros: ['mobile'],
        destaque: false
    },
];


// ===========================
// RENDER PROJETOS
// ===========================
const grid = document.getElementById('proj-grid');

function tagHTML(nome) {
    const icon = ICONS[nome];
    return `<span class="proj-tag">${icon ? `<img src="${icon}" alt="${nome}">` : ''} ${nome}</span>`;
}

function extraTagHTML(nome) {
    return `<span class="proj-tag">${nome}</span>`;
}

function renderProjetos(filtro = 'todos') {
    const lista = filtro === 'todos'
        ? projetos
        : projetos.filter(p => p.filtros.includes(filtro));

    grid.innerHTML = lista.map(p => `
        <article class="proj-card reveal">
            <div class="proj-top">
                <div class="proj-icon"><i class="fa-solid fa-code"></i></div>
                ${p.destaque ? '<span class="proj-badge">destaque</span>' : ''}
            </div>
            <h3>${p.nome}</h3>
            <p>${p.desc}</p>
            <div class="proj-tags">
                ${p.tags.map(tagHTML).join('')}
                ${p.extras.map(extraTagHTML).join('')}
            </div>
            <a href="${p.link}" target="_blank" class="proj-link">
                ver repositório <i class="fa-solid fa-arrow-right"></i>
            </a>
        </article>
    `).join('');

    observeReveal();
}


// ===========================
// FILTROS
// ===========================
document.querySelectorAll('.f').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.f').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjetos(btn.dataset.f);
    });
});


// ===========================
// SCROLL REVEAL
// ===========================
function observeReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


// ===========================
// INIT
// ===========================
renderProjetos();

// Sections reveal
document.querySelectorAll('section, footer').forEach(el => {
    el.classList.add('reveal');
    observeReveal();
});