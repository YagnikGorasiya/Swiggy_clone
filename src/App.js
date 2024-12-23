import React from "react";
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
import Promotions from "./components/Content";
import Carousel from "./components/Carousel";
import RestaurantList from "./components/RestaurantList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <SearchBar /> */}
      <Promotions />
      <Carousel />
      <RestaurantList />
      <Footer />
    </div>
  );
}

export default App;
