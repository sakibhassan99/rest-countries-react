import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () =>
  ([isDarkMode, setIsDarkMode] = useContext(ThemeContext));
