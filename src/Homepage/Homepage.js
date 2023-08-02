// this should have the Form component rendered as well as the Asana cards

import FilterForm from "../FilterForm/FilterForm";
import AsanaCard from "../AsanaCard/AsanaCard";

const Homepage = ({
  selectedLevel,
  handleLevelChange,
  posesData,
  setShowAsanaCards,
  showAsanaCards,
}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAsanaCards(true);
  };

  const renderAsanaCard = () => {
    return posesData.poses.map((pose) => (
      <AsanaCard key={pose.id} pose={pose} />
    ));
  };

  return (
    <>
      <FilterForm
        selectedLevel={selectedLevel}
        handleLevelChange={handleLevelChange}
        onSubmit={handleSubmit}
      />
      {showAsanaCards && (
        <>
          <h2>Yoga Poses for {selectedLevel} level:</h2>
          <div className="asana-card-container">{renderAsanaCard()}</div>
        </>
      )}
    </>
  );
};

export default Homepage;
