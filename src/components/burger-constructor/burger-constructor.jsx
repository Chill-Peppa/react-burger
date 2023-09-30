import React from 'react';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import { ingredientsDataType } from '../../utils/constants';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({ onOrderOpen, ingredientsData }) => {
  const totalPrice = ingredientsData.reduce((prevItem, item) => {
    return prevItem + item.price;
  }, 0);

  return (
    <section className={styles.section}>
      <div className={styles.ingredientContainer}>
        <div className={styles.top}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredientsData[0].name} (верх)`}
            price={ingredientsData[0].price}
            thumbnail={ingredientsData[0].image}
          />
        </div>

        <ul className={styles.main}>
          {ingredientsData.map((ingredient) => (
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
            text={`${ingredientsData[7].name} (низ)`}
            price={ingredientsData[7].price}
            thumbnail={ingredientsData[7].image}
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
          onClick={onOrderOpen}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  onOrderOpen: PropTypes.func.isRequired,
  ingredientsData: PropTypes.arrayOf(ingredientsDataType.isRequired).isRequired,
};

export default BurgerConstructor;
