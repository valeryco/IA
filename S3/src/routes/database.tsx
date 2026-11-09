import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GAMES, uniq, type Game } from "@/lib/data";
import { BookmarkBtn, Chip, CommunityScore, CriticBadge, DevTag, FilterGroup } from "@/components/twu";

export const Route = createFileRoute("/database")({
  head: () => ({ meta: [
    { title: "Base de Datos de Reseñas — TUWU R3VIEWS" },
    { name: "description", content: "Busca, filtra y ordena reseñas con puntuación de crítica y comunidad." },
    { property: "og:title", content: "Base de Datos de Reseñas — TUWU R3VIEWS" },
    { property: "og:description", content: "Busca, filtra y ordena reseñas con puntuación de crítica y comunidad." },
  ] }),
  component: Database,
});

type SortKey = "critic" | "community" | "year" | "title";
const toggle = (arr: string[], v: string) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

function Database() {
  const [q, setQ] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [studios, setStudios] = useState<string[]>([]);
  const [min, setMin] = useState(0);
  const [sort, setSort] = useState<SortKey>("critic");

  const rows = useMemo(() => GAMES
    .filter((g) => g.title.toLowerCase().includes(q.toLowerCase()) || g.studio.toLowerCase().includes(q.toLowerCase()))
    .filter((g) => !brands.length || brands.includes(g.brand))
    .filter((g) => !studios.length || studios.includes(g.studio))
    .filter((g) => g.critic >= min)
    .sort((a: Game, b: Game) => sort === "title" ? a.title.localeCompare(b.title) : (b[sort] as number) - (a[sort] as number)),
  [q, brands, studios, min, sort]);

  return (
    <div className="grid gap-6 @5xl:grid-cols-[280px_1fr]">
      <aside className="flex flex-col gap-3 @5xl:sticky @5xl:top-4 h-fit">
        <h2 className="font-display text-lg">Filtros</h2>
        <FilterGroup title="Marca">{uniq("brand").map((b) => <Chip key={b} active={brands.includes(b)} onClick={() => setBrands(toggle(brands, b))}>{b}</Chip>)}</FilterGroup>
        <FilterGroup title="Estudio">{uniq("studio").map((s) => <Chip key={s} active={studios.includes(s)} onClick={() => setStudios(toggle(studios, s))}>{s}</Chip>)}</FilterGroup>
        <FilterGroup title={`Calificación mínima: ${min}`}>
          <input type="range" min={0} max={99} value={min} onChange={(e) => setMin(+e.target.value)} className="w-full accent-[var(--primary)]" />
        </FilterGroup>
      </aside>
      <section>
        <h1 className="font-display text-3xl mb-4">Base de Datos de Reseñas</h1>
        <div className="flex flex-col gap-2 @3xl:flex-row mb-4">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar juego o estudio…"
            className="flex-1 border-2 border-foreground bg-surface px-3 py-2 outline-none focus:border-accent" />
          <div className="flex flex-wrap gap-1">
            {(["critic", "community", "year", "title"] as SortKey[]).map((k) => (
              <Chip key={k} active={sort === k} onClick={() => setSort(k)}>
                {{ critic: "Crítica", community: "Comunidad", year: "Año", title: "A–Z" }[k]}
              </Chip>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{rows.length} resultados</p>
        <div className="grid gap-3 @3xl:grid-cols-2 @5xl:grid-cols-1">
          {rows.map((g) => (
            <div key={g.id} className="border-2 border-foreground bg-card p-3 flex items-center gap-3">
              {g.image && <img src={g.image} alt={`Arte de ${g.title}`} loading="lazy" width={1024} height={640}
                className="h-14 w-14 shrink-0 object-cover border-2 border-foreground" />}
              <CriticBadge v={g.critic} />
              <div className="flex-1 min-w-0">
                <p className="font-bold truncate">{g.title}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <DevTag>{g.studio}</DevTag>{g.brand} · {g.platform} · {g.year}
                </div>
              </div>
              <CommunityScore v={g.community} />
              <BookmarkBtn id={g.id} />
            </div>
          ))}
          {!rows.length && <p className="text-muted-foreground">Sin resultados con estos filtros.</p>}
        </div>
      </section>
    </div>
  );
}
