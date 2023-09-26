import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
// import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

function App() {
  return (
    <div className={styles.page}>
      <AppHeader />
      <Main />
      {/* <OrderDetails /> */}
      <IngredientDetails />
    </div>
  );
}

export default App;
