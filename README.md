# Elevate Dev Group

Landing page corporativa de **Elevate Dev Group**, construida con Astro y Tailwind CSS.

## Tecnologias

- Astro 5
- Tailwind CSS
- Node.js (recomendado: 20+)

## Requisitos

- Node.js instalado
- npm (incluido con Node.js)

## Instalacion

```bash
npm install
```

## Desarrollo local

Iniciar servidor de desarrollo:

```bash
npm run dev
```

Por defecto abre en `http://localhost:4321`.

## Scripts disponibles

- `npm run dev`: levanta el servidor de desarrollo.
- `npm run build`: genera el build de produccion en `dist/`.
- `npm run preview`: sirve localmente el build de produccion.
- `npm run check`: ejecuta chequeos de Astro.

## Estructura del proyecto

```text
src/
  components/
    sections/    # Secciones de la landing (Hero, Services, Portfolio, etc.)
    ui/          # Componentes reutilizables de interfaz
  content/       # Contenido del sitio
  layouts/       # Layouts base
  pages/         # Rutas de Astro
  styles/        # Estilos globales
public/          # Archivos estaticos
dist/            # Salida de produccion (generada por build)
```

## Despliegue en Netlify

Configura estos valores en Netlify:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

Opcionalmente, puedes crear un archivo `netlify.toml` con:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## Dominio

El sitio esta configurado con:

- `site: https://elevategroup.netlify.app` en `astro.config.mjs`

Si cambias de dominio, actualiza ese valor para evitar problemas de URLs canonicas y sitemap.
