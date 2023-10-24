export const ADD_BUN_INGREDIENT = 'ADD_BUN_INGREDIENT';
export const ADD_MAIN_INGREDIENT = 'ADD_MAIN_INGREDIENT';
export const DELETE_MAIN_INGREDIENT = 'DELETE_MAIN_INGREDIENT';
export const SORT_INGREDIENTS = 'SORT_INGREDIENTS';

//action creators
export const addBun = (bun) => {
  return { type: ADD_BUN_INGREDIENT, bun };
};

export const addMain = (main) => {
  return { type: ADD_MAIN_INGREDIENT, main };
};

export const deleteMain = (id) => {
  return { type: DELETE_MAIN_INGREDIENT, id };
};
//если будет время, надо подумать над тем как
//нормально написать криейтор, чтобы он всё таки работал.
//сейчас днд не сортируется, если всё оставить так
export const sortIngredients = (sortMain) => {
  return { type: SORT_INGREDIENTS, sortMain };
};
