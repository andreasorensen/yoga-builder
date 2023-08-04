import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Homepage from "../Homepage/Homepage";
import { getPoses } from "../apiCalls";
import NavBar from "../NavBar/NavBar";
import SavedPage from "../SavedPage/SavedPage";
import NotFoundPage from "../NotFound/NotFoundPage";
import './App.css'


const App = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [posesData, setPosesData] = useState(null);
  const [error, setError] = useState(null);
  const [showAsanaCards, setShowAsanaCards] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [favoritedPoses, setFavoritedPoses] = useState([]);

  const fetchData = async (level) => {
    setIsLoading(true);
    setShowAsanaCards(false);
    try {
      const data = await getPoses(level);
      setPosesData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedLevel !== "") {
      fetchData(selectedLevel);
    }
  }, [selectedLevel]);

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleToggleFavorite = (poseId) => {
    const pose = posesData.poses.find(pose => pose.id === poseId);
  
    if (favoritedPoses.find(favPose => favPose.id === poseId)) {
      setFavoritedPoses(favoritedPoses.filter(favPose => favPose.id !== poseId));
    } else {
      setFavoritedPoses([...favoritedPoses, pose]);
    }
  };
  
  return (
    <>
      <NavBar />
      {error ? (
        <p className="error-msg">{error}</p>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                selectedLevel={selectedLevel}
                handleLevelChange={handleLevelChange}
                posesData={posesData}
                setShowAsanaCards={setShowAsanaCards}
                showAsanaCards={showAsanaCards}
                isLoading={isLoading}
                handleToggleFavorite={handleToggleFavorite}
                favoritedPoses={favoritedPoses}
                setSelectedLevel={setSelectedLevel}
              />
            }
          />
          <Route
            path="/saved"
            element={
              <SavedPage
                favoritedPoses={favoritedPoses}
                handleToggleFavorite={handleToggleFavorite}
              />
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
