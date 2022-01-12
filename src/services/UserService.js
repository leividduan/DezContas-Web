/* eslint-disable class-methods-use-this */
import api from './utils/api';
import HttpClient from './utils/HttpClient';

class UserService {
  constructor() {
    this.httpClient = new HttpClient('https://localhost:5001');
  }

  async getByUsername(userName) {
    return (await api.get(`/api/User/${userName}`)).data;
  }

  async createUser(payload) {
    return (await api.post('/api/User', payload)).data;
  }

  async login(payload) {
    return this.httpClient.post('/api/User/Login', payload);
  }
}

export default new UserService();
