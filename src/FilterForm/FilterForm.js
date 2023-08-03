import PropTypes from 'prop-types'
import './FilterForm.css'

const FilterForm = ({ selectedLevel, handleLevelChange, onSubmit }) => {
  return (
    <div className='form-container'>
    <form onSubmit={onSubmit} className='form'>
      <h3 className='curr-level'>Begin exploring asanas by selecting your current experience level below.</h3>
      <label>
        <select className='drop-down' value={selectedLevel} onChange={handleLevelChange}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </label>
      <button className='submit-btn' type="submit">Submit</button>
    </form>
    </div>
  );
};

FilterForm.propTypes = {
  selectedLevel: PropTypes.string.isRequired,
  handleLevelChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FilterForm;
