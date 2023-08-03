// this should have the Form component rendered as well as the Asana cards
import './Homepage.css'
import FilterForm from "../FilterForm/FilterForm";
import AsanaCard from "../AsanaCard/AsanaCard";
import PropTypes from 'prop-types';

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
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAsanaCards(true);
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
      {isLoading ? <p>Loading...</p> :showAsanaCards && (
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
  posesData: PropTypes.object,
  setShowAsanaCards: PropTypes.func.isRequired,
  showAsanaCards: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleToggleFavorite: PropTypes.func.isRequired,
  favoritedPoses: PropTypes.array.isRequired,
};


export default Homepage;
