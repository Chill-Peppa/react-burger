import { BASE_URL } from '../utils/constants';
import { getCookie } from './cookies';

export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  //внутренний метод проверки ответа
  _returnResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //универсальный метод запроса с проверкой ответа
  _request(url, options) {
    return fetch(url, options).then(this._returnResponse);
  }

  //GET запрос с информацией о ингредиентах
  getIngredientsInfo() {
    return this._request(`${this._url}/api/ingredients`, {
      headers: this._headers,
    });
  }

  //метод отправки заказа на сервер
  sendOrder(id) {
    return this._request(`${this._url}/api/orders`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ ingredients: id }),
    });
  }

  //метод на регистрацию юзера
  register(user) {
    return this._request(`${this._url}/api/auth/register`, {
      headers: this._headers,
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(user),
    }).then(this._returnResponse);
  }

  //метод для авторизации в системе
  login(user) {
    return this._request(`${this._url}/api/auth/login`, {
      headers: this._headers,
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(user),
    }).then(this._returnResponse);
  }

  logout() {
    return this._request(`${this._url}/api/auth/logout`, {
      headers: this._headers,
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ token: getCookie('refreshToken') }),
    }).then(this._returnResponse);
  }
}

//тут экземпляр класса
export const api = new Api({
  url: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
