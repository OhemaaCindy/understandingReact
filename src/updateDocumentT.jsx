import React, { useEffect, useState } from "react";

const UpdateDocumentTitle = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("I am running");
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UpdateDocumentTitle;
