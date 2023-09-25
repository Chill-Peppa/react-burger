import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import Modal from '../modal/modal';

function App() {
  return (
    <div className={styles.page}>
      <AppHeader />
      <Main />
      <Modal />
    </div>
  );
}

export default App;
