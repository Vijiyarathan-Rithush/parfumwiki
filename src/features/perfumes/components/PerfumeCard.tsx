import { useState } from "react";
import { Link } from "react-router-dom";

export type PerfumeCardModel = {
  slug: string;
  name: string;
  brand: string;
  imageUrl?: string;
};

export function PerfumeCard({ perfume }: { perfume: PerfumeCardModel }) {
  const [broken, setBroken] = useState(false);
  const showImage = perfume.imageUrl && !broken;

  return (
    <Link
      to={`/perfumes/${perfume.slug}`}
      className="block rounded-xl bg-white/60 p-4 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-black/5">
        {showImage ? (
          <img
            src={perfume.imageUrl}
            alt={`${perfume.brand} ${perfume.name}`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-black/50">
            No image
          </div>
        )}
      </div>

      <div className="mt-3">
        <div className="text-sm font-semibold text-textmain">{perfume.brand}</div>
        <div className="text-lg font-bold text-textmain">{perfume.name}</div>
      </div>
    </Link>
  );
}