import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import FilterForm from '../FilterForm/FilterForm';
import { getPoses } from '../apiCalls';

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [posesData, setPosesData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (level) => {
    try {
      const data = await getPoses(level);
      setPosesData(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchData(selectedLevel);
  }, [selectedLevel]);

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  return (
    <div>
      <h1>Yogability</h1>
      <FilterForm
        selectedLevel={selectedLevel}
        handleLevelChange={handleLevelChange}
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
