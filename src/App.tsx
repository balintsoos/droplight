import { useEffect, useState } from "react";

type Record = {
  id: string;
  meter: number;
};

function App() {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    async function fetchRecords() {
      try {
        const response = await fetch("/records");
        const records = await response.json();
        setRecords(records);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    }

    fetchRecords();
  }, []);

  return (
    <>
      <h1>Droplight</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Meter</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.meter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
