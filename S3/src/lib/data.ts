import imgEldenRing from "@/assets/games/elden-ring.jpg";
import imgZeldaTotk from "@/assets/games/zelda-totk.jpg";
import imgBaldursGate3 from "@/assets/games/baldurs-gate-3.jpg";
import imgStarfield from "@/assets/games/starfield.jpg";
import imgGtaVi from "@/assets/news/gta-vi.jpg";
import imgNintendoDirect from "@/assets/news/nintendo-direct.jpg";
import imgHadesAwards from "@/assets/news/hades-awards.jpg";
import imgFromsoftware from "@/assets/news/fromsoftware.jpg";
import imgLarianRpg from "@/assets/news/larian-rpg.jpg";
import imgTlou2 from "@/assets/games/tlou2.jpg";
import imgWitcher3 from "@/assets/games/witcher-3.jpg";
import imgBotw from "@/assets/games/botw.jpg";
import imgPortal2 from "@/assets/games/portal-2.jpg";
import imgGtaSa from "@/assets/games/gta-sa.jpg";
import imgMgs3 from "@/assets/games/mgs3.jpg";
import imgOcarina from "@/assets/games/ocarina.jpg";
import imgFf7 from "@/assets/games/ff7.jpg";
import imgSotn from "@/assets/games/sotn.jpg";
import imgChrono from "@/assets/games/chrono.jpg";
import imgSmb3 from "@/assets/games/smb3.jpg";
import imgHalo3 from "@/assets/games/halo-3.jpg";
import imgSpiderman2 from "@/assets/games/spiderman-2.jpg";
import imgHades2 from "@/assets/games/hades-2.jpg";

export type Game = {
  id: string; title: string; brand: string; studio: string; platform: string;
  year: number; generation: string; critic: number; community: number; genre: string; summary: string;
  image?: string;
};

export const GAMES: Game[] = [
  { id: "elden-ring", title: "Elden Ring", brand: "Bandai Namco", studio: "FromSoftware", platform: "Multi", year: 2022, generation: "9ª Gen", critic: 96, community: 92, genre: "Action RPG", summary: "Un mundo abierto implacable que redefine el género souls.", image: imgEldenRing },
  { id: "zelda-totk", title: "Zelda: Tears of the Kingdom", brand: "Nintendo", studio: "Nintendo EPD", platform: "Switch", year: 2023, generation: "9ª Gen", critic: 96, community: 90, genre: "Aventura", summary: "Construcción libre y física que convierte Hyrule en un laboratorio.", image: imgZeldaTotk },
  { id: "baldurs-gate-3", title: "Baldur's Gate 3", brand: "Larian", studio: "Larian Studios", platform: "PC", year: 2023, generation: "9ª Gen", critic: 96, community: 95, genre: "RPG", summary: "El estándar moderno de los RPG por turnos.", image: imgBaldursGate3 },
  { id: "starfield", title: "Starfield", brand: "Microsoft", studio: "Bethesda", platform: "Xbox", year: 2023, generation: "9ª Gen", critic: 83, community: 61, genre: "RPG", summary: "Ambición estelar con un ritmo desigual.", image: imgStarfield },
  { id: "spiderman-2", title: "Marvel's Spider-Man 2", brand: "Sony", studio: "Insomniac", platform: "PS5", year: 2023, generation: "9ª Gen", critic: 90, community: 84, genre: "Acción", summary: "Balanceo pulido y dos héroes en una Nueva York vibrante.", image: imgSpiderman2 },
  { id: "hades-2", title: "Hades II", brand: "Supergiant", studio: "Supergiant Games", platform: "Multi", year: 2024, generation: "9ª Gen", critic: 94, community: 93, genre: "Roguelike", summary: "La secuela que supera a un clásico moderno.", image: imgHades2 },
  { id: "tlou2", title: "The Last of Us Part II", brand: "Sony", studio: "Naughty Dog", platform: "PS4", year: 2020, generation: "8ª Gen", critic: 93, community: 72, genre: "Acción", summary: "Narrativa audaz que dividió a la comunidad.", image: imgTlou2 },
  { id: "witcher-3", title: "The Witcher 3", brand: "CD Projekt", studio: "CD Projekt Red", platform: "Multi", year: 2015, generation: "8ª Gen", critic: 93, community: 94, genre: "RPG", summary: "Misiones secundarias que valen como juegos completos.", image: imgWitcher3 },
  { id: "botw", title: "Zelda: Breath of the Wild", brand: "Nintendo", studio: "Nintendo EPD", platform: "Switch", year: 2017, generation: "8ª Gen", critic: 97, community: 91, genre: "Aventura", summary: "Reinventó el mundo abierto.", image: imgBotw },
  { id: "halo-3", title: "Halo 3", brand: "Microsoft", studio: "Bungie", platform: "Xbox 360", year: 2007, generation: "7ª Gen", critic: 94, community: 88, genre: "Shooter", summary: "El cierre épico de la trilogía del Jefe Maestro.", image: imgHalo3 },
  { id: "portal-2", title: "Portal 2", brand: "Valve", studio: "Valve", platform: "Multi", year: 2011, generation: "7ª Gen", critic: 95, community: 96, genre: "Puzle", summary: "Humor y diseño de puzles perfectos.", image: imgPortal2 },
  { id: "gta-sa", title: "GTA: San Andreas", brand: "Rockstar", studio: "Rockstar North", platform: "PS2", year: 2004, generation: "6ª Gen", critic: 95, community: 90, genre: "Mundo abierto", summary: "Un estado entero en un disco.", image: imgGtaSa },
  { id: "mgs3", title: "Metal Gear Solid 3", brand: "Konami", studio: "Kojima Productions", platform: "PS2", year: 2004, generation: "6ª Gen", critic: 91, community: 93, genre: "Sigilo", summary: "La obra maestra del sigilo en la jungla.", image: imgMgs3 },
  { id: "ocarina", title: "Zelda: Ocarina of Time", brand: "Nintendo", studio: "Nintendo EAD", platform: "N64", year: 1998, generation: "5ª Gen", critic: 99, community: 92, genre: "Aventura", summary: "El primer gran salto a las 3D.", image: imgOcarina },
  { id: "ff7", title: "Final Fantasy VII", brand: "Square", studio: "Squaresoft", platform: "PS1", year: 1997, generation: "5ª Gen", critic: 92, community: 89, genre: "JRPG", summary: "El JRPG que conquistó Occidente.", image: imgFf7 },
  { id: "sotn", title: "Castlevania: SOTN", brand: "Konami", studio: "Konami", platform: "PS1", year: 1997, generation: "5ª Gen", critic: 93, community: 94, genre: "Metroidvania", summary: "Padre fundador del metroidvania.", image: imgSotn },
  { id: "chrono", title: "Chrono Trigger", brand: "Square", studio: "Squaresoft", platform: "SNES", year: 1995, generation: "4ª Gen", critic: 92, community: 95, genre: "JRPG", summary: "Viajes en el tiempo y finales múltiples.", image: imgChrono },
  { id: "smb3", title: "Super Mario Bros. 3", brand: "Nintendo", studio: "Nintendo EAD", platform: "NES", year: 1988, generation: "3ª Gen", critic: 97, community: 93, genre: "Plataformas", summary: "La cima de las plataformas 8-bit.", image: imgSmb3 },
];

export type News = { id: string; title: string; tag: string; time: string; breaking?: boolean; body: string; image: string };
export const NEWS: News[] = [
  { id: "n1", title: "GTA VI confirma nueva ventana de lanzamiento", tag: "Rockstar", time: "Hace 12 min", breaking: true, body: "Rockstar comparte detalles inéditos de Leonida y su mapa.", image: imgGtaVi },
  { id: "n2", title: "Nintendo anuncia un Direct para esta semana", tag: "Nintendo", time: "Hace 40 min", breaking: true, body: "Cuarenta minutos centrados en lanzamientos del primer trimestre.", image: imgNintendoDirect },
  { id: "n3", title: "Hades II arrasa en los premios de la industria", tag: "Supergiant", time: "Hace 2 h", body: "Cinco galardones, incluido mejor dirección de juego.", image: imgHadesAwards },
  { id: "n4", title: "FromSoftware contrata para un nuevo proyecto", tag: "FromSoftware", time: "Hace 3 h", breaking: true, body: "Las ofertas apuntan a un título de acción en tercera persona.", image: imgFromsoftware },
  { id: "n5", title: "Larian revela su próximo RPG", tag: "Larian", time: "Hace 5 h", body: "El estudio abandona Dungeons & Dragons para un mundo propio.", image: imgLarianRpg },
];

export const REACTIONS = [
  { user: "pixel_queen", text: "Hades II es el GOTY, no hay discusión 🔥", game: "Hades II", up: true },
  { user: "retro_rafa", text: "Ocarina sigue siendo intocable.", game: "Ocarina of Time", up: true },
  { user: "nightcrawler", text: "Starfield necesitaba más pulido.", game: "Starfield", up: false },
  { user: "lunaplays", text: "El combate de Spider-Man 2 es puro flow.", game: "Spider-Man 2", up: true },
  { user: "dex_404", text: "BG3 me robó 200 horas y no me arrepiento.", game: "Baldur's Gate 3", up: true },
  { user: "kojimafan", text: "MGS3 merece remake decente y ya.", game: "MGS3", up: true },
  { user: "glitchboy", text: "TLOU2 sigue dividiendo opiniones.", game: "TLOU Part II", up: false },
];

export const GENERATIONS = ["3ª Gen", "4ª Gen", "5ª Gen", "6ª Gen", "7ª Gen", "8ª Gen", "9ª Gen"];
export const uniq = <K extends keyof Game>(k: K) => Array.from(new Set(GAMES.map((g) => g[k]))).sort() as Game[K][];
