import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.css";

export function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <input
        className={styles.search_bar__field}
        type="text"
        placeholder="Pesquisar"
      />
      <AiOutlineSearch className={styles.search_bar__icon} />
    </div>
  );
}
