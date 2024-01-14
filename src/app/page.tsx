import Nav from "@/components/Nav/Nav";
import Image from "next/image";
import ArticleCardList from "@/components/ArticleCardList/ArticleCardList";
import { articleList } from "@/mockdata/mockdata";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="bg-topBackground md:h-auto">
        <div className="container py-6">
          <div className="flex">
            <div className="pb-4 text-2xl font-extrabold text-paragraph">
              新着記事
            </div>
            <a
              href="/new"
              className="invisible flex items-center pb-4 pl-4 text-sm text-paragraph hover:underline md:visible"
            >
              もっと見る →
            </a>
          </div>
          <ArticleCardList articles={articleList} />
          <a
            href="/all"
            className="flex items-center justify-center pt-4 text-sm font-extrabold text-paragraph hover:underline md:hidden"
          >
            もっと見る →
          </a>
        </div>
        <div className="container py-6">
          <div className="flex">
            <div className="pb-4 text-2xl font-extrabold text-paragraph">
              おすすめ記事
            </div>
            <a
              href="/recommend"
              className="invisible flex items-center pb-4 pl-4 text-sm text-paragraph hover:underline md:visible"
            >
              もっと見る →
            </a>
          </div>
          <ArticleCardList articles={articleList} />
          <a
            href="/recommend"
            className="flex items-center justify-center pt-4 text-sm font-extrabold text-paragraph hover:underline md:hidden"
          >
            もっと見る →
          </a>
        </div>
      </div>
    </>
  );
}
