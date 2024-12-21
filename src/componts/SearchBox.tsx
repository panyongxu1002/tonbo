import * as React from "react";

export function SearchBox() {
  return (
    <div className="overflow-hidden gap-2.5 self-stretch px-4 my-auto border border-solid bg-neutral-500 bg-opacity-20 border-neutral-800 border-opacity-10 min-h-[39px] w-[221px]">
      <label htmlFor="searchInput" className="sr-only">Search</label>
      <input
        type="search"
        id="searchInput"
        placeholder="Search"
        className="w-full h-full bg-transparent border-none outline-none text-neutral-500"
        aria-label="Search"
      />
    </div>
  );
}