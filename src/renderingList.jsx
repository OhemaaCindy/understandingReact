import React from "react";

const RenderingList = () => {
  const users = [
    {
      name: "Priscilla",
      email: "priscillaessuman@gmail.com",
    },
    {
      name: "Cindy",
      email: "cindyessuman@gmail.com",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <ul key={user.id}>
          <li>
            {user.name}-{user.email}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default RenderingList;
