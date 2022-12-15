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

	useEffect(() => {
		setBeerList(beers);
		setDisplayBeerList(beers);
	}, []);

	return (
		<div className="App">
			<Navbar setBeerList={setDisplayBeerList} beerList={beerList} />
			<Main beerList={displayBeerList} />
		</div>
	);
}

export default App;
