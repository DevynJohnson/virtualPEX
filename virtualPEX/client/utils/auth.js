import { jwtDecode } from 'jwt-decode';

class AuthService {
  // Get the user's profile from the token
  getProfile() {
    try {
      const token = this.getToken();
      if (!token) return null;
      return jwtDecode(token); // Decode the token and return the profile
    } catch (err) {
      console.error('Error decoding token:', err);
      return null;
    }
  }

  // Check if user is logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // Check if token exists and is not expired
  }

  // Check if the token is expired
  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token); // Decode the token
      return decoded?.exp && decoded.exp < Date.now() / 1000; // Expired check
    } catch (err) {
      console.error('Error checking token expiration:', err);
      return true; // Return true if token is invalid or expired
    }
  }

  // Get token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Save token to localStorage and redirect to home page
  login(idToken) {
    try {
      localStorage.setItem('id_token', idToken); // Save token to localStorage
      window.location.assign('/'); // Redirect to home page
    } catch (err) {
      console.error('Error saving token to localStorage:', err);
    }
  }

  // Remove token from localStorage and reload the page
  logout() {
    try {
      localStorage.removeItem('id_token'); // Remove token from localStorage
      window.location.href = '/'; // Redirect to home page
    } catch (err) {
      console.error('Error removing token from localStorage:', err);
    }
  }

  // Automatically check if the user is authenticated on page load
  checkAuthOnPageLoad() {
    if (this.loggedIn()) {
      console.log('User is logged in');
    } else {
      console.log('User is not logged in');
    }
  }
}

export default new AuthService();
