import { useState } from "react";
import { restaurants } from "../constants/mock.js";
import Restaurant from "../restaurant/Restaurant.jsx";

function Restaurants() {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <>
      <h1>Restaurants</h1>

      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => {
            console.log(restaurant.id);
            setActiveRestaurant(
              ...restaurants.filter((r) => r.id == restaurant.id)
            );
          }}
        >
          {restaurant.name}
        </button>
      ))}

      <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
    </>
  );
}

export default Restaurants;
