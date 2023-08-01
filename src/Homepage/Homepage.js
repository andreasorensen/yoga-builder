// this should have the Form component rendered as well as the Asana cards

import FilterForm from "../FilterForm/FilterForm";

const Homepage = ({selectedLevel, handleLevelChange}) => {
  return (
    <>
      <FilterForm
        selectedLevel={selectedLevel}
        handleLevelChange={handleLevelChange}
      />
    </>
  );
};

export default Homepage;
