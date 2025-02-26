import styles from "./styles.module.css";
import type { TableTypes } from "@/contexts/tables.context";
import dayjs from "dayjs";
import { parsePhoneNumber } from "libphonenumber-js/min";

export function TableCell(props: Omit<TableTypes, "id">) {
  const { admission_date, image, job, name, phone } = props;

  const formattedAdmissionDate = dayjs(admission_date).format("DD/MM/YYYY");

  const countryCode = phone.slice(0, 2);
  const formattedPhoneNumber = parsePhoneNumber(phone, {
    defaultCallingCode: countryCode,
  }).formatNational();

  return (
    <tr className={styles.table_body__item}>
      <td className={styles.table_body__image}>
        <img src={image} alt={"foto de" + name} loading="lazy" />
      </td>
      <td>{name}</td>
      <td data-th-value="Cargo">{job}</td>
      <td data-th-value="Data de admissão">{formattedAdmissionDate}</td>
      <td data-th-value="Telefone">{`+${countryCode} ${formattedPhoneNumber}`}</td>
      <td className={styles.table_body__dropdown}>
        <input type="checkbox" name="dropdown-input" />
        <i></i>
      </td>
    </tr>
  );
}
