import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/molecules/SearchBar/SearchBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/molecules/Header/Header';
import UserProfile from './components/organisms/UserProfile/UserProfile';

export interface ThemeContextValues {
  theme: 'dark' | 'light';
  setTheme?: () => void;
}

const queryClient = new QueryClient();
export const ThemeContext = React.createContext<ThemeContextValues>({
  theme: 'dark',
  setTheme: undefined,
});

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeContextValues['theme']>('dark');
  const [selectedUsername, setSelectedUsername] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
        <div className={'container'}>
          <Header />
          <SearchBar onSearch={setSelectedUsername} />
          <UserProfile username={selectedUsername} />
        </div>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
