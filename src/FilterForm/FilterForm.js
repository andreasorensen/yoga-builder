


const FilterForm = ({selectedLevel, handleLevelChange, fetchData}) => {
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
      <button onClick={fetchData}>Submit</button>
    </>
  )
}

export default FilterForm