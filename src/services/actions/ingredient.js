export const OPEN_INGREDIENT = 'OPEN_INGREDIENT';
export const CLOSE_INGREDIENT = 'CLOSE_INGREDIENT';

//action creators
export const openIngredient = (ingredient) => {
  return {
    type: OPEN_INGREDIENT,
    ingredient,
  };
};

export const closeIngredient = (selectedIngredient) => {
  return {
    type: CLOSE_INGREDIENT,
    selectedIngredient,
  };
};
