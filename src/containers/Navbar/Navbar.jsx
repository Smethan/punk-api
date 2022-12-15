import React, { useState, useEffect } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "./../../components/FiltersList/FiltersList";

const Navbar = ({ setBeerList, beerList }) => {
	const [checked, setChecked] = useState(false);
	const [checked2, setChecked2] = useState(false);
	const [query, setQuery] = useState("");

	useEffect(() => {
		let filteredList = JSON.parse(JSON.stringify(beerList));
		if (checked) {
			filteredList = filteredList.filter((item) => {
				return item.abv > 6;
			});
		}
		if (checked2) {
			filteredList = filteredList.filter((item) => {
				return item.ph < 4;
			});
		}
		if (query !== "") {
			filteredList = filteredList.filter((item) => {
				return item.name.toLowerCase().includes(query.toLowerCase());
			});
		}
		setBeerList(filteredList);
	}, [checked, checked2, query]);

	return (
		<div>
			<SearchBox query={query} setQuery={setQuery} />
			<FiltersList checked={checked} setChecked={setChecked} checked2={checked2} setChecked2={setChecked2} />
		</div>
	);
};

export default Navbar;
