const getData = async (URL) => {
	const response = await fetch(URL)
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
	let workArray = [...response.results];

	if (response.info.next !== null) {
		return [...workArray, ...(await getData(response.info.next))];
	} else {
		console.log("else");
		return workArray;
	}
};

export { getData };
