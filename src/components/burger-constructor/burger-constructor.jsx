import React from 'react';
import styles from './burger-constructor.module.css';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
// import { burgerData } from '../../utils/data';

const BurgerConstructor = ({ onOrderOpen, ingredientsData }) => {
  console.log(ingredientsData);

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
            text={`${ingredientsData[ingredientsData.length - 1].name} (низ)`}
            price={ingredientsData[ingredientsData.length - 1].price}
            thumbnail={ingredientsData[ingredientsData.length - 1].image}
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

export default BurgerConstructor;
