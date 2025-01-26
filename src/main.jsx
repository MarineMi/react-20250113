import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);

reactRoot.render(
  restaurants.map((restaurant) => (
    <div key={restaurant.id} className="restaurants-list">
      <h2 style={{ color: "red" }}>{restaurant.name}</h2>

      <h3 className="menu-list">Меню</h3>
      <ul>
        {restaurant.menu.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>

      <h3 className="reviews-list">Отзывы</h3>
      <ul>
        {restaurant.reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  ))
);
