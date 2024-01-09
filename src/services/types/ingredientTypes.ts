import { OPEN_INGREDIENT, CLOSE_INGREDIENT } from '../actions/ingredient';
import { IIngredient } from '../../types/ingredientsTypes';

export interface IOpenIngredientAction {
  readonly type: typeof OPEN_INGREDIENT;
  readonly ingredient: IIngredient;
}

export interface ICloseIngredientAction {
  readonly type: typeof CLOSE_INGREDIENT;
  readonly selectedIngredient: IIngredient;
}

export type TIngredientState = {
  selectedIngredient: IIngredient | null;
};

export type TIngredientActions = IOpenIngredientAction | ICloseIngredientAction;
