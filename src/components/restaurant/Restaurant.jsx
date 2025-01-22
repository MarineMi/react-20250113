import Menu from "../menu/Menu";
import Review from "../review/Review";

function Restaurant({ restaurant }) {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>

      <h3 className="menu-list">Меню</h3>
      <ul>
        {menu.map((menuItem) => (
          <Menu key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>

      <h3 className="reviews-list">Отзывы</h3>
      <ul>
        {reviews.map((reviewItem) => (
          <Review key={reviewItem.id} review={reviewItem} />
        ))}
      </ul>
    </div>
  );
}

export default Restaurant;
