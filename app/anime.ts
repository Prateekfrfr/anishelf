export interface Anime {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

type AnimeApiRecord = {
  id?: string | number;
  name?: string;
  image?: { original?: string };
  kind?: string;
  episodes?: number;
  episodes_aired?: number;
  score?: string;
};

const SHIKIMORI_ORIGIN = "https://shikimori.one";

export function normalizeAnime(record: AnimeApiRecord): Anime | null {
  if (
    record.id === undefined ||
    typeof record.name !== "string" ||
    !record.name ||
    typeof record.image?.original !== "string"
  ) {
    return null;
  }

  let imageUrl: string;
  try {
    imageUrl = new URL(record.image.original, SHIKIMORI_ORIGIN).toString();
  } catch {
    return null;
  }

  return {
    id: String(record.id),
    name: record.name,
    image: { original: imageUrl },
    kind: record.kind ?? "Unknown",
    episodes: Number(record.episodes) || 0,
    episodes_aired: Number(record.episodes_aired) || 0,
    score: record.score ?? "N/A",
  };
}
