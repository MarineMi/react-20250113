import { useState } from "react";

export const useCount = ({ min, max }) => {
  const [count, setCount] = useState({ value: min });

  const onDecrement = () => {
    setCount((prevState) => {
      if (prevState.value > min) {
        return {
          ...prevState,
          value: prevState.value - 1,
        };
      }
      return { value: min };
    });
  };

  const onIncrement = () => {
    setCount((prevState) => {
      if (prevState.value < max) {
        return {
          value: prevState.value + 1,
        };
      }
      return { value: max };
    });
  };

  return {
    count: count.value,
    onIncrement,
    onDecrement,
  };
};
