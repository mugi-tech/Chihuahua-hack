import type {
  MicroCMSImage,
  MicroCMSContentId,
  MicroCMSDate,
} from "microcms-js-sdk";

export type Tag = {
  name: string;
  icon: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type Blog = {
  title: string;
  description: string;
  content: string;
  emoji: string;
  category: string;
  good: string;
  tags: Tag[];
};

export type Article = Blog & MicroCMSContentId & MicroCMSDate;
