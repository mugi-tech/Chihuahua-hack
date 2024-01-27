import { Article, Tag } from "@/lib/type";
import React from "react";
import markdownToHtml from "zenn-markdown-html";
import matter from "gray-matter";
import "zenn-content-css";
import Toc from "@/components/Toc/Toc";
import { Badge } from "@/components/ui/badge";
import { MdDateRange } from "react-icons/md";
import { convertDateFormat } from "@/lib/utils";

type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  const { content } = matter(article.content);
  return (
    <div className="bg-topBackground">
      <div className="pt-4 lg:container">
        <div className="block lg:flex lg:justify-between">
          <section className="rounded-lg  bg-white lg:w-[calc(100%_-_360px)]">
            <div className="articleHeader p-4">
              <div className="flex gap-2">
                <div className="flex items-center justify-center rounded-lg">
                  <p
                    className="text-3xl"
                    dangerouslySetInnerHTML={{ __html: article.emoji }}
                  ></p>
                </div>
                <div className="flex items-center justify-center pb-4">
                  <h1 className="break-all text-2xl md:text-3xl">
                    {article.title}
                  </h1>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-2 pb-4">
                {article.tags?.map((tag: Tag) => (
                  <Badge variant={"outline"} key={tag.id}>
                    {tag.name}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center pb-4">
                <MdDateRange />
                <p>{convertDateFormat(article.updatedAt)}に更新</p>
              </div>
            </div>

            <div className="p-4">
              <div
                className="znc"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
              ></div>
            </div>
          </section>
          <aside className="hidden md:block">
            <div className="sticky top-0">
              <Toc />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
