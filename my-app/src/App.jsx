import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
    const [info, setInfo] = useState([]);

    const [formInfo, setFormInfo] = useState({
        id: null,
        name: '',
        value: '',

    });
}


  useEffect(() => {
    // Fetch data from the server
    fetch("/api/users") // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

export default App;
