import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Tag } from "@/lib/type";

type Props = {
  tag: Tag;
};

export default function TagsHeader({ tag }: Props) {
  return (
    <div className="container">
      <div className="max-w-md overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="flex items-center justify-center">
            <Avatar className="flex h-20 w-20 items-center justify-center md:h-20 md:w-20">
              <AvatarImage
                src={tag.icon.url}
                className="flex h-10 w-10 items-center justify-center"
              ></AvatarImage>
              <AvatarFallback>😄</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center justify-center p-4 md:flex md:justify-start md:p-6">
            <h3 className="text-2xl font-extrabold md:flex md:justify-start md:text-4xl">
              {tag.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
