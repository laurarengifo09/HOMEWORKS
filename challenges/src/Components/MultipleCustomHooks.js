import { useCounter } from "../hooks/useCounter";
import {useFetch} from "../hooks/useFetch";
import { useState, useEffect } from "react";

 export const MultipleCustomHooks = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const { counter, handleAdd, handleSubstract} = useCounter(0);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  useEffect(() => {
    console.log(data, hasError);
    setLoading(isLoading);
    if (data) setQuotes(data);
  }, [data, isLoading]);

  return (
    <>
        <div>Counter</div>
        <div className="flex flex-col items-center">
          <span>{counter}</span>
          <div className="flex space-x-6">
            <button onClick={() => handleAdd()}> + 1 </button>
            <button onClick={() => handleSubstract()}> - 1 </button>
          </div>
        </div>

      <div className="mt-3 flex flex-col space-y-5">
        {loading && <div>Loading...</div>}
        {quotes &&
          quotes.map((quote) => {
            return <blockquote className="p-3 rounded-lg border-2 border-gray-700">{quote.quote}</blockquote>;
          })}
      </div>
    </>
  );
};

