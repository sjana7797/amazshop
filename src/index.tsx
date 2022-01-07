import React from "react";
import ReactDOM from "react-dom";

//Redux
import rootReducer from "./redux/reducers";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";

import thunk from "redux-thunk";
import { StateProvider } from "./context/StateProvider";

import { initialState, reducer } from "./context/reducer";

//creating store
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
