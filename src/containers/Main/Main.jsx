import React from "react";
import BeerCard from "../../components/BeerCard/BeerCard";
import "./Main.scss";

const Main = ({ beerList }) => {
	return (
		<div className="cardContainer">
			{beerList.length === 0
				? "Nothing to display..."
				: beerList.map((beer, index) => {
						return <BeerCard key={index} {...beer} />;
				  })}
		</div>
	);
};

export default Main;
