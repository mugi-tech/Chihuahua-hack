"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useParams } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const params = useParams();
  const id = params.id == null ? "top" : (params.id as string);
  return (
    <Tabs className="container mx-auto px-4" defaultValue={id}>
      <TabsList className="bg-white">
        <TabsTrigger
          value="top"
          onClick={() => {
            router.push("/");
          }}
        >
          TOP
        </TabsTrigger>
        <TabsTrigger
          value="study"
          onClick={() => {
            router.push("/categories/study");
          }}
        >
          勉強
        </TabsTrigger>
        <TabsTrigger
          value="it"
          onClick={() => {
            router.push("/categories/it");
          }}
        >
          IT
        </TabsTrigger>
        <TabsTrigger
          value="note"
          onClick={() => {
            router.push("/categories/note");
          }}
        >
          ブログ
        </TabsTrigger>
        <TabsTrigger
          value="about"
          onClick={() => {
            router.push("/about");
          }}
        >
          書いてる人
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
