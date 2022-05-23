import React from "react";
import "./InfoCardStyles.css";
const InfoCard = (props) => {
	return <div className="InfoCard appear">{props.number}</div>;
};

export { InfoCard };
