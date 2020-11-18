import React from "react";
import styled from "styled-components";

const About = () => {
	return (
		<Section id="about">
			<h1>This is the About</h1>
		</Section>
	);
};

export default About;

const Section = styled.section`
	height: 100vh;
	background: linear-gradient(90deg, #d9afd9 0%, #97d9e1 100%);
	font-family: "Lobster", cursive;
	font-size: 50px;
	margin-top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
