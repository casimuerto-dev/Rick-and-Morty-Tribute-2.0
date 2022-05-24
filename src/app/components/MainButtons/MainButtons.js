import React from "react";
import "./MainButtonsStyles.css";

function MainButtons(props) {
	return (
		<div id="MainButtons">
			<button className="mainButton" onClick={props.back}>
				Back
			</button>
			<p id="pageCounter">
				{!props.loading && `${props.page} of ${props.pages}`}
				{props.loading && "Loading..."}
			</p>
			<button className="mainButton" onClick={props.next}>
				Next
			</button>
		</div>
	);
}

export { MainButtons };
