import { useEffect, useState } from "react";

type Record = {
  id: string;
  meter: number;
  created: string;
};

function App() {
  const [records, setRecords] = useState<Record[]>([]);
  const [meterValue, setMeterValue] = useState<string>("");

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

  async function createRecord() {
    try {
      const response = await fetch("/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ meter: Number(meterValue) }),
      });
      const newRecord = await response.json();
      setRecords((prevRecords) => [...prevRecords, newRecord]);
      setMeterValue(""); // Clear input after submit
    } catch (error) {
      console.error("Error creating record:", error);
    }
  }

  return (
    <>
      <h1>Droplight</h1>
      <input
        type="number"
        placeholder="Enter meter value"
        value={meterValue}
        onChange={(e) => setMeterValue(e.target.value)}
      />
      <button onClick={createRecord} disabled={meterValue === ""}>
        Create
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Meter</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.meter}</td>
              <td>{record.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
