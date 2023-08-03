import React from "react";
import AsanaCard from "../AsanaCard/AsanaCard";
import "./SavedPage.css";
import PropTypes from 'prop-types'

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

SavedPage.propTypes = {
  favoritedPoses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      english_name: PropTypes.string.isRequired,
      sanskrit_name: PropTypes.string.isRequired,
      url_svg: PropTypes.string.isRequired,
      pose_description: PropTypes.string,
      pose_benefits: PropTypes.string,
    })
  ).isRequired,
  handleToggleFavorite: PropTypes.func.isRequired,
};

export default SavedPage;
