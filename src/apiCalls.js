
const getPoses = async (selectedLevel) => {
  const response = await fetch(`https://yoga-api-nzy4.onrender.com/v1/poses?level=${selectedLevel}`);

  if (!response.ok && response.status >= 500 && response.status < 600) {
    throw new Error(`Server error: ${response.status}`)
  }

  if (!response.ok && response.status === 404) {
    throw new Error(`Server error: ${response.status}`)
  }

  return response.json();
}


export {getPoses}