// client/utils/auth.js
import { jwtDecode } from 'jwt-decode';

class AuthService {
  // Retrieve and decode the stored token
  getProfile() {
    try {
      const token = this.getToken();
      if (!token) return null;
      return jwtDecode(token);
    } catch (err) {
      console.error('Error decoding token:', err);
      return null;
    }
  }

  // Check if the user is logged in by verifying token existence and validity
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check token expiration
  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      // Expiration is in seconds, so divide Date.now() by 1000
      return decoded?.exp && decoded.exp < Date.now() / 1000;
    } catch (err) {
      console.error('Error checking token expiration:', err);
      return true;
    }
  }

  // Retrieve token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Log in by saving the token and redirecting to home
  login(idToken) {
    try {
      localStorage.setItem('id_token', idToken);
      window.location.assign('/');
    } catch (err) {
      console.error('Error saving token:', err);
    }
  }

  // Log out by removing the token and redirecting
  logout() {
    try {
      localStorage.removeItem('id_token');
      window.location.href = '/';
    } catch (err) {
      console.error('Error removing token:', err);
    }
  }

  // Check authentication status on page load (optional)
  checkAuthOnPageLoad() {
    if (this.loggedIn()) {
      console.log('User is logged in');
    } else {
      console.log('User is not logged in');
    }
  }
}

export default new AuthService();
