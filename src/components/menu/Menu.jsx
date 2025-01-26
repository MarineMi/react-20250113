import Counter from "../counter/Counter";

function Menu({ menu }) {
  if (!menu.length) {
    return <div>Нет меню</div>;
  }

  return (
    <div>
      <h3 className="menu-list">Меню</h3>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
            <Counter />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
