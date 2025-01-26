function RestaurantTab({ restaurant, setActiveRestaurant }) {
  return (
    <button onClick={() => setActiveRestaurant(restaurant)}>
      {restaurant.name}
    </button>
  );
}

export default RestaurantTab;
