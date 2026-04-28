import { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme == "light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook for easier consumption (optional but recommended)
export const useTheme = () => useContext(ThemeContext);
