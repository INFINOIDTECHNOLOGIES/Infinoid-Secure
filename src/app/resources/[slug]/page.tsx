import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/page-template";
import { detailPages, resourceSlugs } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return resourceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const detail = detailPages[params.slug];
  if (!detail) return {};
  return { title: detail.title, description: detail.description };
}

export default function ResourceDetailPage({ params }: { params: Params }) {
  if (!detailPages[params.slug]) notFound();
  return <DetailPage slug={params.slug} />;
}