import { createRoot } from "react-dom/client";
import App from "./App";
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));
// const MyHeader = <h1>Welcome</h1>;

root.render(
    <div>
        <App />
    </div>
  
    // MyHeader
);