import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./globalStyles.css";
function App() {
	return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
