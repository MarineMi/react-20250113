export const Layout = ({ children }) => {
  return (
    <div>
      <header>header</header>

      <div style={{ display: "flex" }}>
        <div>{children}</div>
      </div>

      <footer>footer</footer>
    </div>
  );
};
