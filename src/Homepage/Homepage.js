// this should have the Form component rendered as well as the Asana cards
import './Homepage.css'
import FilterForm from "../FilterForm/FilterForm";
import AsanaCard from "../AsanaCard/AsanaCard";
import PropTypes from 'prop-types';
import { useState } from 'react';

const Homepage = ({
  selectedLevel,
  handleLevelChange,
  posesData,
  setShowAsanaCards,
  showAsanaCards,
  isLoading,
  handleToggleFavorite,
  favoritedPoses
}) => {

  const [errorMessage, setErrorMessage] = useState(null);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedLevel === "") {
      setErrorMessage("Please select a level before submitting.");
    } else {
      setShowAsanaCards(true);
      setErrorMessage(null);
    }
  };
  

  const renderAsanaCard = () => {
    return posesData.poses.map((pose) => (
      <AsanaCard key={pose.id} pose={pose} handleToggleFavorite={handleToggleFavorite} favoritedPoses={favoritedPoses}/>
    ));
  };

  return (
    <>
    <FilterForm
      selectedLevel={selectedLevel}
      handleLevelChange={handleLevelChange}
      onSubmit={handleSubmit}
    />
    {errorMessage && <p className="error-message">{errorMessage}</p>}
        {showAsanaCards && (
        <>
          <h2 className="asana-level-msg">Here are some {selectedLevel} level asanas:</h2>
          <div className="asana-card-container">{renderAsanaCard()}</div>
        </>
      )}
    </>
  );
};

Homepage.propTypes = {
  selectedLevel: PropTypes.string.isRequired,
  handleLevelChange: PropTypes.func.isRequired,
  posesData: PropTypes.shape({
    poses: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        english_name: PropTypes.string,
        sanskrit_name: PropTypes.string,
        url_svg: PropTypes.string,
        pose_description: PropTypes.string,
        pose_benefits: PropTypes.string,
      }),
    ),
  }),
  setShowAsanaCards: PropTypes.func.isRequired,
  showAsanaCards: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleToggleFavorite: PropTypes.func.isRequired,
  favoritedPoses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      english_name: PropTypes.string,
      sanskrit_name: PropTypes.string,
      url_svg: PropTypes.string,
      pose_description: PropTypes.string,
      pose_benefits: PropTypes.string,
    }),
  ).isRequired,
};



export default Homepage;
