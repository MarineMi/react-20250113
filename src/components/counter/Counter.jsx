function Counter({ count, onDecrement, onIncrement }) {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      {count}
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default Counter;
