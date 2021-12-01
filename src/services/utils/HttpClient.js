import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.token = JSON.parse(localStorage.getItem('user'))?.token;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }

  async post(path, payload, authToken) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(payload),
    });

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;
