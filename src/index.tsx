import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/style/index.scss';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "app/providers/StoreProvider/config/store"

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);

