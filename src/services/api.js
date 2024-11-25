const API_BASE_URL = process.env.REACT_APP_API_URL;
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const RAPID_API_HOST = process.env.REACT_APP_RAPID_API_HOST;

const headers = {
  "x-rapidapi-key": RAPID_API_KEY,
  "x-rapidapi-host": RAPID_API_HOST,
  "Content-Type": "application/json",
};

export const getUserInfo = async (username) => {
  try {
    const response = await fetch(`${API_BASE_URL}/get_info`, {
      method: "POST",
      headers,
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
};
