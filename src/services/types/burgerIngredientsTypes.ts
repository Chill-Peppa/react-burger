import { IIngredient } from '../../types/ingredientsTypes';
import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../actions/burgerIngredients';

export interface IGetIngredients {
  readonly type: typeof GET_INGREDIENTS;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: IIngredient[];
}

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TBurgerIngredientsState = {
  ingredients: IIngredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
};

export type TBurgerIngredientsActions =
  | IGetIngredients
  | IGetIngredientsSuccess
  | IGetIngredientsFailed;
