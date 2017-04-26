const API_URL = 'https://slopeninja-api.herokuapp.com';

export const getResorts = async () => {
  const response = await fetch(`${API_URL}/resorts`);
  const data = await response.json();
  return data.resorts;
};
