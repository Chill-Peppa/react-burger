import React from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';

function App() {
  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
