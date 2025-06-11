"use client";

import React, { useEffect, useState } from "react";

type AboutData = {
  content1: string;
  content2: string;
};

const Page: React.FC = () => {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch("http://localhost:5039/about/");
        if (!res.ok) throw new Error("Failed to fetch");
        const json: AboutData = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAbout();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="grid items-center justify-items-center h-[750px]">
      <h2 className="uppercase text-2xl">About</h2>
      <article>
        {data && (
          <div className="h-fit w-[800px] border-2 p-5">
            <p className="text-2xl p-5 text-left">{data.content1}</p>
            <p className="text-2xl p-5 text-left">{data.content2}</p>
          </div>
        )}
      </article>
    </section>
  );
};

export default Page;
