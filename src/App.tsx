import React from 'react';
import Test from 'components';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hi, KyuSeok</div>
        <Test />
      </header>
    </div>
  );
};

export default App;
