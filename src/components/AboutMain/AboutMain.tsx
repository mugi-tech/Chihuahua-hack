import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function AboutMain() {
  return (
    <Tabs defaultValue="about" className="h-full">
      <div className="mx-auto flex max-w-md justify-center md:max-w-3xl md:justify-start">
        <TabsList className="border-b-paragraph bg-white">
          <TabsTrigger value="about" className="px-10">
            About
          </TabsTrigger>
          <TabsTrigger value="works" className="px-10">
            Works
          </TabsTrigger>
        </TabsList>
      </div>
      <div className="h-full bg-topBackground">
        <div className="mx-auto flex max-w-md justify-center md:max-w-3xl md:justify-start">
          <TabsContent value="about" className="mt-0">
            Comming Soon...
          </TabsContent>
          <TabsContent value="works" className="mt-0">
            Comming Soon...
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
}
