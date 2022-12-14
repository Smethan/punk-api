import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState } from "react";
import beers from "./beers";
import { useEffect } from "react";

function App() {
	const [beerList, setBeerList] = useState([]);

	useEffect(() => {
		setBeerList([...beers]);
	}, []);

	return (
		<div className="App">
			<Navbar setBeerList={setBeerList} />
			<Main beerList={beerList} />
		</div>
	);
}

export default App;
