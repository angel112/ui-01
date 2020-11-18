import React, { useState } from "react";
import Typist from "react-typist";

import styled from "styled-components";

const Home = () => {
	const text = ["Hello", "How are you!!"];

	const [index, setIndex] = useState(0);
	const [typer, setTyper] = useState(text[index]);

	const typeDoneHandle = () => {
		console.log("here", text.length);
		if (index < text.length) {
			console.log("setting");
			const i = index + 1;
			console.log(i);
			setIndex(i);
			setTyper(text[i]);
			console.log(typer, index);
		}
	};

	return (
		<Section id="home">
			<Typist onTypingDone={typeDoneHandle}>
				<Typist.Delay ms={1000} />
				<span>{typer}</span>
				<Typist.Backspace count={typer.length} delay={1000} />
				<Typist.Delay ms={1000} />
			</Typist>
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
