"use client";

import { useState, createContext } from "react";
interface ThemeContextProps {
  isDarkMode: boolean;
  setToggleDarkMode: (val: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  setToggleDarkMode: (val: boolean) => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setToggleDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDarkMode, setToggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};