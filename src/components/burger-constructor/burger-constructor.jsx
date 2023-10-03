import React from 'react';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
// import { tabs } from '../../utils/constants';

import { IngredientsContext } from '../../services/ingredientsContext';

const BurgerConstructor = ({ handleGetOrderNumber }) => {
  const ingredients = React.useContext(IngredientsContext);

  const totalPrice = ingredients.reduce((prevItem, item) => {
    return prevItem + item.price;
  }, 0);

  const onClickOrderSubmit = () => {
    const AddedIngredientsIds = ingredients.map((ingredient) => ingredient._id);
    console.log(AddedIngredientsIds);
    handleGetOrderNumber(AddedIngredientsIds);
  };

  return (
    <section className={styles.section}>
      <div className={styles.ingredientContainer}>
        <div className={styles.top}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredients[0].name} (верх)`}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image}
          />
        </div>

        <ul className={styles.main}>
          {ingredients.map((ingredient) => (
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

        <div className={styles.bottom}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredients[0].name} (низ)`}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image}
          />
        </div>
      </div>

      <div className={styles.total}>
        <div className={styles.totalContainer}>
          <span className="text text_type_main-large">{totalPrice}</span>
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
//   onOrderOpen: PropTypes.func.isRequired,
// };

export default BurgerConstructor;
