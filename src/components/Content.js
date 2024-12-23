import React from "react";

const HeroSection = () => {
  const features = [
    { id: 1, icon: "₹49", label: "Starting at ₹49" },
    { id: 2, icon: "🍕", label: "Party Delights" },
    { id: 3, icon: "⚡", label: "Food in 10 mins" },
    { id: 4, icon: "🍰", label: "Cakes & More" },
    { id: 5, icon: "🎉", label: "Festive Offers" },
    { id: 6, icon: "🎁", label: "Gift Hampers" },
  ];

  return (
    <div className="bg-green-900 text-white py-12 px-4" style={{ userSelect: 'none' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for 'Biryani'"
            className="w-full py-3 px-6 rounded-full text-gray-800 shadow-md outline-none"
          />
          <button className="absolute top-0 right-0 h-full px-4 text-white bg-orange-500 rounded-r-full hover:bg-orange-600">
            🔍
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">It's the season to</h2>
        <p className="text-lg font-semibold mb-6">
          Celebrate & Party!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          Order Now
        </button>
        <p className="mt-4 text-orange-300 font-semibold">
          Buy More & Get More Free
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 max-w-4xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center justify-center bg-white text-green-600 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="text-3xl mb-2">{feature.icon}</div>
            <p className="text-sm font-semibold">{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
