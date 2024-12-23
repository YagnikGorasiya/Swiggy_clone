import React from "react";
import card from "../h4osm2huq37ikb3r5aue.avif";
import card1 from "../55d0daa1-ad2e-4893-be06-4709c5c68d49_37556.avif";
import card2 from "../e0839ff574213e6f35b3899ebf1fc597.avif";
import card3 from "../e1c3bf40-7ae1-48e4-9b2a-d4afe4d24d3b_725461.avif";
import card4 from "../yg2imqk5e1ivyx6tfa6j.avif";
import card5 from "../7a426b87-916c-47a9-b114-60de8825214b_850491.avif";

const RestaurantList = () => {
  const restaurants = [
    {
      id: 1,
      image: card,
      name: "7 hills momo",
      rating: "3.4",
      deliveryTime: "50-55 mins",
      category: "Indian",
      location: "Chhindwara City",
    },
    {
      id: 2,
      image: card1,
      name: "McDonald's",
      rating: "4.5",
      deliveryTime: "15-20 mins",
      category: "Burgers, Beverages, Cafe, desserts",
      location: "Gota",
    },
    {
      id: 3,
      image: card2,
      name: "Chinese Wok",
      rating: "4.3",
      deliveryTime: "35-40 mins",
      category: "Chinese, Asian, Tibetan, Desserts",
      location: "Thaltej",
    },
    {
      id: 4,
      image: card3,
      name: "Burger King",
      rating: "4.3",
      deliveryTime: "25-30 mins",
      category: "Burgers, Fast Food",
      location: "Vastrapur",
    },
    {
      id: 5,
      image: card4,
      name: "La pino's Pizza",
      rating: "4.1",
      deliveryTime: "30-35 mins",
      category: "Pizza, Pasta, Desserts,Italian",
      location: "New Ranip",
    },
    {
      id: 6,
      image: card5,
      name: "The Belgian Waffle Co.",
      rating: "4.7",
      deliveryTime: "30-35 mins",
      category: "Coffees, Waffle, Snacks, Desserts",
      location: "Science City",
      offer: "",
    },
  ];

  return (
    <div className="px-4 py-6 bg-gray-100 min-h-screen" style={{ userSelect: 'none' }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Top Restaurants</h2>
        <button className="text-sm text-blue-600 hover:underline">See All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {/* Image container */}
            <div className="h-52 bg-gray-100 flex justify-center items-center">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Card content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {restaurant.name}
              </h3>
              <p className="text-sm text-gray-600 truncate">{restaurant.category}</p>
              <p className="text-sm text-gray-600">{restaurant.location}</p>
              <div className="mt-2 flex items-center justify-between">
                <span
                  className={`text-sm font-medium ${
                    restaurant.rating ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {restaurant.rating ? `${restaurant.rating}★` : "No Rating"}
                </span>
                <span className="text-sm text-gray-500">{restaurant.deliveryTime}</span>
              </div>
              {restaurant.offer && (
                <p className="mt-2 text-sm text-red-500 font-medium">
                  {restaurant.offer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
