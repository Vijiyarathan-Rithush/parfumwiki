import { useMemo, useState } from "react";
import type { Perfume } from "../types";

type Props = {
  onSubmit: (perfume: Perfume) => void;
  onCancel: () => void;
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function AddPerfumeForm({ onSubmit, onCancel }: Props) {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const slug = useMemo(() => slugify(`${brand}-${name}`), [brand, name]);

  const canSubmit = brand.trim().length > 0 && name.trim().length > 0;

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (!canSubmit) return;

        onSubmit({
          id: crypto.randomUUID(),
          brand: brand.trim(),
          name: name.trim(),
          slug,
          imageUrl: imageUrl.trim() || undefined,
        });
      }}
    >
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-textmain">Brand</label>
        <input
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          placeholder="e.g. Giardini Di Toscana"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-textmain">Perfume name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          placeholder="e.g. Bianco Latte"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-textmain">Image URL (optional)</label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          placeholder="https://..."
        />
      </div>

      <div className="text-xs text-textmain/70">
        Slug preview: <span className="font-mono">{slug || "-"}</span>
      </div>

      <div className="flex items-center justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg px-4 py-2 text-textmain/80 hover:bg-black/5"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!canSubmit}
          className="rounded-lg bg-topbar px-4 py-2 font-semibold text-title disabled:opacity-50"
        >
          Add perfume
        </button>
      </div>
    </form>
  );
}
