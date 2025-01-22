import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState({ value: 0 });

  const onDecrement = () => {
    setCount((prevState) => {
      if (prevState.value > 0) {
        return {
          ...prevState,
          value: prevState.value - 1,
        };
      }
      return { value: 0 };
    });
  };

  const onIncrement = () => {
    setCount((prevState) => {
      if (prevState.value < 5) {
        return {
          value: prevState.value + 1,
        };
      }
      return { value: 5 };
    });
  };

  return {
    count: count.value,
    onIncrement,
    onDecrement,
  };
};
