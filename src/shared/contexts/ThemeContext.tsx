import { ThemeProvider } from "@mui/material";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme, LigthTheme } from "../themes";
import { Box } from "@mui/system";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

interface ILayoutBasePaginaProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<ILayoutBasePaginaProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');}, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LigthTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
        {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
