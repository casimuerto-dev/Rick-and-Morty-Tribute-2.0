import React from "react";
import "./MainContainerStyles.css";
function MainContainer({ children, loading, clicked }) {
	if (loading) {
		return (
			<div className="loadingContainer">
				<p>loading...</p>
			</div>
		);
	} else {
		return (
			<div className={!clicked && "unZoomed"} id="MainContainer">
				{children}
			</div>
		);
	}
}

export { MainContainer };
