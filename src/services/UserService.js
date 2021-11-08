import HttpClient from './utils/HttpClient';

class UserService {
  constructor() {
    this.httpClient = new HttpClient('https://localhost:5001');
  }

  async login(payload) {
    return this.httpClient.post('/api/User/Login', payload);
  }
}

export default new UserService();
