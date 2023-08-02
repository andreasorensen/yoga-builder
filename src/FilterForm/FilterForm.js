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

export default FilterForm;
