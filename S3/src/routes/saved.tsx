import { createFileRoute, Link } from "@tanstack/react-router";
import { GAMES, NEWS } from "@/lib/data";
import { useBookmarks } from "@/lib/bookmarks";
import { BookmarkBtn, GameCard } from "@/components/twu";

export const Route = createFileRoute("/saved")({
  head: () => ({ meta: [
    { title: "Guardados — TUWU R3VIEWS" },
    { name: "description", content: "Tus reseñas y artículos marcados para acceso instantáneo." },
    { property: "og:title", content: "Guardados — TUWU R3VIEWS" },
    { property: "og:description", content: "Tus reseñas y artículos marcados para acceso instantáneo." },
  ] }),
  component: Saved,
});

function Saved() {
  const ids = useBookmarks();
  const games = GAMES.filter((g) => ids.includes(g.id));
  const news = NEWS.filter((n) => ids.includes(n.id));
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-3xl">Guardados</h1>
      {!ids.length && (
        <div className="brutal bg-surface p-6">
          <p>Aún no has guardado nada.</p>
          <Link to="/database" className="inline-block mt-3 bg-primary text-primary-foreground font-bold px-4 py-2 text-sm">Ir a la base de datos</Link>
        </div>
      )}
      {games.length > 0 && (
        <section>
          <h2 className="font-display text-xl mb-3">Reseñas ({games.length})</h2>
          <div className="grid gap-4 @3xl:grid-cols-2 @5xl:grid-cols-3">{games.map((g) => <GameCard key={g.id} g={g} />)}</div>
        </section>
      )}
      {news.length > 0 && (
        <section>
          <h2 className="font-display text-xl mb-3">Artículos ({news.length})</h2>
          <div className="grid gap-3 @3xl:grid-cols-2">
            {news.map((n) => (
              <div key={n.id} className="border-2 border-foreground bg-card p-3 flex justify-between gap-3">
                <div><p className="text-xs text-muted-foreground">{n.tag} · {n.time}</p><p className="font-semibold">{n.title}</p></div>
                <BookmarkBtn id={n.id} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
