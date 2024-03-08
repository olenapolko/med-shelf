import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

import { persistor } from "./store";
import { store } from "./store";
import App from "./App";
import "styles/index.scss";
import { ThreeDots } from "react-loader-spinner";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="loader">
            <ThreeDots
              visible={true}
              height="120"
              width="120"
              color="#00673a"
              ariaLabel="loading-indicator"
            />
          </div>
        }
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
