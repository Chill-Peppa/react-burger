import { IIngredient } from '../../types/ingredientsTypes';
import {
  IAddBun,
  IAddMain,
  IDeleteMain,
} from '../types/burgerConstructorTypes';

export const ADD_BUN_INGREDIENT: 'ADD_BUN_INGREDIENT' = 'ADD_BUN_INGREDIENT';
export const ADD_MAIN_INGREDIENT: 'ADD_MAIN_INGREDIENT' = 'ADD_MAIN_INGREDIENT';
export const DELETE_MAIN_INGREDIENT: 'DELETE_MAIN_INGREDIENT' =
  'DELETE_MAIN_INGREDIENT';
export const SORT_INGREDIENTS: 'SORT_INGREDIENTS' = 'SORT_INGREDIENTS';

//action creators
export const addBun = (bun: IIngredient): IAddBun => {
  return { type: ADD_BUN_INGREDIENT, bun };
};

export const addMain = (main: IIngredient): IAddMain => {
  return { type: ADD_MAIN_INGREDIENT, main };
};

export const deleteMain = (id: string): IDeleteMain => {
  return { type: DELETE_MAIN_INGREDIENT, id };
};
