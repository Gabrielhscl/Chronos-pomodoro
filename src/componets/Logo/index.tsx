import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a
        className={styles.logoLink}
        href='#'
        aria-label='Página inicial - Chronos'
      >
        <TimerIcon aria-hidden='true' focusable='false' />
        <span>Chronos</span>
      </a>
    </div>
  );
}
