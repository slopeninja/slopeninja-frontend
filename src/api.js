const API_URL = process.env.REACT_APP_API_URL;

export const getResorts = async () => {
  const response = await fetch(`${API_URL}/resorts`);
  const data = await response.json();
  return data.resorts;
};

export const sendNewsletterSubscription = async (email) => {
  const response = await fetch(`${API_URL}/subscribers`, {
    method: 'POST',
    headers:
    new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({
      email,
    }),
  });
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.error);
  }

  return data;
};
