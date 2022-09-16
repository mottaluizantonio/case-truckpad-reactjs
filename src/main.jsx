import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import Providers from "./providers";
import "antd/dist/antd.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </Providers>
  </React.StrictMode>
);
