import React from 'react';
import styles from './burger-constructor-ingredient.module.css';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { IIngredient } from '../../types/ingredientsTypes';

interface IBurgerConstructorIngredient {
  ingredient: IIngredient;
  index: number;
  handleDeleteIngredient: (key: string) => void;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const BurgerConstructorIngredient: React.FC<IBurgerConstructorIngredient> = ({
  ingredient,
  handleDeleteIngredient,
  index,
  moveCard,
}) => {
  /*------------------ SORT ----------------------*/
  const { _id } = ingredient;
  const ingredientItemRef = React.useRef<HTMLLIElement>(null);
  console.log(ingredient);

  const [{ handlerId }, drop] = useDrop({
    accept: 'constructor-item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor) {
      if (!ingredientItemRef.current) {
        return;
      }

      const dragIndex = item.index;

      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect =
        ingredientItemRef.current?.getBoundingClientRect() as DOMRect;
      const hoverMiddleY: number =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (clientOffset !== null) {
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'constructor-item',
    item: () => {
      return { _id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ingredientItemRef));

  return (
    <li
      className={styles.item}
      ref={ingredientItemRef}
      data-handler-id={handlerId}
      style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => handleDeleteIngredient(ingredient.dropId)}
      />
    </li>
  );
};

export default BurgerConstructorIngredient;
