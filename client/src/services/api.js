import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const getUserInfo = async (username, media, verified) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/account`, {
      params: { username, media, verified },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error.message || error);
    return null;
  }
};

export const getPostEngagement = async (userId, startDate, endDate) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/postEngagement`, {
      params: { userId, startDate, endDate },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error.message || error);
    return null;
  }
};

export const getPopularHashtag = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/popularHashtag`, {
      params: { userId },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error.message || error);
    return null;
  }
};

export const getPopularMention = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/popularMention`, {
      params: { userId },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error.message || error);
    return null;
  }
};

export const getMediaPost = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/mediaPost`, {
      params: { userId },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error.message || error);
    return null;
  }
};

export const getPopularKeyword = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/popularKeyword`, {
      params: { userId },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error.message || error);
    return null;
  }
};

export const getPopularEmail = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/popularEmail`, {
      params: { userId },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error.message || error);
    return null;
  }
};

export const getPopularPhoneNumber = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/popularPhoneNumber`, {
      params: { userId },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error.message || error);
    return null;
  }
};

export const getAccountSentiment = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/accountSentiment`, {
      params: { userId },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error.message || error);
    return null;
  }
};
