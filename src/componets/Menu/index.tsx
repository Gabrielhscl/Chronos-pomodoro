import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailaleThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailaleThemes>('dark');

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
  }, [theme]);

  return (
    <nav className={styles.menu} aria-label='Menu de navegação principal'>
      <h1>{theme}</h1>
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
        <SunIcon aria-hidden='true' focusable='false' />
      </a>
    </nav>
  );
}
