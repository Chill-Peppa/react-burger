import {
  IOpenIngredientAction,
  ICloseIngredientAction,
} from '../types/ingredientTypes';
import { IIngredient } from '../../types/ingredientsTypes';

export const OPEN_INGREDIENT: 'OPEN_INGREDIENT' = 'OPEN_INGREDIENT';
export const CLOSE_INGREDIENT: 'CLOSE_INGREDIENT' = 'CLOSE_INGREDIENT';

//action creators
export const openIngredient = (
  ingredient: IIngredient,
): IOpenIngredientAction => {
  return {
    type: OPEN_INGREDIENT,
    ingredient,
  };
};

export const closeIngredient = (
  selectedIngredient: IIngredient,
): ICloseIngredientAction => {
  return {
    type: CLOSE_INGREDIENT,
    selectedIngredient,
  };
};
