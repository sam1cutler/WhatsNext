import config from '../config';

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearLocalStorage() {
    window.localStorage.removeItem(config.TOKEN_KEY);
    window.localStorage.removeItem(config.ACTIVE_USER);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
  saveUserId(id) {
    window.localStorage.setItem(config.ACTIVE_USER, id);
  },
  getUserId() {
    return window.localStorage.getItem(config.ACTIVE_USER);
  }
}

export default TokenService
