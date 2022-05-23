import React from "react";
import { Header } from "./components/header/Header";
import { Explanation } from "./components/Explanation/Explanation";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { InfoCard } from "./components/InfoCard/InfoCard";

import { generateData } from "./logic/processData";

function App() {
	const [allCards, setAllCards] = React.useState([]);
	const [shownArray, setShownArray] = React.useState(0);
	const [loading, setLoading] = React.useState(true);

	const changePage = (instruction) => {
		const pages = allCards.length - 1;

		if (instruction === "next") {
			console.log("next");
			shownArray < pages ? setShownArray((pag) => pag + 1) : "";
		}

		if (instruction === "back") {
			console.log("back");
			shownArray > 0 ? setShownArray((pag) => pag - 1) : "";
		}
		setLoading(false);
	};

	React.useEffect(() => {
		console.log("useEffect");
		const setter = async () => {
			setAllCards(await generateData());
			setLoading(false);
		};
		setter();
	}, []);

	console.log("ALL CARDS: ", allCards);

	return (
		<>
			<Header />
			<Explanation />
			<MainContainer>
				{!loading &&
					allCards[shownArray].map((element, index) => (
						<InfoCard
							key={shownArray * 15 + (index + 1)}
							number={shownArray * 15 + (index + 1)}
							info={element}
						/>
					))}
			</MainContainer>
			<button
				style={{
					width: "200px",
					height: "20px",
					marginLeft: "500px",
					marginBottom: "20px",
				}}
				onClick={() => {
					setLoading(true);
					changePage("back");
				}}
			>
				back
			</button>
			<button
				style={{
					width: "200px",
					height: "20px",
					marginLeft: "500px",
					marginBottom: "20px",
				}}
				onClick={() => {
					setLoading(true);
					changePage("next");
				}}
			>
				next
			</button>
		</>
	);
}

export default App;
