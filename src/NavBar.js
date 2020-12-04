import React, { useContext } from "react";

import { Header, Nav, List, Item, A } from "./styledComponents/navbar";

import { ThemeContext } from "./ThemeContext";

const NavBar = () => {
	const { dark } = useContext(ThemeContext);
	console.log("dark is", dark);
	return (
		<Nav theme={dark}>
			<Header>AngelRed.tech</Header>
			<List id="list" theme={dark}>
				<Item active>
					<A href="#home">Home</A>
				</Item>
				<Item>
					<A href="#about">About</A>
				</Item>
				<Item>
					<A href="#contact">Contact Me</A>
				</Item>
			</List>
		</Nav>
	);
};

export default NavBar;
