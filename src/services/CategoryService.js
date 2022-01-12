/* eslint-disable class-methods-use-this */

import api from './utils/api';

class CategoryService {
  async get() {
    return (await api.get('/api/Category')).data;
  }

  async getSingle(id) {
    return (await api.get(`/api/Category/${id}`)).data;
  }

  async create(payload) {
    return (await api.post('/api/Category', payload)).data;
  }

  async edit(id, payload) {
    return (await api.put(`/api/Category/${id}`, payload)).data;
  }

  async delete(id) {
    return (await api.delete(`/api/Category/${id}`)).data;
  }
}

export default new CategoryService();
