"use server";

import { normalizeAnime, type Anime } from "@/app/anime";

const PAGE_SIZE = 8;

export const fetchAnime = async (page: number): Promise<Anime[]> => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${PAGE_SIZE}&order=popularity`,
    { next: { revalidate: 3600 } },
  );

  if (!response.ok) {
    throw new Error(`Anime catalog request failed (${response.status})`);
  }

  const records: unknown = await response.json();
  if (!Array.isArray(records)) {
    throw new Error("Anime catalog returned an invalid response");
  }

  return records
    .map((record) => normalizeAnime(record))
    .filter((anime): anime is Anime => anime !== null);
};
