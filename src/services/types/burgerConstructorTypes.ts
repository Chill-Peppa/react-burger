import {
  ADD_BUN_INGREDIENT,
  ADD_MAIN_INGREDIENT,
  DELETE_MAIN_INGREDIENT,
  SORT_INGREDIENTS,
} from '../actions/burgerConstructor';

import { IIngredient } from '../../types/ingredientsTypes';

export interface IAddBun {
  readonly type: typeof ADD_BUN_INGREDIENT;
  readonly bun: IIngredient;
}

export interface IAddMain {
  readonly type: typeof ADD_MAIN_INGREDIENT;
  readonly main: IIngredient;
}

export interface IDeleteMain {
  readonly type: typeof DELETE_MAIN_INGREDIENT;
  readonly id: string;
}

export interface ISortIngredients {
  readonly type: typeof SORT_INGREDIENTS;
  readonly sortMain: any;
}

export type TBurgerConstructorState = {
  bunIngredientsData: IIngredient;
  mainIngredientsData: IIngredient[];
};

//union
export type TBurgerConstructorActions =
  | IAddBun
  | IAddMain
  | IDeleteMain
  | ISortIngredients;
