import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { GAMES, NEWS, REACTIONS } from "@/lib/data";
import { GameCard, BookmarkBtn } from "@/components/twu";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "TUWU R3VIEWS — Noticias y reseñas de videojuegos" },
    { name: "description", content: "Últimas noticias, reseñas destacadas y reacciones de la comunidad gamer." },
    { property: "og:title", content: "TUWU R3VIEWS — Noticias y reseñas" },
    { property: "og:description", content: "Últimas noticias, reseñas destacadas y reacciones de la comunidad gamer." },
  ] }),
  component: Home,
});

function Home() {
  const [i, setI] = useState(0);
  const [feed, setFeed] = useState(REACTIONS.slice(0, 4));
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % NEWS.length), 5000); return () => clearInterval(t); }, []);
  useEffect(() => {
    let n = 4;
    const t = setInterval(() => { setFeed((f) => [REACTIONS[n++ % REACTIONS.length]!, ...f].slice(0, 6)); }, 3500);
    return () => clearInterval(t);
  }, []);
  const news = NEWS[i] ?? NEWS[0]!;
  const featured = GAMES.filter((g) => g.image).slice(0, 4);

  return (
    <div className="flex flex-col gap-8">
      <div className="overflow-hidden border-2 border-foreground bg-primary text-primary-foreground">
        <div className="flex w-max animate-ticker gap-10 py-1.5 text-sm font-semibold whitespace-nowrap">
          {[...NEWS, ...NEWS].map((n, k) => <span key={k}>● ÚLTIMA HORA: {n.title}</span>)}
        </div>
      </div>

      <section className="brutal bg-foreground text-background p-6 @3xl:p-10">
        <div key={news.id} className="animate-pop grid gap-6 @3xl:grid-cols-[1fr_380px] @3xl:items-center">
          <div>
            <div className="flex gap-2 items-center mb-3">
              {news.breaking && <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5">ÚLTIMA HORA</span>}
              <span className="text-xs text-background/70">{news.tag} · {news.time}</span>
            </div>
            <h1 className="font-display text-3xl @3xl:text-5xl leading-none max-w-3xl">{news.title}</h1>
            <p className="mt-3 max-w-xl text-background/80">{news.body}</p>
          </div>
          <img src={news.image} alt={`Ilustración: ${news.title}`} width={1024} height={640}
            className="w-full aspect-[8/5] object-cover border-2 border-background/40" />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {NEWS.map((n, k) => (
            <button key={n.id} onClick={() => setI(k)} aria-label={`Noticia ${k + 1}`}
              className={k === i ? "h-2 w-8 bg-primary" : "h-2 w-4 bg-background/40"} />
          ))}
          <Link to="/database" className="ml-auto bg-primary text-primary-foreground font-bold px-4 py-2 text-sm">Explorar reseñas →</Link>
        </div>
      </section>

      <div className="grid gap-6 @5xl:grid-cols-[1fr_320px]">
        <section>
          <h2 className="font-display text-2xl mb-4">Reseñas destacadas</h2>
          <div className="grid gap-4 @3xl:grid-cols-2">{featured.map((g) => <GameCard key={g.id} g={g} />)}</div>
          <h2 className="font-display text-2xl mt-8 mb-4">Más noticias</h2>
          <ul className="flex flex-col gap-3">
            {NEWS.map((n) => (
              <li key={n.id} className="flex items-start justify-between gap-3 border-b border-input pb-3">
                <div>
                  <div className="text-xs text-muted-foreground">{n.breaking && <b className="text-primary mr-1">ÚLTIMA HORA</b>}{n.tag} · {n.time}</div>
                  <p className="font-semibold">{n.title}</p>
                </div>
                <BookmarkBtn id={n.id} />
              </li>
            ))}
          </ul>
        </section>
        <aside className="brutal bg-surface p-4 h-fit @5xl:sticky @5xl:top-4">
          <h2 className="font-display text-lg flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-community animate-pulse" /> Comunidad en vivo
          </h2>
          <ul className="mt-3 flex flex-col gap-3">
            {feed.map((r, k) => (
              <li key={`${r.user}-${k}-${feed.length}`} className="animate-pop border-l-4 pl-3" style={{ borderColor: r.up ? "var(--community)" : "var(--primary)" }}>
                <div className="text-xs font-bold">@{r.user} <span className="text-accent font-semibold">· {r.game}</span></div>
                <p className="text-sm flex gap-1 items-start">
                  {r.up ? <ThumbsUp className="h-4 w-4 text-community shrink-0" /> : <ThumbsDown className="h-4 w-4 text-primary shrink-0" />}{r.text}
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
