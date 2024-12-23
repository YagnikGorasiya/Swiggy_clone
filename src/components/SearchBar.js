import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-white p-4 flex justify-center items-center">
      <input
        type="text"
        placeholder="Search for 'Biryani'"
        className="border border-gray-300 rounded-full p-2 w-full max-w-md"
      />
      <button className="ml-2 bg-orange-500 p-2 rounded-full text-white">🎤</button>
    </div>
  );
};

export default SearchBar;
