import HttpClient from './utils/HttpClient';

class CategoryService {
  constructor() {
    this.httpClient = new HttpClient('https://localhost:5001');
  }

  async get() {
    return this.httpClient.get('/api/Category');
  }
}

export default new CategoryService();
