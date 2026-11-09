import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GAMES, GENERATIONS, uniq } from "@/lib/data";
import { Chip, FilterGroup, GameCard } from "@/components/twu";

export const Route = createFileRoute("/historical")({
  head: () => ({ meta: [
    { title: "Archivo Histórico — TUWU R3VIEWS" },
    { name: "description", content: "Línea de tiempo de clásicos por generación de consolas, estudio y año." },
    { property: "og:title", content: "Archivo Histórico — TUWU R3VIEWS" },
    { property: "og:description", content: "Línea de tiempo de clásicos por generación de consolas, estudio y año." },
  ] }),
  component: Historical,
});

const ERAS = [
  { id: "all", label: "Todas", range: [0, 9999] },
  { id: "80s", label: "1980s", range: [1980, 1989] },
  { id: "90s", label: "1990s", range: [1990, 1999] },
  { id: "00s", label: "2000s", range: [2000, 2009] },
  { id: "10s", label: "2010s", range: [2010, 2019] },
  { id: "20s", label: "2020s", range: [2020, 2029] },
] as const;

function Historical() {
  const [gen, setGen] = useState<string | null>(null);
  const [studio, setStudio] = useState<string | null>(null);
  const [era, setEra] = useState<string>("all");
  const [min, setMin] = useState(0);
  const r = ERAS.find((e) => e.id === era)!.range;
  const list = useMemo(() => GAMES.filter((g) => (!gen || g.generation === gen) && (!studio || g.studio === studio)
    && g.year >= r[0] && g.year <= r[1] && g.critic >= min).sort((a, b) => a.year - b.year), [gen, studio, r, min]);

  return (
    <div className="grid gap-6 @5xl:grid-cols-[280px_1fr]">
      <aside className="flex flex-col gap-3 @5xl:sticky @5xl:top-4 h-fit">
        <h2 className="font-display text-lg">Matriz de filtros</h2>
        <FilterGroup title="Época">{ERAS.map((e) => <Chip key={e.id} active={era === e.id} onClick={() => setEra(e.id)}>{e.label}</Chip>)}</FilterGroup>
        <FilterGroup title="Generación">
          <Chip active={!gen} onClick={() => setGen(null)}>Todas</Chip>
          {GENERATIONS.map((g) => <Chip key={g} active={gen === g} onClick={() => setGen(g)}>{g}</Chip>)}
        </FilterGroup>
        <FilterGroup title="Estudio histórico">
          <Chip active={!studio} onClick={() => setStudio(null)}>Todos</Chip>
          {uniq("studio").map((s) => <Chip key={s} active={studio === s} onClick={() => setStudio(s)}>{s}</Chip>)}
        </FilterGroup>
        <FilterGroup title={`Calificación mínima: ${min}`}>
          <input type="range" min={0} max={99} value={min} onChange={(e) => setMin(+e.target.value)} className="w-full" />
        </FilterGroup>
      </aside>
      <section>
        <h1 className="font-display text-3xl mb-2">Archivo Histórico</h1>
        <p className="text-sm text-muted-foreground mb-6">{list.length} títulos de legado · pulsa una generación en la línea para filtrar</p>
        <div className="flex gap-1 overflow-x-auto pb-2 mb-6">
          {GENERATIONS.map((g) => (
            <button key={g} onClick={() => setGen(gen === g ? null : g)}
              className={`flex-1 min-w-16 border-2 border-foreground py-2 text-xs font-bold ${gen === g ? "bg-accent text-accent-foreground border-accent" : "bg-surface"}`}>
              {g}
            </button>
          ))}
        </div>
        <ol className="relative border-l-4 border-foreground ml-2 flex flex-col gap-6">
          {list.map((g) => (
            <li key={g.id} className="pl-6 relative">
              <span className="absolute -left-[14px] top-2 h-5 w-5 bg-accent border-2 border-foreground" />
              <div className="font-display text-2xl text-accent mb-2">{g.year} <span className="text-xs font-sans text-muted-foreground">{g.generation}</span></div>
              <div className="max-w-xl"><GameCard g={g} /></div>
            </li>
          ))}
          {!list.length && <li className="pl-6 text-muted-foreground">Ningún título coincide.</li>}
        </ol>
      </section>
    </div>
  );
}
