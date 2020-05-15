import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import Footer from "./components/footer-container/footer";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="bootstrap">
          <App />
        </div>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app")

  );
}

function main2() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <Footer />
      </BrowserRouter>
    </Provider>,
    document.querySelector('.footer')

  );
}

document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded", main2);

