import {createContext, useState} from "react"

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme, toggleTheme: () => void;};

export const ThemeContext = createContext<ThemeContext>(
    {theme: "light", toggleTheme: () => {}}
    );

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        setTheme((prev => prev === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;