import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (value) => {
    // 1. Update React color-mode state
    rawSetColorMode(value);
    // 2. Update localStorage
    localStorage.setItem('color-mode', value);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
