import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare),
);

sagaMiddleWare.run(rootSaga);


ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
