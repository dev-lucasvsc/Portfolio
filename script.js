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

const PROJECT_ICONS = {
    sexta: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 5a3 3 0 0 0-3 3v1H8a2 2 0 0 0 0 4h1v1a3 3 0 0 0 6 0v-1h1a2 2 0 0 0 0-4h-1V8a3 3 0 0 0-3-3z"/>
            <circle cx="9" cy="9" r="1"/>
            <circle cx="15" cy="9" r="1"/>
        </svg>
    `,

    hospital: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12h4l2-5 4 10 2-5h6"/>
        </svg>
    `,

    rpa: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="4" width="6" height="6" rx="1"/>
            <rect x="14" y="14" width="6" height="6" rx="1"/>
            <path d="M10 7h4v10"/>
        </svg>
    `,

    benchmark: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <rect x="7" y="7" width="10" height="10" rx="2"/>
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
        </svg>
    `,

    nextime: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="8"/>
            <path d="M12 8v5l3 2"/>
        </svg>
    `,

    stream: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="9 7 17 12 9 17 9 7"/>
        </svg>
    `,

    unitinder: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 21C12 21 4 14.5 4 9a8 8 0 0 1 16 0c0 5.5-8 12-8 12z"/>
            <path d="M9 9h6M12 7v4"/>
        </svg>
    `
};

const projetos = [
    {
        nome: 'UniTinder',
        icon: PROJECT_ICONS.unitinder,
        desc: 'Plataforma de matching entre estagiários e empresas. Backend Node.js + Express + Prisma ORM com JWT e controle de acesso por cargo. Frontend em React + TypeScript com validação de CPF/CNPJ e integração REST.',
        tags: ['TypeScript', 'React', 'PostgreSQL'],
        extras: ['Node.js', 'Prisma', 'JWT', 'REST API'],
        link: 'https://github.com/ProcessAI/unieuro-unitinder-202601',
        filtros: ['todos'],
        destaque: true
    },
    {
        nome: 'Sexta-Feira',
        icon: PROJECT_ICONS.sexta,
        desc: 'Assistente virtual desktop com wake word offline, LLM dual (Claude + Ollama), visão computacional, controle do SO e interface holográfica via WebSocket.',
        tags: ['Python', 'SQLite'],
        extras: ['LLM', 'Ollama', 'Vosk', 'WebSocket'],
        link: 'https://github.com/dev-lucasvsc/Sexta-Feira',
        filtros: ['python'],
        destaque: true
    },
    {
        nome: 'Hospital Management System',
        icon: PROJECT_ICONS.hospital,
        desc: 'Sistema hospitalar completo com Spring Boot, JWT, WebSocket e arquitetura em camadas — agendamento de consultas, gestão de funcionários e logs de auditoria.',
        tags: ['Java', 'Spring Boot', 'PostgreSQL'],
        extras: ['JWT', 'WebSocket', 'REST API'],
        link: 'https://github.com/dev-lucasvsc/hospital-management-system',
        filtros: ['java'],
        destaque: true
    },
    {
        nome: 'StreamApp',
        icon: PROJECT_ICONS.stream,
        desc: 'Plataforma de streaming full-stack. Backend em Java com POO avançada e servidor HTTP nativo. Frontend em React + TypeScript + Tailwind.',
        tags: ['Java', 'React', 'TypeScript', 'Tailwind CSS'],
        extras: [],
        link: 'https://github.com/dev-lucasvsc/StreamApp',
        filtros: ['java'],
        destaque: false
    },
    {
        nome: 'RPA Fiscal — Objetiva Atacadista',
        icon: PROJECT_ICONS.rpa,
        desc: 'Solução de RPA para automatizar processos fiscais corporativos. Interface gráfica com tkinter e banco de dados local para rastreamento das execuções.',
        tags: ['Python', 'SQLite'],
        extras: ['pyautogui', 'tkinter', 'RPA'],
        link: 'https://github.com/dev-lucasvsc/Automacao-Objtetiva',
        filtros: ['python', 'automacao'],
        destaque: false
    },
    {
        nome: 'Análise Fiscal Distribuída',
        icon: PROJECT_ICONS.benchmark,
        desc: 'Pipeline paralelo que processa 16 milhões de notas fiscais (1,9 GB CSV) com multiprocessing Python. Benchmarks reais de speedup e eficiência, com análise completa de ICMS, rankings por produto/estado e relatório HTML gerado automaticamente.',
        tags: ['Python'],
        extras: ['multiprocessing', 'Decimal', 'heapq', 'benchmark'],
        link: 'https://github.com/dev-lucasvsc/Distribuido-Doc_fiscall',
        filtros: ['python', 'automacao'],
        destaque: false
    },
    {
        nome: 'Nextime',
        icon: PROJECT_ICONS.nextime,
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
                <div class="proj-icon">${p.icon}</div>
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