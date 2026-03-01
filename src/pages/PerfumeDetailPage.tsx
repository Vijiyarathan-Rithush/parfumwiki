import { Link, useParams } from "react-router-dom";
import { usePerfumes } from "../features/perfumes/hooks/usePerfumes";

export function PerfumeDetailPage() {
  const { slug } = useParams();
  const { perfumes } = usePerfumes();

  const perfume = perfumes.find((p) => p.slug === slug);

  if (!perfume) {
    return (
      <section className="w-full px-8">
        <p className="text-lg">Perfume not found.</p>
        <Link to="/perfumes" className="mt-4 inline-block underline">
          Back to list
        </Link>
      </section>
    );
  }

  return (
    <section className="w-full px-8 space-y-4">
      <Link to="/perfumes" className="inline-block underline">
        ← Back
      </Link>

      <h2 className="text-4xl font-extrabold tracking-tight">{perfume.name}</h2>
      <p className="text-lg text-textmain/80">{perfume.brand}</p>

      {perfume.imageUrl ? (
        <img
          src={perfume.imageUrl}
          alt={`${perfume.brand} ${perfume.name}`}
          className="max-w-xl rounded-2xl ring-1 ring-black/10"
          loading="lazy"
          decoding="async"
        />
      ) : null}
    </section>
  );
}