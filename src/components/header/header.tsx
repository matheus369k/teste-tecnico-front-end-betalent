import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src="/public/logo.svg"
        alt="beTalent"
        loading="lazy"
        fetchPriority="high"
      />
    </header>
  );
}
