import React from 'react';
import styles from './burger-constructor.module.css';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { burgerData } from '../../utils/data';

const BurgerConstructor = () => {
  const totalPrice = burgerData.reduce((prevItem, item) => {
    return prevItem + item.price;
  }, 0);

  return (
    <section className={styles.section}>
      <div className={styles.ingredientContainer}>
        <div className={styles.top}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${burgerData[0].name} (верх)`}
            price={burgerData[0].price}
            thumbnail={burgerData[0].image}
          />
        </div>

        <ul className={styles.main}>
          {burgerData.map((ingredient) => (
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
            text={`${burgerData[burgerData.length - 1].name} (низ)`}
            price={burgerData[burgerData.length - 1].price}
            thumbnail={burgerData[burgerData.length - 1].image}
          />
        </div>
      </div>

      <div className={styles.total}>
        <div className={styles.totalContainer}>
          <span className="text text_type_main-large">{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
