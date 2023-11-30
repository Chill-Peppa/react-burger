import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';

import { store } from '../store';
import { TBurgerConstructorActions } from './burgerConstructorTypes';
import { TIngredientActions } from './ingredientTypes';
import { TAuthActions } from './authTypes';
import { TBurgerIngredientsActions } from './burgerIngredientsTypes';
import { TOrderActions } from './orderTypes';

// ReturnType - вспомогательный тип (для описания thunk)
export type RootState = ReturnType<typeof store.getState>;

//типизация всех экшенов хранилища
export type TApplicationActions =
  | TBurgerConstructorActions
  | TIngredientActions
  | TAuthActions
  | TBurgerIngredientsActions
  | TOrderActions;

// Типизация thunk'ов в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch;
