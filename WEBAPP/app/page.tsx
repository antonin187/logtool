import sqlite3 from "sqlite3";
import { open } from "sqlite";

const Home = async () => {
  const db = await open({
    filename: "./dbs/errors.db",
    driver: sqlite3.Database,
  });

  const getAll = async () => {
    const data = await db.all("SELECT * FROM logs");
    return data;
  };

  const logsFormatted = (await getAll()).map((log) => (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {log.request_line}
      </th>
      <td className="px-6 py-4">{log.ip}</td>
      <td className="px-6 py-4">{log.status}</td>
      <td className="px-6 py-4">{log.time_local}</td>
    </tr>
  ));

  return (
    <div
      className="relative overflow-x-auto shadow-md sm:rounded-lg bar no-scrollbar"
      style={{ maxHeight: "calc(100vh - 50px)" }}
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Logs
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Présentation sous forme de tableau de 200 logs générés en python,
            puis traités avec Talend et enregistrés dans une base de données
            SQLite.
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
          <tr>
            <th scope="col" className="p-4"></th>
            <th scope="col" className="px-6 py-3">
              Request
            </th>
            <th scope="col" className="px-6 py-3">
              IP
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Datetime
            </th>
          </tr>
        </thead>
        <tbody>{logsFormatted}</tbody>
      </table>
    </div>
  );
};

export default Home;
