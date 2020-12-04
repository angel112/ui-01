import React, { useContext } from "react";

import styled from "styled-components";
import { ThemeContext } from "./ThemeContext";

const Home = () => {
	const { toggle } = useContext(ThemeContext);
	return (
		<Section id="home">
			<h1>Home Page</h1>
			<button onClick={() => toggle()}>Click Me!</button>
		</Section>
	);
};

export default Home;

const Section = styled.section`
	height: 100vh;
	background: linear-gradient(180deg, #fbab7e 0%, #f7ce68 100%);
	margin-top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Lobster", cursive;
	font-size: 50px;
	box-shadow: 20px 10px 20px rgba(0, 0, 0, 0.75);
`;
