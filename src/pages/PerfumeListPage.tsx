import { useState } from "react";
import { PerfumeCard } from "../features/perfumes/components/PerfumeCard";
import { Modal } from "../shared/ui/Modal";
import { AddPerfumeForm } from "../features/perfumes/components/AddPerfumeForm";
import { usePerfumes } from "../features/perfumes/hooks/usePerfumes";

export function PerfumeListPage() {
  const { perfumes, addPerfume } = usePerfumes();
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full px-8">
      {/* header… */}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {perfumes.map((p) => (
          <PerfumeCard key={p.id} perfume={p} />
        ))}
      </div>

      <Modal open={open} title="Add perfume" onClose={() => setOpen(false)}>
        <AddPerfumeForm
          onCancel={() => setOpen(false)}
          onSubmit={(perfume) => {
            addPerfume(perfume);
            setOpen(false);
          }}
        />
      </Modal>
    </section>
  );
}