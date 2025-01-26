import { useCount } from "./useCount";

function Counter() {
  const { count, onDecrement, onIncrement } = useCount();

  return (
    <div>
      <button onClick={onDecrement}>-</button>
      {count}
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default Counter;
