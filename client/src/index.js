import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/ReduxStore";
import { ThemeProvider } from "./themeProvider";
import App from "./App";

import { persistStore } from "redux-persist";
const persistor = persistStore(store);

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<App />} />
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
  </Provider>
);
