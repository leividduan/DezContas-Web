/* eslint-disable class-methods-use-this */

import api from './utils/api';

class CategoryService {
  async get() {
    return (await api.get('/api/Category')).data;
  }
}

export default new CategoryService();
