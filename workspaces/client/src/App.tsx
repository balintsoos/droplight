import { useEffect, useState } from 'react';
import './App.css'
import PocketBase from 'pocketbase';

type TestCollectionRecord = {
  id: string;
  name: string;
  created: string;
  updated: string;
};

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<TestCollectionRecord[]>([]);

  useEffect(() => {
    const pb = new PocketBase('/');

    async function fetchData() {
      try {
        const records = await pb.collection<TestCollectionRecord>('test_collection').getFullList();
        setData(records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Droplight</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.created}</td>
              <td>{item.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
