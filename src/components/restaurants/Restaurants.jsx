import { restaurants } from "../constants/mock.js";
import Restaurant from "../restaurant/Restaurant.jsx";

function Restaurants() {
  return (
    <>
      <h1>Restaurants</h1>
      {restaurants.map((rest) => (
        <Restaurant key={rest.id} restaurant={rest} />
      ))}
    </>
  );
}

export default Restaurants;
