import React from "react";
import "./styles.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";

export default function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<About />
			<Contact />
		</div>
	);
}
