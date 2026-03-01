import { useEffect, useState } from "react";
import type { Perfume } from "../types";
import { loadPerfumes, savePerfumes } from "../model/storage";

const STARTER: Perfume[] = [
  {
    id: "1",
    slug: "giardini-di-toscana-bianco-latte",
    brand: "Giardini Di Toscana",
    name: "Bianco Latte",
  },
];

export function usePerfumes() {
  const [perfumes, setPerfumes] = useState<Perfume[]>(() => loadPerfumes(STARTER));

  useEffect(() => {
    savePerfumes(perfumes);
  }, [perfumes]);

  function addPerfume(perfume: Perfume) {
    setPerfumes((prev) => [perfume, ...prev]);
  }

  function removePerfume(id: string) {
    setPerfumes((prev) => prev.filter((p) => p.id !== id));
  }

  return { perfumes, addPerfume, removePerfume, setPerfumes };
}