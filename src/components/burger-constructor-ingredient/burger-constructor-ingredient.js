import React from 'react';
import styles from './burger-constructor-ingredient.module.css';
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { ingredientsDataType } from '../../utils/constants';

const BurgerConstructorIngredient = ({
  ingredient,
  handleDeleteIngredient,
  index,
  moveCard,
}) => {
  /*------------------ SORT ----------------------*/
  const { _id } = ingredient;
  const ingredientItemRef = React.useRef(null);
  console.log(ingredient);

  const [{ handlerId }, drop] = useDrop({
    accept: 'constructor-item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ingredientItemRef.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect =
        ingredientItemRef.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
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

BurgerConstructorIngredient.propTypes = {
  handleDeleteIngredient: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  ingredient: ingredientsDataType.isRequired,
};
