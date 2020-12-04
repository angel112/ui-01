import React from "react";
import "./styles.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
	return (
		<div className="App">
			<ThemeProvider >
				<NavBar />
				<Home />
				<About />
				<Contact />
			</ThemeProvider>
		</div>
	);
}
