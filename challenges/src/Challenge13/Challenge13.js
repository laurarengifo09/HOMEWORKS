import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "../store/counterSlice";

export const Counter = () => {
  const {counter} = useSelector((state) => state.counter);
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

  console.log(counter)

  return (
    <div>
      <div className="absolute w-full h-full bg-purple-950">
        <div className="flex w-full h-full items-center justify-center align-middle">
          <div className="bg-purple-900 items-center justify-center align-middle px-20 py-10 rounded-lg">
            <h1 className="text-white text-center text-6xl font-bold">Contador</h1>
            <h1 className="text-white text-center text-4xl pt-5">{counter}</h1>
            <div className="flex mt-10 gap-5">
              <button className="btn text-white text-xl bg-purple-400 p-3 rounded-xl hover:bg-purple-500 font-medium" onClick={()=>handleIncrement()}>Incrementar</button>
              <button className="btn text-white text-xl bg-purple-400 p-3 rounded-xl hover:bg-purple-500 font-medium" onClick={()=>handleDecrement()}>Decrementar</button>
              <button className="btn text-white text-xl bg-purple-400 p-3 rounded-xl hover:bg-purple-500 font-medium" onClick={()=>handleIncrementBy()}>Incrementar 5</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


