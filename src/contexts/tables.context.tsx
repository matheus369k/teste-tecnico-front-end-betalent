import { createContext, useEffect, useRef, useState } from "react";
import { getTables } from "@/services/get-tables";

export interface TableTypes {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface TablesContextType {
  tables: TableTypes[];
  filterTables: (filter: string) => void;
}

export const TablesContext = createContext({} as TablesContextType);

export function TablesProvider({ children }: { children: React.ReactNode }) {
  const [tables, setTables] = useState<TableTypes[]>([]);
  const tableRef = useRef<TableTypes[]>([]);

  useEffect(() => {
    if (tableRef.current.length === 0) {
      getTables().then(({ data }) => {
        tableRef.current = data;

        const url = new URL(window.location.toString());
        const search = url.searchParams.get("search") || "";

        filterTables(search);
      });
    }
  }, []);

  function filterTables(filter: string) {
    const { formattedFilter } = handleFormatterFilterQuery(filter);

    if (formattedFilter === "") {
      setTables(tableRef.current);
    }

    const filteredTables = tableRef.current.filter((table) => {
      const formattedName = table.name.toLowerCase();
      const formattedJob = table.job.toLowerCase().replace("-", "");

      if (formattedName.startsWith(formattedFilter)) return true;
      if (formattedJob.startsWith(formattedFilter)) return true;
      if (table.phone.startsWith(formattedFilter)) return true;

      return false;
    });

    setTables(filteredTables);
  }

  function handleFormatterFilterQuery(filter: string) {
    let formattedFilter = filter.toLowerCase().trim();

    if (formattedFilter === "") {
      return {
        formattedFilter,
      };
    }

    if (formattedFilter.includes("+")) {
      formattedFilter = formattedFilter.split("+")?.[1] || "";
    }

    if (formattedFilter.includes("(")) {
      formattedFilter = formattedFilter.replace(" (", "").replace("(", "");
      console.log(formattedFilter);
    }

    if (formattedFilter.includes(")")) {
      formattedFilter = formattedFilter.replace(") ", "").replace(")", "");
    }

    if (formattedFilter.includes("-")) {
      formattedFilter = formattedFilter.replace("-", "");
    }

    return {
      formattedFilter,
    };
  }

  return (
    <TablesContext.Provider value={{ tables, filterTables }}>
      {children}
    </TablesContext.Provider>
  );
}
