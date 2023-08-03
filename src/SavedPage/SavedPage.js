import React from "react";
import AsanaCard from "../AsanaCard/AsanaCard";
import "./SavedPage.css";

const SavedPage = ({ favoritedPoses, handleToggleFavorite }) => {
  const renderSavedPoses = () => {
    return favoritedPoses.map((pose) => (
      <AsanaCard
        key={pose.id}
        pose={pose}
        handleToggleFavorite={handleToggleFavorite}
        favoritedPoses={favoritedPoses}
        isFavorited={true}
      />
    ));
  };

  return (
    <div className="saved-poses-container">
      <h2>Your Favorited Poses</h2>
      {favoritedPoses.length === 0 ? (
        <p>You have no favorited poses.</p>
      ) : (
        renderSavedPoses()
      )}
    </div>
  );
};

export default SavedPage;
