import "./scss/index.scss";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { ThemeProvider } from "@mui/material";
import theme from "./helpers/theme";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
