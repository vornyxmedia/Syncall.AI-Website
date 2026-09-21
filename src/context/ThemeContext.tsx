import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeVersion = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeVersion;
  isDuskMode: boolean;
  setTheme: (theme: ThemeVersion) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeVersion>(() => {
    try {
      const saved = localStorage.getItem('syncall_theme_version');
      if (saved === 'light' || saved === 'dark') return saved as ThemeVersion;
    } catch (e) {}
    return 'dark'; // Default to full dusk mode
  });

  const isDuskMode = theme === 'dark';

  const setTheme = (newTheme: ThemeVersion) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('syncall_theme_version', newTheme);
    } catch (e) {}
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    try {
      localStorage.setItem('syncall_theme_version', theme);
    } catch (e) {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, isDuskMode, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
