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
					<p>
						<span className="propertyName">Status:</span>{" "}
						{props.info.status ? props.info.status : "-"}
					</p>
					<p>
						<span className="propertyName">Species:</span>{" "}
						{props.info.species ? props.info.species : "-"}
					</p>
					<p>
						<span className="propertyName">Type:</span>{" "}
						{props.info.type ? props.info.type : "-"}
					</p>
					<p>
						<span className="propertyName">Gender:</span>{" "}
						{props.info.gender ? props.info.gender : "-"}
					</p>
				</div>
			)}
		</div>
	);
};

export { InfoCard };
