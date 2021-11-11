import HttpClient from './utils/HttpClient';

class UserService {
  constructor() {
    this.httpClient = new HttpClient('https://localhost:5001');
  }

  async getByUsername(userName) {
    return this.httpClient.get(`/api/User/${userName}`);
  }

  async createUser(payload) {
    return this.httpClient.post('/api/User', payload);
  }

  async login(payload) {
    return this.httpClient.post('/api/User/Login', payload);
  }
}

export default new UserService();
