const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
});

// Dicionário mapeando os nomes para os links dos ícones
const iconesTech = {
    "java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "spring boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    "react": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "html": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "css": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "tailwind css": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
};

const projetos = [
    {
        nome: "Sistema de Gestão Hospitalar",
        descricao: "Sistema full-stack completo para gerenciamento de rotinas hospitalares e dados.",
        tecnologias: ["Java", "Spring Boot", "React", "PostgreSQL"],
        link: "https://github.com/dev-lucasvsc/hospital-management-system.git"
    },
    {
        nome: "Automação Fiscal",
        descricao: "Script desenvolvido para automatizar a entrada de dados e classificação de notas fiscais.",
        tecnologias: ["Python"],
        link: "https://github.com/dev-lucasvsc/Automacao-Objtetiva.git"
    },
    {
        nome: "Quebrador de Senhas MD5",
        descricao: "Script de força bruta otimizado para fins acadêmicos utilizando multithreading.",
        tecnologias: ["Python", "Multithreading"],
        link: "https://github.com/dev-lucasvsc/Teste-eficiencia-threads.git"
    },
    {
        nome: "StreamApp",
        descricao: "Plataforma full-stack que simula um serviço de streaming, integrando conceitos avançados de POO no backend e uma interface moderna.",
        tecnologias: ["Java", "React", "TypeScript", "Tailwind CSS"],
        link: "https://github.com/dev-lucasvsc/StreamApp.git"
    },
    {
        nome: "Layout de Portal de Notícias",
        descricao: "Construção da interface de um portal de notícias utilizando estritamente tabelas.",
        tecnologias: ["HTML"],
        link: "https://github.com/dev-lucasvsc/Noticia-PWEB.git"
    },
    {
        nome: "Gestãoo de estoque",
        descricao: "Sistema de gerenciamento de estoque, focado em cadastro, fluxo de estoque e controle de estoque.",
        tecnologias: ["C"],
        link: "https://github.com/dev-lucasvsc/Gerenciamento-Estoque.git"
    }
];

const container = document.getElementById('projetos-container');

function renderProjetos(filtro = "todos") {
    container.innerHTML = ""; 

    const projetosFiltrados = projetos.filter(projeto => {
        if (filtro === "todos") return true;
        const techs = projeto.tecnologias.map(t => t.toLowerCase());
        if (filtro === "java") return techs.includes("java");
        if (filtro === "python") return techs.includes("python");
        if (filtro === "web") return techs.includes("react") || techs.includes("html");
        return true;
    });

    projetosFiltrados.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        
        // Mapeando a tecnologia para incluir a imagem, se ela existir no dicionário
        const tagsHTML = projeto.tecnologias.map(tech => {
            const techKey = tech.toLowerCase();
            const urlIcone = iconesTech[techKey];
            
            if (urlIcone) {
                return `<span class="tech-tag"><img src="${urlIcone}" class="tag-icon" alt="Ícone ${tech}" /> ${tech}</span>`;
            } else {
                return `<span class="tech-tag">${tech}</span>`;
            }
        }).join('');

        card.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <div class="tags">${tagsHTML}</div>
            <br>
            <a href="${projeto.link}" target="_blank" style="color: var(--primary-color); font-weight: bold; text-decoration: none;">Ver Repositório</a>
        `;
        
        container.appendChild(card);
    });

    aplicarAnimacaoScroll();
}

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const filtro = e.target.getAttribute('data-filter');
        renderProjetos(filtro);
    });
});

function aplicarAnimacaoScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.fade-in');
    cards.forEach(card => observer.observe(card));
}

renderProjetos();