import React from "react";

const SearchBox = (props) => {
	let { query, setQuery } = props;

	const inputHandler = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div>
			<input placeholder="Search here" value={query} onChange={inputHandler}></input>
		</div>
	);
};

export default SearchBox;
