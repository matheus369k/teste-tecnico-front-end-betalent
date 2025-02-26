import type { TableTypes } from "@/contexts/tables.context";

export async function getTables() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: TableTypes[] = await response.json();

    if (data.length === 0) {
      throw new Error("No data found");
    }

    return {
      data,
    };
  } catch (error) {
    console.error(error);

    return {
      data: [],
    };
  }
}
