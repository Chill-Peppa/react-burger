import React from 'react';
import styles from './burger-constructor.module.css';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from '../../services/types/hooks';
import { v4 as uuidv4 } from 'uuid';
import update from 'immutability-helper';
import { useNavigate } from 'react-router-dom';

import { tabs } from '../../utils/constants';
import {
  SORT_INGREDIENTS,
  addBun,
  addMain,
  deleteMain,
} from '../../services/actions/burgerConstructor';
import { IIngredient } from '../../types/ingredientsTypes';
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { getOrderNumber } from '../../services/actions/order';
import BurgerConstructorIngredient from '../burger-constructor-ingredient/burger-constructor-ingredient';

interface IState {
  total: number;
}

interface IAction {
  type: 'increment' | 'decrement';
  payload: number;
}

interface IBurgerConstructor {
  onOrderOpen: () => void;
}

const totalPriceInitialVal: IState = { total: 0 };

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'increment':
      return { total: action.payload };
    default:
      return { total: 0 };
  }
};

const BurgerConstructor: React.FC<IBurgerConstructor> = ({ onOrderOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ingredients = useSelector((store) => store.ingredients.ingredients);

  console.log(ingredients);

  const { mainIngredientsData, bunIngredientsData } = useSelector(
    (store) => store.addedIngredients,
  );

  const { isLoggedIn } = useSelector((store) => store.user);

  const [totalPriceState, totalPriceDispatch] = React.useReducer(
    reducer,
    totalPriceInitialVal,
  );

  const totalPrice =
    mainIngredientsData.reduce((prevItem: number, item: { price: number }) => {
      return prevItem + item.price;
    }, 0) +
      bunIngredientsData.price * 2 || 0;

  React.useEffect(() => {
    totalPriceDispatch({ type: 'increment', payload: totalPrice });
  }, [totalPrice]);

  const onClickOrderSubmit = () => {
    const AddedIngredientsIds = ingredients.map(
      (ingredient: IIngredient) => ingredient._id,
    );
    if (isLoggedIn) {
      onOrderOpen();
      dispatch(getOrderNumber(AddedIngredientsIds));
    } else {
      navigate('/login', { replace: true });
    }
  };

  /*------------ DND ------------*/
  const onDropHandler = (item: IIngredient) => {
    if (item.type === tabs.BUN) {
      dispatch(addBun(item));
      console.log(item);
    } else if (item.type !== tabs.BUN) {
      console.log(item);
      dispatch(addMain({ ...item, dropId: uuidv4() }));
    }
  };

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item: IIngredient) {
      onDropHandler(item);
    },
  });

  const handleDeleteIngredient = (key: string) => {
    dispatch(deleteMain(key));
  };

  const moveCard = React.useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch({
        type: SORT_INGREDIENTS,
        sortMain: update(mainIngredientsData, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, mainIngredientsData[dragIndex]],
          ],
        }),
      });
    },
    [dispatch, mainIngredientsData],
  );

  return (
    <section className={styles.section} ref={dropTarget}>
      <div className={styles.ingredientContainer}>
        {Object.keys(bunIngredientsData).length ? (
          <div className={styles.top}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bunIngredientsData.name} (верх)`}
              price={bunIngredientsData.price}
              thumbnail={bunIngredientsData.image}
            />
          </div>
        ) : (
          <p className={`${styles.bunTopDefault} text text_type_main-default`}>
            Место для булочки
          </p>
        )}

        {mainIngredientsData.length > 0 ? (
          <ul className={styles.main}>
            {mainIngredientsData.map(
              (ingredient: IIngredient, index: number) => (
                <BurgerConstructorIngredient
                  index={index}
                  key={ingredient.dropId}
                  ingredient={ingredient}
                  handleDeleteIngredient={handleDeleteIngredient}
                  moveCard={moveCard}
                />
              ),
            )}
          </ul>
        ) : (
          <p className={`${styles.mainDefault} text text_type_main-default`}>
            Место для ингредиентов
          </p>
        )}

        {Object.keys(bunIngredientsData).length ? (
          <div className={styles.bottom}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bunIngredientsData.name} (низ)`}
              price={bunIngredientsData.price}
              thumbnail={bunIngredientsData.image}
            />
          </div>
        ) : (
          <p
            className={`${styles.bunBottomDefault} text text_type_main-default`}>
            Место для булочки
          </p>
        )}
      </div>

      <div className={styles.total}>
        <div className={styles.totalContainer}>
          <span className="text text_type_main-large">
            {totalPriceState.total}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          extraClass={`${
            Object.keys(bunIngredientsData).length ? ' ' : styles.disabled
          }`}
          htmlType="button"
          type="primary"
          size="medium"
          onClick={onClickOrderSubmit}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
