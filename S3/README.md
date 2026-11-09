# TUWU R3VIEWS

Rol: Arquitecto Full-Stack de React y UI/UX

Tarea: Construir una aplicación web multipágina lista para producción llamada "TWU R3VIEWS" utilizando React, Tailwind CSS, TypeScript y React Router para el enrutamiento multipágina. La plataforma está dedicada a noticias de videojuegos, una base de datos completa de reseñas, reseñas guardadas y un archivo histórico.

1. IDENTIDAD DE MARCA Y LOGO:

- Nombre de la Marca: TWU R3VIEWS (integra de forma destacada el logotipo gráfico moderno de tipografía en blanco y negro adjunto en la cabecera permanente en todas las páginas).

- Paleta de Colores:

  * Fondo Dominante: Blanco puro (#FFFFFF) / Off-White (#F8F9FA) para garantizar alto contraste y legibilidad.

  * Acento Primario: Rojo vivo (#FF3B30 / #E63946) — reservado estrictamente para calificaciones críticas de la crítica, insignias de noticias de última hora y botones de llamada a la acción principales.

  * Acento Secundario: Morado/Violeta profundo (#7B2CBF / #6C5CE7) — para elementos de marca, etiquetas de categorías de desarrolladores y estados activos de los menús.

  * Acento Terciario: Verde esmeralda (#10B981) — para puntajes de aprobación de la comunidad e índices de votos positivos.

  * Neutro / Texto: Gris carbón oscuro (#1E1E24) para tipografía de alto contraste y bordes estructurales.

2. REGLAS ESTRICTAS DE DISEÑO (CERO MENÚS COLAPSABLES Y ENRUTAMIENTO MULTIPÁGINA):

- CERO Elementos Colapsables: Elimina por completo los menús de hamburguesa ocultos, acordeones móviles, cajones desplegables o paneles de filtros ocultos. Todo debe estar completamente expandido.

- Navegación Permanente Expandida: La cabecera debe contener enlaces de texto permanentes y totalmente visibles para todas las páginas: Inicio (/), Base de Datos de Reseñas (/database), Guardados / Marcadores (/saved) y Archivo Histórico (/historical).

- Filtros Siempre Expandidos: En las páginas que contienen filtros (Base de Datos e Histórico), los controles de filtro (por Marca, Estudio, Umbral de Calificación, Época) deben permanecer estáticamente abiertos y totalmente visibles en el diseño de la pantalla. No se permite alternar ni colapsar.

3. PÁGINAS Y MÓDULOS REQUERIDOS (CONFIGURACIÓN MULTIPÁGINA):

- Página 1: Inicio / Feed de Noticias (/) - Control deslizante de noticias de última hora, tarjetas de reseñas destacadas con calificaciones duales y flujos de reacciones de la comunidad en tiempo real.

- Página 2: Base de Datos de Reseñas (/database) - Catálogo/tabla de juegos con capacidad de búsqueda y ordenamiento, que incluye indicadores de doble puntuación (Insignia roja de reseña de críticos vs. Porcentaje verde de aprobación de la comunidad). Incluye barra lateral de filtros persistente.

- Página 3: Guardados / Marcadores (/saved) - Espacio de trabajo dedicado que muestra las tarjetas de reseñas guardadas por el usuario y los artículos marcados para acceso instantáneo.

- Página 4: Archivo Histórico (/historical) - Línea de tiempo interactiva y matriz de filtros organizada por generaciones de consolas, estudios históricos y años de lanzamiento de legado.

4. CONTENEDOR DE PRESENTACIÓN MULTIDISPOSITIVO:

- Proporciona un selector de vista previa interactivo o claramente segmentado en la parte superior o a nivel de diseño para que el usuario pueda inspeccionar cómo se renderiza la aplicación en:

  * Vista de Escritorio (≥1024px): Diseño completo de múltiples columnas con barras laterales fijas.

  * Vista de Tablet (768px - 1023px): Cuadrícula de 2 columnas optimizada que escala.

  * Vista Móvil (<768px): Diseño apilado de una sola columna con elementos totalmente expandidos y no colapsables.

Genera la aplicación multipágina completa con enrutamiento funcional, gestión de estado para marcadores, filtros de búsqueda y componentes limpios de TypeScript/Tailwind.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/20237f6a-b837-5a4b-a857-273ad25c9ef9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
