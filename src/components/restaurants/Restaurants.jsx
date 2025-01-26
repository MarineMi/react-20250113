import { useState } from "react";
import { restaurants } from "../constants/mock.js";
import Restaurant from "../restaurant/Restaurant.jsx";
import RestaurantTab from "../restaurantTab/RestaurantTab.jsx";

function Restaurants() {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <>
      <h1>Restaurants</h1>

      {restaurants.map((restaurant) => (
        <RestaurantTab
          key={restaurant.id}
          restaurant={restaurant}
          setActiveRestaurant={setActiveRestaurant}
        />
      ))}

      {activeRestaurant && (
        <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
      )}
    </>
  );
}

export default Restaurants;
