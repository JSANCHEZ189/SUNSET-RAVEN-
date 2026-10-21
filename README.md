# Portafolio Profesional Multimedia — Juan Diego Sánchez

Portafolio web interactivo de alto rendimiento desarrollado con **React**, **TypeScript**, **Vite** y **Tailwind CSS**.

---

## ⚠️ ¿Por qué salía la pantalla blanca al abrirlo?

Este proyecto está construido con **React + Vite** (no es un archivo HTML plano antiguo). 

1. **Si descargas el ZIP y haces doble clic directamente en `index.html`**:
   * Los navegadores modernos bloquean la ejecución de TypeScript (`.tsx`) y módulos ES desde el protocolo local `file:///` por políticas de seguridad del navegador (CORS).
   * **Solución**: Debe ejecutarse mediante un servidor local de desarrollo (`npm run dev`) o mediante la carpeta compilada (`npm run build`).

2. **Si lo subes a GitHub Pages**:
   * Ya hemos incluido el flujo automatizado en `.github/workflows/deploy.yml`. 
   * En tu repositorio de GitHub ve a **Settings** > **Pages** > En **Source** selecciona **GitHub Actions**. ¡Se publicará solo sin pantalla blanca!

---

## 🚀 Cómo ejecutarlo en tu computadora (Local)

### Requisitos:
* Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

### Pasos:
1. Abre la carpeta del proyecto en tu terminal o en VS Code.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre el enlace que te mostrará en la terminal (usualmente `http://localhost:3000` o `http://localhost:5173`).

---

## 📦 Cómo compilar para producción (Carpeta `dist`)

Para generar los archivos listos para cualquier servidor o hosting:
```bash
npm run build
```
Esto creará la carpeta `dist/` con todo el código compilado, minificado y con rutas relativas (`./assets/`) optimizadas.

Para previsualizar la compilación:
```bash
npm run preview
```

---

## 🌐 Cómo publicarlo gratis en internet

### Opción 1: GitHub Pages (Automático)
1. Sube este proyecto a tu repositorio de GitHub.
2. Ve a la pestaña **Settings** de tu repositorio.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En **Build and deployment > Source**, cambia de "Deploy from a branch" a **GitHub Actions**.
5. ¡Listo! Cada vez que subas cambios, se compilará y publicará automáticamente con tu URL `https://tu-usuario.github.io/tu-repo/`.

### Opción 2: Vercel o Netlify (Recomendado, 1 minuto)
1. Entra a [Vercel](https://vercel.com) o [Netlify](https://netlify.com).
2. Conecta tu cuenta de GitHub y selecciona este repositorio.
3. Vercel detectará Vite automáticamente. Haz clic en **Deploy**.
4. Tu portafolio estará en línea al instante con dominio HTTPS gratuito.

---

## ✨ Características del Portafolio
* **Galería Interactiva**: 41 piezas organizadas por categorías (Fotografía, Branding, Web UI, Multimedia).
* **Visor Lightbox**: Navegación por teclado (`←`, `→`, `Esc`), miniaturas y detalles.
* **Imágenes WebP ultra optimizadas**: Reducción de más del 97% de peso para carga instantánea.
* **Terminal de Contacto Directo**: WhatsApp, Email con copiado rápido al portapapeles y llamadas directas sin formularios rotos.
