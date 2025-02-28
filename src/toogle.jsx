import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import { Atom } from "lucide-react";

const Toogle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("🚀 ~ Toogle ~ theme:", theme);

  return (
    <div style={{ backgroundColor: theme ? "blue" : "red" }}>
      <h1>Home Page</h1>
      <Atom
        size="48"
        style={{ color: theme ? "yellow" : "black" }}
        onClick={toggleTheme}
      />
      {/* <Atom /> */}
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
    </div>
  );
};

export default Toogle;
