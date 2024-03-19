import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navigation from "./layouts/Navbar/Navbar.js";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="light text-foreground bg-background">
        <Navigation />
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
