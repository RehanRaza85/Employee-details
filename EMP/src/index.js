import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import reducer1 from "./reducer1";
import reducer_add from "./reducer_add";
import reducer_dashboard from "./reducer_dashboard";

const logger = () => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] present state ", store.getState());
      console.log("[Middleware Dispatching] ", action);
      const result = next(action);
      console.log("[Middleware] next state ", store.getState());
      return result;
    };
  };
};

const rootReducer = combineReducers({
  redapp: reducer1,
  redadd: reducer_add,
  reddas: reducer_dashboard,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
