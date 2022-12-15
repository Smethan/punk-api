import React from "react";

const FiltersList = ({ checked, setChecked, checked2, setChecked2 }) => {
	// const filteredBeer = displayBeerList.filter((item) => {
	//     switch (param) {
	//         case "abv":
	//             return item.abv > 6;
	//         case "acid":
	//             return item.ph < 4;
	//         default:
	//             return item;
	//     }
	// });
	// setBeerList(filteredBeer);

	return (
		<div>
			<Checkbox label="High ABV" handleChange={() => setChecked(!checked)} />
			<Checkbox label="Acidic" handleChange={() => setChecked2(!checked2)} />
		</div>
	);
};

const Checkbox = ({ label, handleChange, checked }) => {
	return (
		<label>
			<input type="checkbox" checked={checked} onChange={handleChange} />
			{label}
		</label>
	);
};

export default FiltersList;
