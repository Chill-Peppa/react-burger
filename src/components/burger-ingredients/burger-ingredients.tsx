import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { tabs } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { IIngredient } from '../../types/ingredientsTypes';

import IngredientCardList from '../ingredient-card-list/ingredient-card-list';

const BurgerIngredients: React.FC = () => {
  const { ingredients } = useSelector((store: any) => store.ingredients);

  const [current, setCurrent] = React.useState<string>('bun');
  const containerRef = React.useRef<HTMLDivElement>(null);

  const bunArray = ingredients.filter(
    (ingredient: IIngredient) => ingredient.type === tabs.BUN,
  );

  const sauceArray = ingredients.filter(
    (ingredient: IIngredient) => ingredient.type === tabs.SAUCE,
  );

  const mainIngredientsArray = ingredients.filter(
    (ingredient: IIngredient) => ingredient.type === tabs.MAIN,
  );

  //при клике на таб
  const onTabClick = (value: string) => {
    setCurrent(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

export default BurgerIngredients;
