import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-ruter-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <Suspense fallback={<div>Loading... </div>}>
        <App />
      </Suspense>
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById("root")
);
