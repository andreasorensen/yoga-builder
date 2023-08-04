
const getPoses = async (selectedLevel) => {
  const response = await fetch(`https://yoga-api-nzy4.onrender.com/v1/poses?level=${selectedLevel}`);

  if (!response.ok && response.status >= 500 && response.status < 600) {
    throw new Error(`I'm sorry, something went wrong on our end. Please try again later. Server Error: ${response.status}`)
  }

  if (!response.ok && response.status >= 400 && response.status < 500) {
    throw new Error(`I'm sorry, something went wrong on your end. Error: ${response.status}`)
  }

  return response.json();
}


export { getPoses }