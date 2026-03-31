# 🚀 NginxFlow: Infrastructure Management Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![PHP](https://img.shields.io/badge/PHP-8.4-777bb4.svg)
![Nginx](https://img.shields.io/badge/Nginx-Latest-009639.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791.svg)

**NginxFlow** es una solución avanzada de nivel empresarial diseñada para simplificar y automatizar la gestión de servidores Nginx. Permite el despliegue rápido de aplicaciones locales y la configuración de proxies reversos complejos a través de una interfaz intuitiva y guiada.

## 🌟 Características Principales

* **Wizard de Despliegue Inteligente**: Automatiza la creación de bloques de servidor (`server blocks`) para Nginx sin intervención manual en archivos de configuración.
* **Gestión de Proxy Reverso**: Configuración simplificada para redirigir tráfico hacia aplicaciones internas con optimización de headers.
* **Seguridad y Certificados**: Integración nativa para la gestión de llaves privadas (con visualización protegida) y certificados SSL.
* **Automatización de DNS**: Soporte para la API de Cloudflare, permitiendo el registro de registros CNAME y la gestión de zonas DNS de forma remota.
* **Arquitectura Multi-idioma**: Sistema de internacionalización dinámico con soporte para Español, Inglés, Portugués y Alemán.
* **Dashboard de Estadísticas**: Panel de control visual para monitorear el estado de los sitios y la infraestructura desplegada.

## 🛠️ Requisitos Técnicos

* **Servidor Web**: Nginx configurado con soporte para PHP-FPM.
* **Lenguaje**: PHP 8.4+.
* **Base de Datos**: PostgreSQL para la persistencia de configuraciones y logs de infraestructura.
* **Frontend**: Bootstrap 5.3 con soporte nativo para modo oscuro y diseño responsive.

## 📂 Estructura del Proyecto

* Directorio centralizado de lógica de negocio y fragmentos de UI (`head`, `nav`, `footer`).
* Diccionarios de traducción para el soporte multi-idioma.
* Activos estáticos para el manejo de temas y componentes dinámicos.
* Núcleo de procesamiento de la lógica de configuración.

## 🚀 Instalación Rápida

1. Configure su bloque de Nginx para apuntar al `root` del proyecto.
2. Asegúrese de que el `include_path` en su configuración de PHP-FPM incluya la carpeta de componentes.
3. Importe el esquema de base de datos en su instancia de PostgreSQL.

## 📞 Soporte y Personalización

Ofrecemos servicios de soporte técnico especializado para maximizar el rendimiento de su infraestructura:
* Configuraciones personalizadas de Nginx de alta disponibilidad.
* Hardening de seguridad para servidores expuestos.
* Integración con pipelines de CI/CD.

---
Desarrollado por **PatagoniaHack** - Comodoro Rivadavia, Argentina.
