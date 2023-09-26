import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

function App() {
  const [isOpenIngredientModal, setIsOpenIngredientModal] =
    React.useState(false);
  const [isOpenOrderModal, setIsOpenOrderModal] = React.useState(false);

  //Открытие IngredientDetails модалки
  const onOpenIngredientModal = () => {
    setIsOpenIngredientModal(true);
  };

  //Открытие OrderDetails модалки
  const onOpenOrderModal = () => {
    setIsOpenOrderModal(true);
  };

  return (
    <div className={styles.page}>
      <AppHeader />
      <Main
        onOrderOpen={onOpenOrderModal}
        onIngredientOpen={onOpenIngredientModal}
      />

      {isOpenOrderModal && <OrderDetails />}
      {isOpenIngredientModal && <IngredientDetails />}
    </div>
  );
}

export default App;
