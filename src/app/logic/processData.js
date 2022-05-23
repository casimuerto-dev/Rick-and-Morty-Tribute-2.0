import { getData } from "./getData";

async function generateData() {
	const finalArray = [];
	const result = await getData(
		"https://rickandmortyapi.com/api/character/?name=rick"
	);
	console.log("final Result: ", result);
	const numberOfPages = Math.ceil(result.length / 15);
	console.log("numberOfPages: ", numberOfPages);
	for (let i = 1; i <= numberOfPages; i++) {
		finalArray.push(result.splice(0, 15));
	}
	return finalArray;
}

export { generateData };
