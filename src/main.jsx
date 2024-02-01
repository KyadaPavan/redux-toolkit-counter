import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import counterStore from "./store/index.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
