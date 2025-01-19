import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);

reactRoot.render(
  restaurants.map((rest, i) => (
    <div key={i} className="restaurants-list">
      <h2 style={{ color: "red" }}>{rest.name}</h2>

      <h3 className="menu-list">Меню</h3>
      <ul>
        {rest.menu.map((dish, i) => (
          <li key={i}>{dish.name}</li>
        ))}
      </ul>

      <h3 className="reviews-list">Отзывы</h3>
      <ul>
        {rest.reviews.map((review, i) => (
          <li key={i}>{review.text}</li>
        ))}
      </ul>
    </div>
  ))
);
