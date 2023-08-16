import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { Page } from "@/types/main";
import { BlockRenderer } from "@/core";

async function getPageData(path: string): Promise<Page> {
  const res = await fetch(`http://localhost:9090/${path}`, {
    next: {
      revalidate: 30,
    },
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

interface PageProps {
  params: {
    page: string[];
  };
}

async function Home({ params }: PageProps) {
  const path = params.page ? params.page.join("/") : "";
  const page = await getPageData(path);

  return page.modules.map((m) => <BlockRenderer block={m} />);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const path = params.page ? params.page.join("/") : "";
  const page = await getPageData(path);

  return {
    title: page.seo.title,
  };
}

export default Home;
