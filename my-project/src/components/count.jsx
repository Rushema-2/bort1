import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className="font-bold py-10">Counting Number</h1>

      <div className="flex items-center gap-10">
        <button
          onClick={decrement}
          className="bg-red-600 text-white py-2 px-5 rounded-sm"
        >
          -
        </button>

        <h3 className="text-3xl font-bold">{count}</h3>

        <button
          onClick={increment}
          className="bg-green-600 text-white px-5 py-2 rounded-sm"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Count;