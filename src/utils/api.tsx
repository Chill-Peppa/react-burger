import { BASE_URL } from './constants';
import { getCookie } from './cookies';

type THeaders = {
  readonly 'Content-Type': string;
};

interface IConstructor {
  url: string;
  headers: THeaders;
}

interface IApi<T> {
  readonly _url: string;
  readonly _headers: T;
}

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IPasswordData {
  newPassword: string;
  token: string;
}

// Ключевое слово implements в TypeScript используется
// для указания того, что класс реализует определенный интерфейс.
export default class Api implements IApi<THeaders> {
  readonly _url: string;
  readonly _headers: THeaders;

  constructor({ url, headers }: IConstructor) {
    this._url = url;
    this._headers = headers;
  }

  //внутренний метод проверки ответа
  _returnResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //универсальный метод запроса с проверкой ответа
  _request(url: string, options: RequestInit) {
    return fetch(url, options).then(this._returnResponse);
  }

  //GET запрос с информацией о ингредиентах
  getIngredientsInfo() {
    return this._request(`${this._url}/api/ingredients`, {
      headers: this._headers,
    });
  }

  //метод отправки заказа на сервер
  sendOrder(id: string[]) {
    return this._request(`${this._url}/api/orders`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ ingredients: id }),
    });
  }

  //метод на регистрацию юзера
  register(user: IUser) {
    return this._request(`${this._url}/api/auth/register`, {
      headers: this._headers,
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(user),
    });
  }

  //метод для авторизации в системе
  login(user: IUser) {
    return this._request(`${this._url}/api/auth/login`, {
      headers: this._headers,
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(user),
    });
  }

  //чтобы разлогиниться
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
    });
  }

  //для восстановления пароля
  recoverPassword(email: string) {
    return this._request(`${this._url}/api/password-reset`, {
      headers: this._headers,
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ email: email }),
    });
  }

  //сбрасываем пароль
  resetPassword(passwordData: IPasswordData) {
    return this._request(`${this._url}/api/password-reset/reset`, {
      headers: this._headers,
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        password: passwordData.newPassword,
        token: passwordData.token,
      }),
    });
  }

  //получаем данные юзера
  getUserInfo() {
    return this._request(`${this._url}/api/auth/user`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken'),
      },
    });
  }

  //обновляем данные юзера
  updateUserInfo(form: IUser) {
    return this._request(`${this._url}/api/auth/user`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken'),
      },
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      }),
    });
  }

  //обновление токена
  updateToken() {
    return this._request(`${this._url}/api/auth/token`, {
      headers: this._headers,
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ token: getCookie('refreshToken') }),
    });
  }
}

//тут экземпляр класса
export const api = new Api({
  url: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
