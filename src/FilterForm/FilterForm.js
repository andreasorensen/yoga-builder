
const FilterForm = ({selectedLevel, handleLevelChange, getPoses}) => {
  return (
    <>
      <label>
        Select Level:
        <select value={selectedLevel} onChange={handleLevelChange}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </label>
      <button onClick={getPoses}>Submit</button>
    </>
  )
}

export default FilterForm