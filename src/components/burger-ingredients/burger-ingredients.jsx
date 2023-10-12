import React from 'react';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { tabs } from '../../utils/constants';
import { useSelector } from 'react-redux';

import IngredientCardList from '../ingredient-card-list/ingredient-card-list';

const BurgerIngredients = ({ onIngredientOpen }) => {
  const [current, setCurrent] = React.useState('bun');
  const bunRef = React.useRef();
  const sauceRef = React.useRef();
  const mainRef = React.useRef();

  const { ingredients } = useSelector((store) => store.ingredients);

  const bunArray = ingredients.filter(
    (ingredient) => ingredient.type === tabs.BUN,
  );

  const sauceArray = ingredients.filter(
    (ingredient) => ingredient.type === tabs.SAUCE,
  );

  const mainIngredientsArray = ingredients.filter(
    (ingredient) => ingredient.type === tabs.MAIN,
  );

  //при клике на таб
  const onTabClick = (value) => {
    setCurrent(value);
    if (value === tabs.BUN) {
      bunRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (value === tabs.SAUCE) {
      sauceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /*---------- Тут логика с Intersectional Observer ----------*/
  //1 - entries — список объектов с информацией о пересечении.
  //Для каждого наблюдаемого элемента создаётся один объект IntersectionObserverEntry.
  //2 - observer — ссылка на экземпляр наблюдателя для вызова методов прослушивания

  // const callback = (entries, observer) => {
  //   entries.foreach((title) => {
  //     if (title.isIntersecting) {
  //       console.log('Элемент пересёк границу области и всё ещё соприкасается с ней!')
  //     }
  //   })
  // };

  return (
    <section className={styles.section}>
      <h1 className={`${styles.title} text text_type_main-large`}>
        Соберите бургер
      </h1>

      <div className={styles.tabContainer}>
        <Tab
          value={tabs.BUN}
          active={current === tabs.BUN}
          onClick={onTabClick}>
          Булки
        </Tab>
        <Tab
          value={tabs.SAUCE}
          active={current === tabs.SAUCE}
          onClick={onTabClick}>
          Соусы
        </Tab>
        <Tab
          value={tabs.MAIN}
          active={current === tabs.MAIN}
          onClick={onTabClick}>
          Начинки
        </Tab>
      </div>

      <div className={styles.ingredientsContainer}>
        <IngredientCardList
          title="Булки"
          ref={bunRef}
          //id={tabs.BUN}
          ingredientsArray={bunArray}
          onIngredientOpen={onIngredientOpen}
        />
        <IngredientCardList
          title="Соусы"
          ref={sauceRef}
          //id={tabs.SAUCE}
          ingredientsArray={sauceArray}
          onIngredientOpen={onIngredientOpen}
        />
        <IngredientCardList
          title="Начинки"
          ref={mainRef}
          //id={tabs.MAIN}
          ingredientsArray={mainIngredientsArray}
          onIngredientOpen={onIngredientOpen}
        />
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  onIngredientOpen: PropTypes.func.isRequired,
};

export default BurgerIngredients;
