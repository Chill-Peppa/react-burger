import PropTypes from 'prop-types';

// состояние стейтов для табов
export const tabs = {
  BUN: 'bun',
  SAUCE: 'sauce',
  MAIN: 'main',
};

export const BASE_URL = 'https://norma.nomoreparties.space';

export const ESCAPE_KEY_CODE = 27;

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
