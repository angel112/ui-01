import React from "react";

import { Header, Nav, List, Item, A } from "./styledComponents/navbar";

const NavBar = () => {
	return (
		<Nav>
			<Header>AngelRed.tech</Header>
			<List id="list">
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
