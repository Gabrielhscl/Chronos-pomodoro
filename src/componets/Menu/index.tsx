import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu} aria-label='Menu de navegação principal'>
      <a className={styles.menuLink} href='#' aria-label='Página inicial'>
        <HouseIcon aria-hidden='true' focusable='false' />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Histórico'>
        <HistoryIcon aria-hidden='true' focusable='false' />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Configurações'>
        <SettingsIcon aria-hidden='true' focusable='false' />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Alternar tema'>
        <SunIcon aria-hidden='true' focusable='false' />
      </a>
    </nav>
  );
}
