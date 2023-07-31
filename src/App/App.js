import './App.css'
import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [posesData, setPosesData] = useState(null);
  const [error, setError] = useState(null);

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://yoga-api-nzy4.onrender.com/v1/poses?level=${selectedLevel}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosesData(data);
      setError(null); // Clear any previous errors if the fetch is successful
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.'); // Set an error message to display to the user
    }
  };

  return (
    <div>
      <h1>Yoga Poses App</h1>
      <label>
        Select Level:
        <select value={selectedLevel} onChange={handleLevelChange}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>
      <button onClick={fetchData}>Fetch Data</button>

      {error && <p>{error}</p>}
      {posesData && (
        <div>
          <h2>Yoga Poses for {selectedLevel} level:</h2>
          <ul>
            {posesData.map((pose) => (
              <li key={pose.id}>{pose.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;