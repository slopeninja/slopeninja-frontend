const API_URL = process.env.REACT_APP_API_URL;

export const getResorts = async () => {
  const response = await fetch(`${API_URL}/resorts`);
  const data = await response.json();
  return data.resorts;
};
