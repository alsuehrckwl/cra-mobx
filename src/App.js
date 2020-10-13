import React, { useState } from 'react';
import { Provider } from 'mobx-react';
import { Router, RouterStore } from 'react-router-mobx';
import { BrowserRouter } from 'react-router-dom';
import RootStore from 'stores';
import Routes from './routes';
import './style/index.scss';

const rootStore = new RootStore();
const routerStore = new RouterStore();

function App() {
  const [store, setStore] = useState(rootStore);

  return (
    <Provider {...store}>
      <Router component={BrowserRouter} routerStore={routerStore}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
