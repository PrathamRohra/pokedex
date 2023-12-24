import React from "react";

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
      <div className="px-6 md:pl-20 pt-14 -mb-6 w-full lg:w-[540px]">
        <input
          type="text"
          placeholder="Search by ID or Name"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="focus:outline-none px-6 py-3 lg:mb-4 border w-full rounded-full"
        />
      </div>
  );
}
