import React from "react";
import BeerCard from "../../components/BeerCard/BeerCard";
import "./Main.scss";

const Main = ({ beerList, setPage, page }) => {
	return (
		<div className="containercontainer">
			<div className="cardContainer">
				{beerList.length === 0
					? "Nothing to display..."
					: beerList.map((beer, index) => {
							return <BeerCard key={index} {...beer} />;
					  })}
			</div>
			<button
				onClick={() => {
					setPage(page - 1);
				}}
			>
				Previous Page
			</button>
			<button
				onClick={() => {
					setPage(page + 1);
				}}
			>
				Next Page
			</button>
		</div>
	);
};

export default Main;
