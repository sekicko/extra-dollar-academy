// API Configuration
const API_BASE_URL = 'https://extra-dollar-academy.onrender.com/api';

// Helper function to make API calls
async function apiCall(endpoint, method = 'GET', data = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const token = localStorage.getItem('token');
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    console.log(`[API] ${method} ${API_BASE_URL}${endpoint}`, data);
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const result = await response.json();

    console.log(`[API Response]`, result);

    if (!response.ok) {
      console.error(`[API Error] Status: ${response.status}`, result.error);
      throw new Error(result.error || 'API Error');
    }

    return result;
  } catch (error) {
    console.error('[API Error]:', error);
    throw error;
  }
}

// Authentication helpers
function getToken() {
  return localStorage.getItem('token');
}

function getUser() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

function isLoggedIn() {
  return !!getToken();
}

function isAdmin() {
  const user = getUser();
  return user && user.isAdmin;
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  showAlert('You have been logged out', 'success');
  setTimeout(() => {
    window.location.href = '/pages/login.html';
  }, 1000);
}

function handleLogout() {
  logout();
}

function handleLogout() {
  logout();
}

// Alert Helper
function showAlert(message, type = 'info') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.textContent = message;
  
  const container = document.querySelector('.container') || document.body;
  container.insertBefore(alertDiv, container.firstChild);

  setTimeout(() => alertDiv.remove(), 4000);
}
