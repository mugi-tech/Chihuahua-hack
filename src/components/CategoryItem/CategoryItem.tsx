import { Category } from "@/lib/type";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  category: Category;
};

export default function CategoryItem({ category }: Props) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white shadow-md hover:-translate-y-1">
      <Link
        href={`blogs/${category.id}?page=1`}
        className="flex flex-col items-center justify-center p-2"
      >
        <Image
          src={category.icon?.url}
          width={40}
          height={40}
          alt=""
          unoptimized={true}
        />
        <p className="mt-2">{category.name}</p>
      </Link>
    </div>
  );
}
