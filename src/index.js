import React from "react";
import { createRoot } from "react-dom/client";
import "./globalStyles.css";
import App from "./app/App.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
