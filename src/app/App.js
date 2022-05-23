import React from "react";
import { Header } from "./components/header/Header";
import { Explanation } from "./components/Explanation/Explanation";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { InfoCard } from "./components/InfoCard/InfoCard";

const cards = () => {
	let workArray = [];
	for (let i = 0; i <= 29; i++) {
		workArray.push(<InfoCard key={i} number={i} />);
	}
	return workArray;
};

function App() {
	const allCards = cards();
	const initialCards = allCards.slice(0, 15);
	const restofCards = allCards.slice(15, 31);

	console.log(initialCards);

	const [shownArray, setShownArray] = React.useState(initialCards);
	return (
		<>
			<Header />
			<Explanation />
			<MainContainer>{shownArray}</MainContainer>
			<button
				style={{
					width: "200px",
					height: "20px",
					marginLeft: "500px",
					marginBottom: "20px",
				}}
				onClick={() => setShownArray(initialCards)}
			></button>
			<button
				style={{
					width: "200px",
					height: "20px",
					marginLeft: "500px",
					marginBottom: "20px",
				}}
				onClick={() => setShownArray(restofCards)}
			></button>
		</>
	);
}

export default App;
