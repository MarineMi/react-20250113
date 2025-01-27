import { useReducer } from "react";

const INITIAL_VALUE = {
  user: "",
  text: "",
  rating: 0,
};

const SET_USER_ACTION = "SET_USER";
const SET_TEXT_ACTION = "SET_TEXT";
const SET_RATING_DECREMENT_ACTION = "SET_RATING_DECREMENT";
const SET_RATING_INCREMENT_ACTION = "SET_RATING_INCREMENT";
const SET_CLEAR_ACTION = "SET_CLEAR";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USER_ACTION:
      return {
        ...state,
        user: payload,
      };

    case SET_TEXT_ACTION:
      return {
        ...state,
        text: payload,
      };

    case SET_RATING_DECREMENT_ACTION:
      return {
        ...state,
        rating: state.rating > 0 ? state.rating - 1 : state.rating,
      };

    case SET_RATING_INCREMENT_ACTION:
      return {
        ...state,
        rating: state.rating < 5 ? state.rating + 1 : state.rating,
      };

    case SET_CLEAR_ACTION:
      return INITIAL_VALUE;

    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const { user, text, rating } = form;

  const setUser = (value) =>
    dispatch({ type: SET_USER_ACTION, payload: value });
  const setText = (value) =>
    dispatch({ type: SET_TEXT_ACTION, payload: value });
  const setRatingDecrement = () =>
    dispatch({ type: SET_RATING_DECREMENT_ACTION });
  const setRatingIncrement = () =>
    dispatch({ type: SET_RATING_INCREMENT_ACTION });
  const setClear = () => dispatch({ type: SET_CLEAR_ACTION });

  return {
    form: { user, text, rating },
    setUser,
    setText,
    setRatingDecrement,
    setRatingIncrement,
    setClear,
  };
};
