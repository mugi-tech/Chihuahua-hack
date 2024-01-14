"use client";

import { useCallback, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./index.module.css";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [composing, setComposition] = useState(false);
  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);
  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === "Enter" && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`;
      }
    },
    [composing],
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("q") || "";
  return (
    <form className="flex items-center rounded-xl border-2 border-button p-2">
      <FaSearch size={15} />
      <input
        type="search"
        name="q"
        ref={inputRef}
        className="w-full rounded-xl border-none  pl-2 outline-none"
        placeholder="Search..."
        onKeyDown={_onEnter}
        onCompositionStart={startComposition}
        onCompositionEnd={endComposition}
        defaultValue={defaultQuery}
      />
    </form>
  );
}
