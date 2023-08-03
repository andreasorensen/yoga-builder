import PropTypes from 'prop-types'

const FilterForm = ({ selectedLevel, handleLevelChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Select Level:
        <select value={selectedLevel} onChange={handleLevelChange}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

FilterForm.propTypes = {
  selectedLevel: PropTypes.string.isRequired,
  handleLevelChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FilterForm;
