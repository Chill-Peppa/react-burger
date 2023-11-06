import React from 'react';
import styles from './burger-ingredients.module.css';
//import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { tabs } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import IngredientCardList from '../ingredient-card-list/ingredient-card-list';

const BurgerIngredients = () => {
  const { ingredients } = useSelector((store) => store.ingredients);

  const [current, setCurrent] = React.useState('bun');
  const containerRef = React.useRef();

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
    document.getElementById(value).scrollIntoView({ behavior: 'smooth' });
  };

  /*---------- Тут логика с Intersectional Observer ----------*/
  const [tabBunRef, inViewBun] = useInView({
    root: containerRef.current,
    threshold: 0,
  });

  const [tabSauceRef, inViewSauce] = useInView({
    root: containerRef.current,
    rootMargin: '0px 0px -90% 0px',
  });

  const [tabMainRef, inViewMain] = useInView({
    root: containerRef.current,
    rootMargin: '0px 0px -90% 0px',
  });

  React.useEffect(() => {
    if (inViewBun) {
      setCurrent(tabs.BUN);
    }
    if (inViewSauce && !inViewBun) {
      setCurrent(tabs.SAUCE);
    }
    if (inViewMain) {
      setCurrent(tabs.MAIN);
    }
  }, [inViewBun, inViewSauce, inViewMain]);

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

      <div className={styles.ingredientsContainer} ref={containerRef}>
        <IngredientCardList
          title="Булки"
          ref={tabBunRef}
          id={tabs.BUN}
          ingredientsArray={bunArray}
        />
        <IngredientCardList
          title="Соусы"
          ref={tabSauceRef}
          id={tabs.SAUCE}
          ingredientsArray={sauceArray}
        />
        <IngredientCardList
          title="Начинки"
          ref={tabMainRef}
          id={tabs.MAIN}
          ingredientsArray={mainIngredientsArray}
        />
      </div>
    </section>
  );
};

// BurgerIngredients.propTypes = {
//   onIngredientOpen: PropTypes.func.isRequired,
// };

export default BurgerIngredients;
