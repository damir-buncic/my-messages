import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app.tsx";
import DataProvider from "./providers/data-provider.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider>
      <div style={{ width: "300px", height: "200px" }}>
        <App />
      </div>
    </DataProvider>
  </StrictMode>
);
