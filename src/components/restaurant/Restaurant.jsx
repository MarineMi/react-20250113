import Menu from "../menu/Menu";
import Reviews from "../reviews/Reviews";

function Restaurant({ restaurant }) {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default Restaurant;
