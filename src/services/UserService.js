/* eslint-disable class-methods-use-this */
import api from './utils/api';

class UserService {
  async getByUsername(userName) {
    return (await api.get(`/api/User/${userName}`)).data;
  }

  async createUser(payload) {
    return (await api.post('/api/User', payload)).data;
  }

  async login(payload) {
    return (await api.post('/api/User/Login', payload)).data;
  }
}

export default new UserService();
