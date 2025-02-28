import { useState } from "react";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ({ response }) => {
    setUser(response.data);
    localStorage.setItem("my-user", JSON.stringify(response));
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
