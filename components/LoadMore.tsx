"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchAnime } from "@/app/action";
import type { Anime } from "@/app/anime";
import AnimeCard from "./AnimeCard";

function LoadMore() {
  const { ref, inView } = useInView();
  const nextPage = useRef(2);
  const loading = useRef(false);
  const [data, setData] = useState<Anime[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    if (!inView || !hasMore || loading.current) return;

    loading.current = true;
    setError(null);

    fetchAnime(nextPage.current)
      .then((items) => {
        setData((current) => [...current, ...items]);
        setHasMore(items.length > 0);
        nextPage.current += 1;
      })
      .catch(() => {
        setError("Could not load more anime.");
      })
      .finally(() => {
        loading.current = false;
      });
  }, [inView, hasMore, retry]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((anime, index) => (
          <AnimeCard key={anime.id} anime={anime} index={index} />
        ))}
      </section>
      {error && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-red-400">{error}</p>
          <button
            type="button"
            className="text-white underline"
            onClick={() => setRetry((attempt) => attempt + 1)}
          >
            Retry
          </button>
        </div>
      )}
      {hasMore && (
        <section className="flex justify-center items-center w-full">
          <div ref={ref} aria-label="Loading more anime">
            <Image
              src="/spinner.svg"
              alt=""
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        </section>
      )}
    </>
  );
}

export default LoadMore;
