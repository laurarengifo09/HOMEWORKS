import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "../actions/counterActions";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementBy = () => {
    dispatch(incrementBy(5));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleIncrementBy}>Incrementar por 5</button>
    </div>
  );
};


