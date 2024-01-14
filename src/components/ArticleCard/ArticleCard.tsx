/* eslint-disable @next/next/no-img-element */
import { Article } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Link href={`/articles/${article.id}`}>
            <div className="flex h-32 w-full items-center justify-center object-cover md:h-full md:w-48">
              <p
                className="text-5xl"
                dangerouslySetInnerHTML={{ __html: article.emoji }}
              ></p>
            </div>
          </Link>
        </div>
        <div className="bg-cardBackground2 p-6">
          <Link href={`/articles/${article.id}`}>
            <p className="mt-1 block text-lg font-extrabold leading-tight text-paragraph hover:underline">
              {article.title}
            </p>
            <p className="mt-2 line-clamp-2 text-slate-500">
              {article.description}
            </p>
            <p className="mt-2 text-sm text-slate-500">{article.updatedAt}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
