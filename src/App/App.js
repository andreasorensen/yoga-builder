import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Homepage from "../Homepage/Homepage";
import { getPoses } from "../apiCalls";

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState("beginner");
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
      {error && <p>{error}</p>}

      {posesData && (
        <div>
          <Homepage
        selectedLevel={selectedLevel}
        handleLevelChange={handleLevelChange}
        posesData={posesData}
      />
        </div>
      )}
    </div>
  );
};

export default App;
