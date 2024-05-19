import React from "react";

export default function SearchBar({ query, handleSearch }) {
  return (
    <div className="max-w-md search-bar-container">
      <div className="relative flex items-center w-42 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300 search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          onChange={handleSearch}
          ref={(input) => {
            input && input.focus();
          }}
          value={query}
          type="search"
          className="peer h-full w-full outline-none text-sm text-gray-700 px-2"
          id="search"
          placeholder="Search for images"
        />
      </div>
    </div>
  );
}
