import React from 'react';
import styles from './burger-constructor.module.css';
//import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  ADD_BUN_INGREDIENT,
  ADD_MAIN_INGREDIENT,
} from '../../services/actions/burgerConstructor';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { tabs } from '../../utils/constants';
import { getOrderNumber } from '../../services/actions/order';

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
  const [totalPriceState, totalPriceDispatch] = React.useReducer(
    reducer,
    totalPriceInitialVal,
  );

  const ingredients = useSelector((store) => store.ingredients.ingredients);

  const bunIngredients = ingredients.filter(
    (ingredient) => ingredient.type === tabs.BUN,
  );

  const mainIngredients = ingredients.filter(
    (ingredient) => ingredient.type !== tabs.BUN,
  );

  const totalPrice =
    mainIngredients.reduce((prevItem, item) => {
      return prevItem + item.price;
    }, 0) +
    bunIngredients[0].price * 2;

  React.useEffect(() => {
    dispatch({
      type: ADD_BUN_INGREDIENT,
      bun: bunIngredients[0],
    });
    dispatch({
      type: ADD_MAIN_INGREDIENT,
      main: mainIngredients,
    });
  }, [dispatch]);

  const { mainIngredientsData, bunIngredientsData } = useSelector(
    (store) => store.addedIngredients,
  );

  console.log('v komponente burger-constructor:', ingredients);

  React.useEffect(() => {
    totalPriceDispatch({ type: 'increment', payload: totalPrice });
  }, [totalPrice]);

  const onClickOrderSubmit = () => {
    const AddedIngredientsIds = ingredients.map((ingredient) => ingredient._id);
    onOrderOpen();
    //console.log(AddedIngredientsIds);
    dispatch(getOrderNumber(AddedIngredientsIds));
    //handleGetOrderNumber(AddedIngredientsIds);
  };

  return (
    <section className={styles.section}>
      <div className={styles.ingredientContainer}>
        <div className={styles.top}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bunIngredients[0].name} (верх)`}
            price={bunIngredients[0].price}
            thumbnail={bunIngredients[0].image}
          />
        </div>

        {mainIngredientsData.length > 0 && (
          <ul className={styles.main}>
            {mainIngredientsData.map((ingredient) => (
              <li key={ingredient._id} className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            ))}
          </ul>
        )}

        <div className={styles.bottom}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bunIngredients[0].name} (низ)`}
            price={bunIngredients[0].price}
            thumbnail={bunIngredients[0].image}
          />
        </div>
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

// BurgerConstructor.propTypes = {
//   handleGetOrderNumber: PropTypes.func.isRequired,
// };

export default BurgerConstructor;
