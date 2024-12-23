import React from "react";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-800 p-4 flex justify-between items-center text-white shadow-lg" style={{ userSelect: 'none' }}>
      <div className="flex items-center gap-2">
        <div>
          <h1 className="text-xl font-bold">Home</h1>
        </div>
      </div>
      <button className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
        Buy One
      </button>
      <div className="bg-white w-10 h-10 rounded-full text-black flex justify-center items-center hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
        👤
      </div>
    </div>
  );
};

export default Header;
