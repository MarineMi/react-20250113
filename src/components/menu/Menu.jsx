function Menu({ menuItem }) {
  const { name } = menuItem;

  if (!name) {
    return null;
  }

  return (
    <>
      <li>{name}</li>
    </>
  );
}

export default Menu;
