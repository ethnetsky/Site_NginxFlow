// /js/landflow.js

// ==========================================
// 1. DICCIONARIO DE TRADUCCIONES
// ==========================================
const translations = {
    es: {
        site_title: "NginxFlow | Servicio de gestión para Nginx",
        nav_benefits: "Beneficios",
        nav_solutions: "Soluciones",
        nav_support: "Obtener Soporte",
        hero_badge: "Próxima Generación de Administración IT",
        hero_title_1: "Domine su Servidor Nginx",
        hero_title_2: "Sin Escribir una Línea de Código",
        hero_subtitle: "La plataforma definitiva para desplegar sitios locales y proxies reversos con seguridad de grado empresarial y optimización automática de Cloudflare.",
        btn_license: "Adquirir Licencia",
        btn_demo: "Ver Demo Visual",
        // Agrega aquí el resto de claves de features, contacto y footer
        footer_text: "Servicio de gestión para Nginx. Desarrollado para alta disponibilidad."
    },
    en: {
        site_title: "NginxFlow | Nginx Management Service",
        nav_benefits: "Benefits",
        nav_solutions: "Solutions",
        nav_support: "Get Support",
        hero_badge: "Next Generation IT Administration",
        hero_title_1: "Master Your Nginx Server",
        hero_title_2: "Without Writing a Line of Code",
        hero_subtitle: "The ultimate platform for deploying local sites and reverse proxies with enterprise-grade security and automatic Cloudflare optimization.",
        btn_license: "Acquire License",
        btn_demo: "View Visual Demo",
        // Claves correspondientes en inglés
        footer_text: "Nginx management service. Developed for high availability."
    }
};

// ==========================================
// 2. LÓGICA DE TRADUCCIÓN
// ==========================================
function changeLanguage(lang) {
    // Guardar preferencia
    localStorage.setItem('preferredLanguage', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;

    // Buscar todos los elementos con data-translate
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Si es el título de la página
            if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// ==========================================
// 3. LÓGICA DE TEMA (CLARO/OSCURO)
// ==========================================
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('preferredTheme', theme);

    // Actualizar icono
    const icon = document.getElementById('themeIcon');
    if (theme === 'dark') {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-stars-fill');
    } else {
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-sun-fill');
    }
}

// ==========================================
// 4. INICIALIZACIÓN AL CARGAR LA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Cargar Tema guardado o por defecto dark
    const savedTheme = localStorage.getItem('preferredTheme') || 'dark';
    applyTheme(savedTheme);

    // Cargar Idioma guardado o por defecto es
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    applyLanguage(savedLang);
});