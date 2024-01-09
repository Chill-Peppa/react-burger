import PropTypes from 'prop-types';

// состояние стейтов для табов
export enum tabs {
  BUN = 'bun',
  SAUCE = 'sauce',
  MAIN = 'main',
}

export const BASE_URL = 'https://norma.nomoreparties.space';

export const ESCAPE_KEY_CODE = 'Escape';

export const ingredientsDataType = PropTypes.shape({
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  dropId: PropTypes.string,
});

export const headerLocations = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/profile',
  '/profile/orders',
];

export const wsUrl = 'wss://norma.nomoreparties.space/orders';
