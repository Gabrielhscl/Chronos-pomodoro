import type { HomeProps } from '../../pages/Home';
import styles from './styles.module.css';

export function CountDown({ state }: HomeProps) {
  return (
    <div className={styles.container} role='timer' aria-label='Tempo restante'>
      {state.formattedSecondsRemaining}
    </div>
  );
}
