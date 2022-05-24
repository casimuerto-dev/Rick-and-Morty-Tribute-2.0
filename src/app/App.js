import React from "react";
import { Header } from "./components/header/Header";
import { Explanation } from "./components/Explanation/Explanation";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { InfoCard } from "./components/InfoCard/InfoCard";
import { generateData } from "./logic/generateData";
import { MainButtons } from "./components/MainButtons/MainButtons";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
	const [allCards, setAllCards] = React.useState([]);
	const [shownArray, setShownArray] = React.useState(0);
	const [loading, setLoading] = React.useState(true);
	const [empty, setEmpty] = React.useState(true);
	const [search, setSearch] = React.useState({
		name: "rick",
		status: "dead",
		species: "robot",
		type: "decoy",
		gender: "male",
	});

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
			const ultimateResponse = await generateData(search);
			console.log("ULTIMATE RESPONSE: ", ultimateResponse);
			if (ultimateResponse.length !== 0) {
				console.log("arriba");
				setAllCards(ultimateResponse);
				setEmpty(false);
			} else if (ultimateResponse.length === 0) {
				console.log("abajo");
				setAllCards([]);
				setEmpty(true);
			}
			setLoading(false);
		};
		setter();
	}, [search]);

	console.log("ALL CARDS: ", allCards);
	console.log("EMPTY: ", empty);
	return (
		<>
			<Header />
			<Explanation />
			<SearchBar search={search} setSearch={setSearch} setLoading={setLoading} />
			<MainContainer loading={loading}>
				{!loading &&
					!empty &&
					allCards[shownArray].map((element, index) => (
						<InfoCard
							key={shownArray * 15 + (index + 1)}
							number={shownArray * 15 + (index + 1)}
							info={element}
						/>
					))}
				{!loading && empty && <p>No matching results.</p>}
			</MainContainer>

			<MainButtons
				loading={loading}
				back={() => {
					setLoading(true);
					changePage("back");
				}}
				next={() => {
					setLoading(true);
					changePage("next");
				}}
				page={shownArray + 1}
				pages={allCards.length}
			/>
		</>
	);
}

export default App;
