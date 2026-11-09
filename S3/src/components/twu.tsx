import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Bookmark, Monitor, Tablet, Smartphone, ThumbsUp } from "lucide-react";
import type { Game } from "@/lib/data";
import { toggleBookmark, useBookmarks } from "@/lib/bookmarks";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 select-none" aria-label="TUWU R3VIEWS inicio">
      <span className="bg-foreground text-background font-display px-2 py-1 text-xl leading-none">TUWU</span>
      <span className="font-display text-xl leading-none tracking-tight">
        R<span className="text-accent">3</span>VIEWS
      </span>
    </Link>
  );
}

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/database", label: "Base de Datos" },
  { to: "/saved", label: "Guardados" },
  { to: "/historical", label: "Archivo Histórico" },
] as const;

function Header() {
  const saved = useBookmarks();
  return (
    <header className="border-b-2 border-foreground bg-surface">
      <div className="flex flex-col gap-3 px-4 py-3 @3xl:flex-row @3xl:items-center @3xl:justify-between">
        <Logo />
        <nav className="flex flex-wrap gap-1">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="px-3 py-1.5 text-sm font-semibold border-2 border-transparent hover:border-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground border-accent" }}>
              {n.label}{n.to === "/saved" && saved.length > 0 && <span className="ml-1">({saved.length})</span>}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

const DEVICES = [
  { id: "desktop", label: "Escritorio ≥1024px", icon: Monitor, w: "100%" },
  { id: "tablet", label: "Tablet 768–1023px", icon: Tablet, w: "820px" },
  { id: "mobile", label: "Móvil <768px", icon: Smartphone, w: "390px" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const [d, setD] = useState<(typeof DEVICES)[number]["id"]>("desktop");
  const dev = DEVICES.find((x) => x.id === d)!;
  return (
    <div className="min-h-screen bg-muted">
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-input bg-foreground px-3 py-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-background/70 mr-2">Vista previa</span>
        {DEVICES.map((x) => (
          <button key={x.id} onClick={() => setD(x.id)}
            className={cn("flex items-center gap-1.5 px-3 py-1 text-xs font-semibold border border-background/30 text-background",
              d === x.id && "bg-accent border-accent")}>
            <x.icon className="h-3.5 w-3.5" />{x.label}
          </button>
        ))}
      </div>
      <div className="mx-auto transition-all duration-300 @container bg-background min-h-screen"
        style={{ width: dev.w, maxWidth: "100%", boxShadow: d === "desktop" ? undefined : "0 0 0 2px var(--foreground)" }}>
        <Header />
        <main className="p-4 @3xl:p-6">{children}</main>
        <footer className="border-t-2 border-foreground px-4 py-6 text-xs text-muted-foreground">
          © 2026 TUWU R3VIEWS — Noticias, reseñas y archivo de videojuegos.
        </footer>
      </div>
    </div>
  );
}

export function CriticBadge({ v }: { v: number }) {
  return <span className="inline-flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground font-display text-sm" title="Crítica">{v}</span>;
}
export function CommunityScore({ v }: { v: number }) {
  return <span className="inline-flex items-center gap-1 font-bold text-community" title="Comunidad"><ThumbsUp className="h-4 w-4" />{v}%</span>;
}
export function DevTag({ children }: { children: ReactNode }) {
  return <span className="inline-block bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-wide px-1.5 py-0.5">{children}</span>;
}

export function BookmarkBtn({ id }: { id: string }) {
  const saved = useBookmarks().includes(id);
  return (
    <button onClick={() => toggleBookmark(id)} aria-label={saved ? "Quitar de guardados" : "Guardar"}
      className={cn("p-1.5 border-2 border-foreground", saved ? "bg-accent text-accent-foreground border-accent" : "bg-surface")}>
      <Bookmark className="h-4 w-4" fill={saved ? "currentColor" : "none"} />
    </button>
  );
}

export function GameCard({ g }: { g: Game }) {
  return (
    <article className="brutal bg-card p-4 flex flex-col gap-3">
      {g.image && (
        <img src={g.image} alt={`Arte de ${g.title}`} loading="lazy" width={1024} height={640}
          className="w-full aspect-[8/5] object-cover border-2 border-foreground" />
      )}
      <div className="flex items-start justify-between gap-2">
        <div>
          <DevTag>{g.studio}</DevTag>
          <h3 className="font-display text-lg leading-tight mt-1">{g.title}</h3>
          <p className="text-xs text-muted-foreground">{g.platform} · {g.year} · {g.genre}</p>
        </div>
        <BookmarkBtn id={g.id} />
      </div>
      <p className="text-sm">{g.summary}</p>
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-input">
        <div className="flex items-center gap-2"><CriticBadge v={g.critic} /><span className="text-xs">Crítica</span></div>
        <div className="text-right"><CommunityScore v={g.community} /><div className="text-xs">Comunidad</div></div>
      </div>
    </article>
  );
}

export function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="border-2 border-foreground bg-surface p-3">
      <legend className="px-1 text-xs font-bold uppercase tracking-widest">{title}</legend>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </fieldset>
  );
}
export function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button onClick={onClick} className={cn("px-2 py-1 text-xs font-semibold border border-foreground",
      active ? "bg-accent text-accent-foreground border-accent" : "bg-surface hover:bg-muted")}>{children}</button>
  );
}
