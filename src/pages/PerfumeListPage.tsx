import { useEffect, useState } from "react";
import type { Perfume } from "../features/perfumes/types";
import { PerfumeCard } from "../features/perfumes/components/PerfumeCard";
import { Modal } from "../shared/ui/Modal";
import { AddPerfumeForm } from "../features/perfumes/components/AddPerfumeForm";

const STORAGE_KEY = "parfumwiki.perfumes";

const STARTER: Perfume[] = [
  { id: "1", slug: "giardini-di-toscana-bianco-latte", brand: "Giardini Di Toscana", name: "Bianco Latte" },
];

export function PerfumeListPage() {
  const [perfumes, setPerfumes] = useState<Perfume[]>(STARTER);
  const [open, setOpen] = useState(false);

  // optional: persist locally
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setPerfumes(JSON.parse(raw) as Perfume[]);
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(perfumes));
  }, [perfumes]);

  return (
    <section className="w-full px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-textmain">
            Our perfumes
          </h2>
          <p className="mt-2 text-lg text-textmain/80">
            Add perfumes and build your collection.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-xl bg-topbar px-4 py-2 font-semibold text-title hover:opacity-95"
        >
          + Add perfume
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {perfumes.map((p) => (
          <PerfumeCard key={p.id} perfume={p} />
        ))}
      </div>

      <Modal open={open} title="Add perfume" onClose={() => setOpen(false)}>
        <AddPerfumeForm
          onCancel={() => setOpen(false)}
          onSubmit={(perfume) => {
            setPerfumes((prev) => [perfume, ...prev]);
            setOpen(false);
          }}
        />
      </Modal>
    </section>
  );
}
