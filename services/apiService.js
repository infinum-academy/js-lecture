/* eslint-disable class-methods-use-this */
import fetch from 'isomorphic-fetch';

class ApiService {
  _baseUrl = 'https://api.infinum.academy/api/';

  _makeRequest(url, method, authKey, headers) {
    return fetch(`${this._baseUrl}${url}`, {
      method,
      headers: {
        'content-type': 'application/json',
        Authorization: authKey,
        ...headers,
      },
    }).then((res) => res.json());
  }

  get(url, authKey) {
    return this._makeRequest(url, 'GET', authKey);
  }

  post(url, authKey) {
    return this._makeRequest(url, 'GET', authKey);
  }
}

export default ApiService;
