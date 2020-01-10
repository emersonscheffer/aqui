import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import "./Reset.css";
import "./App.css";

import "./css/AnuncioPopUp.css";

import Main from "./screens/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Main />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
