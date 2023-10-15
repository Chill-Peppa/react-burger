import React from 'react';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import update from 'immutability-helper';

import { tabs } from '../../utils/constants';
import {
  ADD_BUN_INGREDIENT,
  ADD_MAIN_INGREDIENT,
  DELETE_MAIN_INGREDIENT,
  SORT_INGREDIENTS,
} from '../../services/actions/burgerConstructor';

import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { getOrderNumber } from '../../services/actions/order';
import BurgerConstructorIngredient from '../burger-constructor-ingredient/burger-constructor-ingredient';

const totalPriceInitialVal = { total: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { total: action.payload };
    default:
      return { total: 0 };
  }
};

const BurgerConstructor = ({ onOrderOpen }) => {
  const dispatch = useDispatch();

  const ingredients = useSelector((store) => store.ingredients.ingredients);

  const { mainIngredientsData, bunIngredientsData } = useSelector(
    (store) => store.addedIngredients,
  );

  const [totalPriceState, totalPriceDispatch] = React.useReducer(
    reducer,
    totalPriceInitialVal,
  );

  const totalPrice =
    mainIngredientsData.reduce((prevItem, item) => {
      return prevItem + item.price;
    }, 0) +
      bunIngredientsData.price * 2 || 0;

  React.useEffect(() => {
    totalPriceDispatch({ type: 'increment', payload: totalPrice });
  }, [totalPrice]);

  const onClickOrderSubmit = () => {
    const AddedIngredientsIds = ingredients.map((ingredient) => ingredient._id);
    onOrderOpen();
    dispatch(getOrderNumber(AddedIngredientsIds));
  };

  /*------------ DND ------------*/
  const onDropHandler = (item) => {
    if (item.type === tabs.BUN) {
      dispatch({
        type: ADD_BUN_INGREDIENT,
        bun: item,
      });
    } else if (item.type !== tabs.BUN) {
      dispatch({
        type: ADD_MAIN_INGREDIENT,
        main: { ...item, dropId: uuidv4() },
      });
    }
  };

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDropHandler(item);
    },
  });

  const handleDeleteIngredient = (key) => {
    dispatch({ type: DELETE_MAIN_INGREDIENT, id: key });
  };

  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
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
            {mainIngredientsData.map((ingredient, index) => (
              <BurgerConstructorIngredient
                index={index}
                key={ingredient.dropId}
                ingredient={ingredient}
                handleDeleteIngredient={handleDeleteIngredient}
                moveCard={moveCard}
              />
            ))}
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

BurgerConstructor.propTypes = {
  onOrderOpen: PropTypes.func.isRequired,
};

export default BurgerConstructor;
