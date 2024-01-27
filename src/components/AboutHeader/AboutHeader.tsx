import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function AboutHeader() {
  return (
    <div className="container">
      <div className="mx-auto max-w-md overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="flex items-center justify-center">
            <Avatar className="h-20 w-20 md:h-40 md:w-40">
              <AvatarImage src="image/user.png"></AvatarImage>
              <AvatarFallback>mugi</AvatarFallback>
            </Avatar>
          </div>
          <div className="p-6">
            <h3 className="flex justify-center text-2xl font-extrabold text-paragraph md:flex md:justify-start md:text-4xl">
              Chihuahua@
            </h3>
            <p className="mt-2 text-headline">
              どこぞのSier。 クラウドが好き。
              勉強した事を忘れないためにブログ始めました。
            </p>
            <div className="mt-2 flex justify-center gap-3 md:justify-start">
              <Link href="https://github.com/mugi-tech">
                <FaGithubSquare size="2rem" className="text-headline" />
              </Link>
              <Link href="https://twitter.com/mugitechhh">
                <FaSquareXTwitter size="2rem" className="text-headline" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
