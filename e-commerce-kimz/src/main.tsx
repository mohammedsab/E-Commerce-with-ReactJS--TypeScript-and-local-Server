import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "@app/store";
import AppRouter from "@routes/AppRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
