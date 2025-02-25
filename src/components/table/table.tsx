import styles from "./styles.module.css";
import { TableCell } from "./table-cell";

const data = {
  id: 1,
  name: "João",
  job: "Back-end",
  admission_date: "2019-12-02T00:00:00.000Z",
  phone: "5551234567890",
  image:
    "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
};

export function Table() {
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
        {Array.from({ length: 5 }).map((_, index) => {
          return <TableCell key={index + data.id} {...data} />;
        })}
      </tbody>
    </table>
  );
}
