import React from "react";
import { render } from "react-dom";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import App from "./App";
import { spamWordsMiddleware } from "./redux/middleware";
import reportWebVitals from "./reportWebVitals";
import { sagaWatcher } from "./redux/sagas";

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(applyMiddleware(
    thunk,
    spamWordsMiddleware,
    saga
  ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(
  app,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
