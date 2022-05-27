import React from "react";
import "./InfoCardStyles.css";
const InfoCard = (props) => {
	return (
		<div
			className={`${!props.clicked && "InfoCard"} appear ${
				props.clicked && "clicked"
			}`}
			onClick={() =>
				props.handleSelection ? props.handleSelection(props.number) : null
			}
		>
			<div className="cardHeader">
				<p className="cardNumber">{props.number}</p>
				<p>{props.info.name}</p>
			</div>

			<img src={props.info.image} />
			{props.clicked && (
				<div className="writtenInfo">
					<div>
						<p className="propertyName">Status:</p>{" "}
						{props.info.status ? props.info.status : "-"}
					</div>
					<div>
						<p className="propertyName">Species:</p>{" "}
						{props.info.species ? props.info.species : "-"}
					</div>
					<div>
						<p className="propertyName">Type:</p>{" "}
						{props.info.type ? props.info.type : "-"}
					</div>
					<div>
						<p className="propertyName">Gender:</p>{" "}
						{props.info.gender ? props.info.gender : "-"}
					</div>
				</div>
			)}
		</div>
	);
};

export { InfoCard };
