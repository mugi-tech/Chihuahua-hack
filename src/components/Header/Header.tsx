import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="/image/ChihuahuasHack.png"
            alt="title"
            width={280}
            height={40}
            unoptimized={true}
          />
        </Link>
        <div className="flex h-7 w-7 items-center justify-center hover:rounded-md hover:bg-button hover:bg-opacity-20">
          <Link href={"/search"} className="">
            <FaSearch size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
