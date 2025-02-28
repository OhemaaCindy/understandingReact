import React, { useState } from "react";

const InputstateManagement = () => {
  const [body, setBody] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <p>{age}</p>
    </div>
  );
};

export default InputstateManagement;
