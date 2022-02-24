import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from "redux";
// import registerServiceWorker from "./registerServiceWorker";
import chat from './redux/reducers';

import App from './App';

const store = createStore(chat, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()



