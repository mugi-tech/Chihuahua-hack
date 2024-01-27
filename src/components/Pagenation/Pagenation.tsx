import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { LIMIT } from "@/constants/constants";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagenation({
  totalCount,
  current = 1,
  basePath = "",
  q,
}: Props) {
  return (
    <Pagination>
      <PaginationContent>
        {current - 1 > 0 ? (
          <PaginationItem>
            <PaginationPrevious
              href={`${basePath}?page=${current - 1}` + (q ? `&q=${q}` : "")}
              className="border border-slate-200 bg-white"
            />
          </PaginationItem>
        ) : (
          ""
        )}
        {current + 1 <= Math.ceil(totalCount / LIMIT) ? (
          <PaginationItem>
            <PaginationNext
              href={`${basePath}?page=${current + 1}` + (q ? `&q=${q}` : "")}
              className="border border-slate-200 bg-white"
            />
          </PaginationItem>
        ) : (
          // <PaginationNext
          //   href={`${basePath}?page=${current + 1}` + (q ? `&q=${q}` : "")}
          // />
          ""
        )}
      </PaginationContent>
    </Pagination>
  );
}
