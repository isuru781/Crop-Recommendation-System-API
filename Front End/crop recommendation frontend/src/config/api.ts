// API Configuration
// Change this URL if your Flask backend is running on a different host/port

export const API_BASE_URL = 'http://localhost:5000';

export const API_ENDPOINTS = {
  predict: `${API_BASE_URL}/predict`,
  health: `${API_BASE_URL}/`,
};

export default API_BASE_URL;
