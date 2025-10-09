import styles from './styles.module.css';

export function CountDown() {
  return (
    <div className={styles.container} role='timer' aria-label='Tempo restante'>
      00:00
    </div>
  );
}
