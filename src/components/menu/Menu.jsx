import Counter from "../counter/Counter";

function Menu({ menuItem }) {
  const { name } = menuItem;

  if (!name) {
    return null;
  }

  return (
    <>
      <li>{name}</li>

      <Counter />
    </>
  );
}

export default Menu;
