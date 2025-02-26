import { TablesContext } from "@/contexts/tables.context";
import styles from "./styles.module.css";
import { TableCell } from "./table-cell";
import { useContext } from "react";

export function Table() {
  const { tables } = useContext(TablesContext);

  return (
    <table className={styles.table}>
      <thead className={styles.table_header}>
        <tr className={styles.table_header__item}>
          <th>FOTO</th>
          <th>NOME</th>
          <th>CARGO</th>
          <th>DATA DE ADMISSÃO</th>
          <th>TELEFONE</th>
          <th className={styles.table_header__dropdown}></th>
        </tr>
      </thead>

      <tbody className={styles.table_body}>
        {tables.map((user) => {
          return <TableCell key={user.id} {...user} />;
        })}
      </tbody>
    </table>
  );
}
