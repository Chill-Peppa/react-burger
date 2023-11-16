import React from 'react';
import styles from './ingredient-page.module.css';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';

function IngredientPage() {
  return (
    <main className={styles.container}>
      <IngredientDetails />
    </main>
  );
}

export default IngredientPage;
