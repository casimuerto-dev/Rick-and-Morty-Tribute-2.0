import React from "react";
import "./InfoCardStyles.css";
const InfoCard = (props) => {
	return (
		<div className="InfoCard appear">
			<div className="cardHeader">
				<p className="cardNumber">{props.number}</p>
				<img src={props.info.image} />
			</div>
			<div className="writtenInfo">
				<p>Name: {props.info.name}</p>
				<p>Status: {props.info.status}</p>
				<p>Species: {props.info.species}</p>
				<p>Type: {props.info.type}</p>
				<p>Gender: {props.info.gender}</p>
			</div>
		</div>
	);
};

export { InfoCard };
