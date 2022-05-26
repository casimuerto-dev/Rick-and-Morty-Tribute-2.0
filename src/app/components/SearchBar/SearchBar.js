import React from "react";
import "./SearchBarStyles.css";

function SearchBar(props) {
	const [name, setName] = React.useState("rick");
	const [status, setStatus] = React.useState("alive");
	const [species, setSpecies] = React.useState("human");
	const [type, setType] = React.useState("");
	const [gender, setGender] = React.useState("male");

	function handleClear() {
		setName("");
		setStatus("");
		setSpecies("");
		setType("");
		setGender("");
	}

	function nameChange(e) {
		setName(() => e.target.value);
	}
	function statusChange(e) {
		setStatus(() => e.target.value);
	}

	function speciesChange(e) {
		setSpecies(() => e.target.value);
	}

	function typeChange(e) {
		setType(() => e.target.value);
	}

	function genderChange(e) {
		setGender(() => e.target.value);
	}

	return (
		<div id="SearchBar">
			<label>
				<p>Name: </p>
				<input className="searchInput" onChange={nameChange} value={name}></input>
			</label>
			<label>
				<p>Status: </p>
				<input
					className="searchInput"
					onChange={statusChange}
					value={status}
				></input>
			</label>
			<label>
				<p>Species: </p>
				<input
					className="searchInput"
					onChange={speciesChange}
					value={species}
				></input>
			</label>
			<label>
				<p>Type: </p>
				<input className="searchInput" onChange={typeChange} value={type}></input>
			</label>
			<label>
				<p>Gender: </p>
				<input
					className="searchInput"
					onChange={genderChange}
					value={gender}
				></input>
			</label>
			<button className="searchButton" onClick={() => handleClear()}>
				Clear
			</button>
			<button
				className="searchButton"
				onClick={() => {
					props.setSearch({ name, status, species, type, gender });
					props.setLoading(true);
				}}
			>
				Go
			</button>
		</div>
	);
}

export { SearchBar };
