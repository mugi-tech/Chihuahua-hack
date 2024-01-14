import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

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
              mugi@危機感ドリブン
            </h3>
            <p className="mt-2 text-headline">
              SI企業でぬくぬく育ちすぎたSier。
              勉強の習慣を身につける為、ブログを立ち上げました。
            </p>
            <div className="mt-2 flex justify-center gap-3 md:justify-start">
              <FaGithubSquare size="2rem" className="text-headline" />
              <FaInstagram size="2rem" className="text-headline" />
              <FaSquareXTwitter size="2rem" className="text-headline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
