import Counter from "../counter/Counter";
import { useCount } from "../counter/useCount";

function DishCounter() {
  const { count, onDecrement, onIncrement } = useCount({ min: 0, max: 10 });
  return (
    <Counter
      count={count}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
    />
  );
}

export default DishCounter;
