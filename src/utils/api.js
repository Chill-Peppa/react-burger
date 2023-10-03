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
}
