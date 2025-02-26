import { TablesContext } from "@/contexts/tables.context";
import styles from "./styles.module.css";
import { useContext, useEffect, useRef } from "react";

export function SearchBar() {
  const { filterTables } = useContext(TablesContext);
  const searchRef = useRef<string>("");

  useEffect(() => {
    const url = new URL(window.location.toString());
    searchRef.current = url.searchParams.get("search") || "";
  }, [searchRef]);

  function handleFilterTables(event: React.ChangeEvent<HTMLInputElement>) {
    searchRef.current = event.target.value;

    handleAddParamOnUrl(searchRef.current);
    filterTables(searchRef.current);
  }

  function handleAddParamOnUrl(search: string) {
    const url = new URL(window.location.toString());
    url.searchParams.set("search", search.toLowerCase());
    window.history.pushState({}, "", url);
  }

  return (
    <div className={styles.search_bar}>
      <input
        className={styles.search_bar__field}
        onChange={handleFilterTables}
        value={searchRef.current}
        type="text"
        placeholder="Pesquisar"
      />
      <i className={styles.search_bar__icon}></i>
    </div>
  );
}
