import styles from "./styles.module.css";

export function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <input
        className={styles.search_bar__field}
        type="text"
        placeholder="Pesquisar"
      />
      <i className={styles.search_bar__icon}></i>
    </div>
  );
}
