const API_URL = 'http://localhost:1234';

export const getResorts = async () => {
  const response = await fetch(`${API_URL}/resorts`);
  const data = await response.json();
  return data.resorts;
};
