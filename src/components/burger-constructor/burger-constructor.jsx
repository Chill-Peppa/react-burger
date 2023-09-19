import React from 'react';
import constructorStyles from './burger-constructor.module.css';

import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { burgerData } from '../../utils/data';

const BurgerConstructor = () => {
  return (
    <section className={constructorStyles.section}>
      <div className={constructorStyles.ingredientContainer}>
        <div className={constructorStyles.top}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${burgerData[0].name} (верх)`}
            price={burgerData[0].price}
            thumbnail={burgerData[0].image}
          />
        </div>

        {/* тут надо начинку вставить */}
        <ul className={constructorStyles.main}>
          {burgerData.map((ingredient) => (
            <li key={ingredient._id} className={constructorStyles.item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            </li>
          ))}
        </ul>

        <div className={constructorStyles.bottom}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${burgerData[burgerData.length - 1].name} (низ)`}
            price={burgerData[burgerData.length - 1].price}
            thumbnail={burgerData[burgerData.length - 1].image}
          />
        </div>
      </div>

      <div className={constructorStyles.totalContainer}></div>
    </section>
  );
};

export default BurgerConstructor;
