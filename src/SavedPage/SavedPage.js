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
      {!favoritedPoses.length ? (
        <h3 className='no-saved-msg'>You currently have no saved asanas.</h3>
      ) : (
        <>
        <h3 className='fav-asana-heading'>Here are your favorite asanas!</h3>
        <div className="asana-card-container">
        {renderSavedPoses()}
        </div>
        </>
      )}
    </div>
  );
};

export default SavedPage;
