# Promts

## prompt1:
ponte como rol de un desarrollador de software que le va a pasar un prompt a stitch para la creacion de una pagina web enfocada en noticias y reviews de videojuegos y filtros historicos por marca, estudio, calificaciones a estos videojuegos donde la idea principal sea transmitir la opinion de las personas acerca de estos y de paleta de colores sea fondo blanco con los colores rojo morado y verde para la pagina aparte su identidad debe ser llamativa, que sea responsive, mobile first y escalable a futuro teniendo sus limitaciones en ambito tecnologico 
------------------------------------------------------------------------------------------------------
## prompot 2:
Rol: Ingeniero Frontend Senior y Arquitecto UI/UX
Tarea: Generar la interfaz web interactiva y de alta fidelidad definitiva para "TUWU R3VIEWS", una plataforma de noticias de videojuegos, archivo histórico y reseñas de la comunidad.

IDENTIDAD DE MARCA Y LOGO:
-Nombre de la Marca: TWU R3VIEWS (integra de forma destacada el logotipo gráfico moderno de tipografía en blanco y negro adjunto en la barra de navegación principal).
Paleta de Colores:
Fondo Dominante: Blanco puro (#FFFFFF) / Off-White (#F8F9FA) para garantizar alto contraste y legibilidad.
Acento Primario: Rojo vivo (#FF3B30 / #E63946) — reservado estrictamente para calificaciones críticas de la crítica, insignias de noticias de última hora y botones de llamada a la acción principales.
Acento Secundario: Morado/Violeta profundo (#7B2CBF / #6C5CE7) — para elementos de marca, etiquetas de categorías de desarrolladores y estados activos de los menús.
Acento Terciario: Verde esmeralda (#10B981) — para puntajes de aprobación de la comunidad e índices de votos positivos.
Neutro / Texto: Gris carbón oscuro (#1E1E24) para tipografía de alto contraste y bordes estructurales.

REGLAS ESTRICTAS DE DISEÑO (CERO MENÚS COLAPSABLES):
-CERO Elementos Colapsables: Elimina por completo los cajones ocultos, menús de hamburguesa, acordeones móviles o paneles de filtros desplegables ocultos.
Navegación y Filtros Completamente Expandidos: 
Los enlaces de la barra de navegación (Inicio, Base de Datos de Reseñas, Guardados / Marcadores, Archivo Histórico) deben permanecer permanentemente visibles y totalmente expandidos en todas las vistas.
Los controles de filtros (por Marca, Estudio, Umbral de Calificación, Época Histórica) deben permanecer completamente abiertos y expandidos como una barra lateral estática o barra de filtros superior. No se permite alternar ni colapsar.
 
SECCIONES Y MÓDULOS REQUERIDOS:
-Sección de Inicio / Feed de Noticias: Carrusel de noticias de última hora, tarjetas de reseñas destacadas y flujos de reacciones de la comunidad en tiempo real.
Sección de Base de Datos de Reseñas (Reviews Database): Un catálogo/tabla de videojuegos con capacidad de búsqueda, que incluye indicadores de doble puntuación (Insignia roja de reseña de críticos vs. Porcentaje verde de aprobación de la comunidad).
Sección de Guardados / Marcadores (Saved): Espacio dedicado que muestra reseñas guardadas y artículos marcados para acceso rápido del usuario.
Sección de Archivo Histórico (Historical): Una línea de tiempo y matriz de filtros organizada por generaciones de consolas, estudios históricos y años de lanzamiento de legado.
Genera el prototipo wireframe definitivo incorporando estas especificaciones exactas.
---------------------------------------------------
## prompt 3: 
Rol: Arquitecto Full-Stack de React y UI/UX
Tarea: Construir una aplicación web multipágina lista para producción llamada "TUWU R3VIEWS" utilizando React, Tailwind CSS, TypeScript y React Router para el enrutamiento multipágina. La plataforma está dedicada a noticias de videojuegos, una base de datos completa de reseñas, reseñas guardadas, un archivo histórico, galerías visuales integradas y conectividad en vivo.

Objetivo de la plataforma: Ayudar a los jugadores a saber qué juegos valen su tiempo y su dinero, medido por las reseñas leídas cada semana.

1. IDENTIDAD DE MARCA Y LOGO:
- Nombre de la Marca: TUWU R3VIEWS (debe aparecer exactamente como "TUWU" en el logo y en todos los títulos de la interfaz y de las pestañas del navegador, sin usar nunca "TWU").
- Logo y Elementos Gráficos: Integrar el logotipo gráfico moderno de tipografía en blanco y negro (con la marca TUWU) en la cabecera permanente de todas las páginas, acompañado de ilustraciones temáticas detalladas (en paleta de negro, blanco y rojo) para cada juego, carrusel de inicio, reseñas destacadas, base de datos y la línea de tiempo del archivo histórico (incluyendo versiones artísticas abstractas temáticas para juegos clásicos y modernos).
- Paleta de Colores:
  * Fondo Dominante: Blanco puro (#FFFFFF) / Off-White (#F8F9FA) para garantizar alto contraste y legibilidad.
  * Acento Primario: Rojo vivo (#FF3B30 / #E63946) — reservado estrictamente para calificaciones críticas de la crítica, insignias de noticias de última hora y botones de llamada a la acción principales.
  * Acento Secundario: Morado/Violeta profundo (#7B2CBF / #6C5CE7) — para elementos de marca, etiquetas de categorías de desarrolladores y estados activos de los menús.
  * Acento Terciario: Verde esmeralda (#10B981) — para puntajes de aprobación de la comunidad e índices de votos positivos.
  * Neutro / Texto: Gris carbón oscuro (#1E1E24) para tipografía de alto contraste y bordes estructurales.

2. REGLAS ESTRICTAS DE DISEÑO (CERO MENÚS COLAPSABLES Y ENRUTAMIENTO MULTIPÁGINA):
- CERO Elementos Colapsables: Elimina por completo los menús de hamburguesa ocultos, acordeones móviles, cajones desplegables o paneles de filtros ocultos. Todo debe estar completamente expandido y visible en pantalla.
- Navegación Permanente Expandida: La cabecera debe contener enlaces de texto permanentes y totalmente visibles para todas las páginas: Inicio (/), Base de Datos de Reseñas (/database), Guardados / Marcadores (/saved) y Archivo Histórico (/historical).
- Filtros Siempre Expandidos: En las páginas que contienen filtros (Base de Datos e Histórico), los controles de filtro (por Marca, Estudio, Umbral de Calificación, Época) deben permanecer estáticamente abiertos y totalmente visibles en el diseño de la pantalla. No se permite alternar ni colapsar.

3. PÁGINAS, MÓDULOS Y NUEVAS FUNCIONALIDADES:
- Página 1: Inicio / Feed de Noticias (/) - Carrusel interactivo de noticias de última hora con ilustraciones temáticas, tira de noticias recientes, tarjetas de reseñas destacadas con arte gráfico propio y puntajes duales, y un flujo de comentarios de la comunidad en tiempo real.
- Página 2: Base de Datos de Reseñas (/database) - Catálogo/tabla de juegos con búsqueda, ordenamiento y miniaturas visuales para cada juego. Incluye indicadores de doble puntuación (Insignia roja de reseña de críticos vs. Porcentaje verde de aprobación de la comunidad) y barra lateral de filtros persistente siempre expandida.
- Página 3: Guardados / Marcadores (/saved) - Espacio de trabajo dedicado que muestra las tarjetas de reseñas guardadas y artículos marcados por el usuario para acceso instantáneo (persistente en el navegador).
- Página 4: Archivo Histórico (/historical) - Línea de tiempo interactiva y matriz de filtros organizada por generaciones de consolas, estudios históricos y años de lanzamiento de legado, donde cada elemento cuenta con su propia ilustración gráfica temática acorde al estilo de la marca.
- Galería de Imágenes e Ilustraciones Integradas (En la propia página): Cada ficha de reseña o tarjeta de juego debe incluir una sección expandida de galería multimedia con imágenes en alta resolución, capturas de pantalla del gameplay y arte conceptual de la comunidad dentro de la misma vista sin salir de la app.
- Conectividad y APIs Externas (En la propia página): Integrar un módulo visible de estado de conectividad en tiempo real (por ejemplo, indicador de API en vivo para sincronización de datos de videojuegos como RAWG/Twitch API, estado de servidores, sincronización de la comunidad y enlaces directos a tiendas/plataformas externas para comprar o consultar el juego).

4. CONTENEDOR DE PRESENTACIÓN MULTIDISPOSITIVO:
- Proporciona una barra de control de vista previa interactiva en la parte superior para inspeccionar y verificar en tiempo real cómo se adapta el diseño en tres anchos de pantalla distintos:
  * Vista de Escritorio (≥1024px): Diseño completo de múltiples columnas con barras laterales fijas expandidas.
  * Vista de Tablet (768px - 1023px): Cuadrícula de 2 columnas optimizada.
  * Vista Móvil (<768px): Diseño apilado de una sola columna con elementos totalmente expandidos y sin menús ocultos.

Genera la aplicación multipágina completa con enrutamiento funcional, gestión de estado para marcadores, módulo de galería multimedia, conectividad/APIs en tiempo real y componentes limpios de TypeScript/Tailwind.
