import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
	let { query, setQuery } = props;

	const inputHandler = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div className="stick">
			<input className="input" placeholder="Search here" value={query} onChange={inputHandler}></input>
		</div>
	);
};

export default SearchBox;
