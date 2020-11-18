import React from "react";
import styled from "styled-components";

const Contact = () => {
	return (
		<Section id="contact">
			<h1>This is the Contact</h1>
		</Section>
	);
};

export default Contact;

const Section = styled.section`
	height: 100vh;
	background: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
	font-family: "Lobster", cursive;
	font-size: 50px;
	margin-top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
