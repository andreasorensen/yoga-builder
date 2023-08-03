import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Homepage from "../Homepage/Homepage";
import { getPoses } from "../apiCalls";
import NavBar from "../NavBar/NavBar";
import SavedPage from "../SavedPage/SavedPage";
import NotFoundPage from "../NotFound/NotFoundPage";

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState("beginner");
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
            path="/home"
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

// need to add error page route

export default App;
