import React from "react";
import "./BeerCard.scss";

const BeerCard = (props) => {
	let { name, tagline, description, image_url } = props;
	return (
		<div className="card" style={{ backgroundImage: "url(" + image_url + ")" }}>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				{/* <h3>{tagline}</h3> */}
				<p>{description}</p>
			</div>
		</div>
	);
};

export default BeerCard;
