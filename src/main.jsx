import { createRoot } from "react-dom/client";
import App from "./App";
import AppThemeProvider from "./theme/AppThemeProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
);
