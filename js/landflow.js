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
        feature_1: "Wizard Inteligente",
        feature_2: "Despliegue aplicaciones LAMP/Nginx en segundos mediante una interfaz guiada paso a paso.",
		feature_3: "Seguridad Full Stack",
		feature_4: "Gestión nativa de certificados SSL de origen y automatización de DNS vía Cloudflare API.",
		feature_5: "Multi-idioma Nativo",
		feature_6: "Arquitectura preparada para entornos globales con soporte dinámico para ES, EN, PT y DE.",
		contact_1: "Soporte Técnico de Élite para su Empresa",
		contact_2: "Respuesta prioritaria en menos de 1 hora.",
		contact_3: "Optimización de configuraciones Nginx personalizadas.",
		contact_4: "Auditoría de seguridad y hardening de servidores.",
		contact_5: "Solicite una Cotización",
		contact_6: "Business (Soporte 12/6)",
		contact_7: "Plan Enterprise (Soporte 24/7)",
		contact_8: "Enviar Solicitud",
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
		feature_1: "Intelligent Wizard",
		feature_2: "Deploy LAMP/Nginx applications in seconds using a step-by-step guided interface.",
		feature_3: "Full Stack Security",
		feature_4: "Native management of origin SSL certificates and DNS automation via Cloudflare API.",
		feature_5: "Native Multi-Language Support",
		feature_6: "Architecture ready for global environments with dynamic support for Spanish, English, Portuguese, and German.",
		contact_1: "Elite Technical Support for Your Business",
		contact_2: "Priority response in less than 1 hour.",
		contact_3: "Optimization of custom Nginx configurations.",
		contact_4: "Security audit and server hardening.",
		contact_5: "Request a Quote",
		contact_6: "Business (12/6 Support)",
		contact_7: "Enterprise Plan (24/7 Support)",
		contact_8: "Submit a Request",
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
    const htmlElement = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    const navbarLogo = document.getElementById('navbarLogo');

    // Obtenemos el tema actual
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // 1. Cambiamos el atributo de Bootstrap
    htmlElement.setAttribute('data-bs-theme', newTheme);

    // 2. Cambiamos el icono del botón
    if (newTheme === 'dark') {
        themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        // 3. Cambiamos al logo oscuro
        navbarLogo.src = 'img/logo_dark.png';
    } else {
        themeIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        // 3. Cambiamos al logo claro
        navbarLogo.src = '/img/logo_light.png';
    }

    // Opcional: Guardar preferencia en localStorage
    localStorage.setItem('theme', newTheme);
}

// ==========================================
// 4. INICIALIZACIÓN AL CARGAR LA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const navbarLogo = document.getElementById('navbarLogo');

    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        if (navbarLogo) navbarLogo.src = '/img/logo_dark.png';
        // También ajusta el icono si es necesario
        document.getElementById('themeIcon').classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
    }

    // Cargar Idioma guardado o por defecto es
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    applyLanguage(savedLang);
});