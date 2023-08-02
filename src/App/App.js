import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Homepage from "../Homepage/Homepage";
import { getPoses } from "../apiCalls";
import NavBar from "../NavBar/NavBar";

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [posesData, setPosesData] = useState(null);
  const [error, setError] = useState(null);
  const [showAsanaCards, setShowAsanaCards] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (level) => {
    setIsLoading(true);
    setShowAsanaCards(false);
    try {
      const data = await getPoses(level);
      setPosesData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(selectedLevel);
  }, [selectedLevel]);

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  return (
    <>
      <NavBar />
      {error && <p>{error}</p>}
      <div>
        <Homepage
          selectedLevel={selectedLevel}
          handleLevelChange={handleLevelChange}
          posesData={posesData}
          setShowAsanaCards={setShowAsanaCards}
          showAsanaCards={showAsanaCards}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default App;
