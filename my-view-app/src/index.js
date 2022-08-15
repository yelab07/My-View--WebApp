import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

// import reportWebVitals from "./reportWebVitals";
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//Redux applications have a single store. We have to pass the Root Reducer to our createStore()
//..function in order for the store to know what pieces of state it should have.
//..The point of creating a store is to allow components to be able to access it without having to pass the data down through multiple components.

//The Provider component (which comes from the react-redux package) makes it possible for all components to access the store via the connect() function.
