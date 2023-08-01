import './App.css'
import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import FilterForm from '../FilterForm/FilterForm';

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
      console.log(data)
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Yogability</h1>
      <FilterForm
        selectedLevel={selectedLevel}
        handleLevelChange={handleLevelChange}
        fetchData={fetchData}
      />
      {error && <p>{error}</p>}
      {posesData && (
        <div>
          <h2>Yoga Poses for {selectedLevel} level:</h2>
          <ul>
            {posesData.poses.map((pose) => (
              <li key={pose.id}>{pose.english_name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;