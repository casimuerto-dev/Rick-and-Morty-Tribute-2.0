import React from "react";
import { Header } from "./components/header/Header";
import { Explanation } from "./components/Explanation/Explanation";
import { MainContainer } from "./components/MainContainer/MainContainer";

function App() {
	return (
		<>
			<Header />
			<Explanation />
			<MainContainer />
		</>
	);
}

export default App;
