import React from "react";
import "./MainContainerStyles.css";
function MainContainer({ children, loading }) {
	if (loading) {
		return (
			<div className="loadingContainer">
				<p>loading...</p>
			</div>
		);
	} else {
		return <div id="MainContainer">{children}</div>;
	}
}

export { MainContainer };
