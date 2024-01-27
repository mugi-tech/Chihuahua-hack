"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useParams } from "next/navigation";

type Props = {
  navId?: string;
};

export default function Nav({ navId }: Props) {
  const router = useRouter();
  const params = useParams();
  const id =
    navId == null ? (params.id == null ? "top" : (params.id as string)) : navId;
  return (
    <Tabs className="container mx-auto px-4" defaultValue={id}>
      <TabsList className="h-auto bg-white p-0">
        <TabsTrigger
          value="top"
          onClick={() => {
            router.push("/");
          }}
          className="data-[state=active]:bg-button data-[state=active]:text-white"
        >
          Top
        </TabsTrigger>
        <TabsTrigger
          value="blogs"
          onClick={() => {
            router.push("/blogs/new");
          }}
          className="data-[state=active]:bg-button data-[state=active]:text-white"
        >
          Blog
        </TabsTrigger>
        <TabsTrigger
          value="about"
          onClick={() => {
            router.push("/about");
          }}
          className="data-[state=active]:bg-button data-[state=active]:text-white"
        >
          About
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
