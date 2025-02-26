import { Header } from "./components/header/header";
import { SearchBar } from "./components/search-bar/search-bar";
import { Table } from "./components/table/table";
import { TablesProvider } from "./contexts/tables.context";

export function App() {
  return (
    <TablesProvider>
      <div className="root_container">
        <Header />
        <main className="main_container">
          <div className="search_container">
            <h1 className="search_container__title">Funcionários</h1>
            <SearchBar />
          </div>
          <Table />
        </main>
      </div>
    </TablesProvider>
  );
}
