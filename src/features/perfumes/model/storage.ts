import type { Perfume } from "../types";

const STORAGE_KEY = "parfumwiki.perfumes";

export function loadPerfumes(fallback: Perfume[] = []): Perfume[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Perfume[];
    if (!Array.isArray(parsed)) return fallback;
    return parsed;
  } catch {
    return fallback;
  }
}

export function savePerfumes(perfumes: Perfume[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(perfumes));
  } catch {
    // ignore
  }
}