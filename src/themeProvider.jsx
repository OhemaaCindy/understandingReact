import { useState } from "react";
import { ThemeContext } from "./themeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
    // setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
