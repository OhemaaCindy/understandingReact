import React, { useState } from "react";

const Countercomponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increase Count</button>
      <button onClick={handleDecrement}>Decrease Count</button>
      <button onClick={handleReset}>Reset Count</button>

      <p>{count}</p>
    </div>
  );
};

export default Countercomponent;
