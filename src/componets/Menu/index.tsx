import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailaleThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailaleThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailaleThemes) || 'dark';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon aria-hidden='true' focusable='false' />,
    light: <MoonIcon aria-hidden='true' focusable='false' />,
  };

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    console.log('clicado', Date.now());

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu} aria-label='Menu de navegação principal'>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Página Inicial'
        title='Página Inicial'
      >
        <HouseIcon aria-hidden='true' focusable='false' />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Histórico'
        title='Histórico'
      >
        <HistoryIcon aria-hidden='true' focusable='false' />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon aria-hidden='true' focusable='false' />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Alternar tema'
        title='Alternar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
