import HttpClient from './utils/HttpClient';

class CategoryService {
  constructor() {
    this.httpClient = new HttpClient('https://localhost:5001');
  }

  async get(authToken) {
    return this.httpClient.get('/api/Category', authToken);
  }
}

export default new CategoryService();
