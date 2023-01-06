import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState } from "react";
import beers from "./beers";
import { useEffect } from "react";

function App() {
	const [beerList, setBeerList] = useState([]);
	const [displayBeerList, setDisplayBeerList] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=80`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((data) => {
				setBeerList(data);
				setDisplayBeerList(data);
			});
	}, [page]);

	return (
		<div className="App">
			<Navbar setBeerList={setDisplayBeerList} beerList={beerList} />
			<Main beerList={displayBeerList} setPage={setPage} page={page} />
		</div>
	);
}

export default App;
