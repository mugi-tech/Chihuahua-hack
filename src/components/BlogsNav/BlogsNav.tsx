"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

type Props = {
  navId: string;
};

export default function BlogsNav({ navId }: Props) {
  const router = useRouter();
  const id = navId == null ? "new" : navId;

  return (
    <Tabs defaultValue={id} className="pb-4">
      <TabsList>
        <TabsTrigger
          value="new"
          onClick={() => {
            router.push("/blogs/new");
          }}
        >
          New
        </TabsTrigger>
        <TabsTrigger
          value="tips"
          onClick={() => {
            router.push("/blogs/tips");
          }}
        >
          Tips
        </TabsTrigger>
        <TabsTrigger
          value="study"
          onClick={() => {
            router.push("/blogs/study");
          }}
        >
          Study
        </TabsTrigger>
        <TabsTrigger
          value="udemy"
          onClick={() => {
            router.push("/blogs/udemy");
          }}
        >
          Udemy
        </TabsTrigger>
        <TabsTrigger
          value="zenn"
          onClick={() => {
            router.push("/blogs/zenn");
          }}
        >
          Zenn
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
