import styled from "styled-components";

const font = "Lobster, cursive";

export const Header = styled.h1`
	margin-left: 50px;
	font-family: ${font};
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	box-shadow: 20px 10px 20px rgba(0, 0, 0, 0.25);
	position: fixed;
	width: 100vw;
	background: rgba(255, 250, 250, 0.6);
	height: 50px;
	align-items: center;
	z-index: 5;
`;

export const List = styled.ul`
	display: flex;
	list-style: none;
`;

export const Item = styled.li`
	margin-right: 40px;
	font-size: 25px;
	:active {
		color: red;
	}
`;

export const A = styled.a`
	font-family: ${font};
	text-decoration: none;
	:hover {
		color: green;
	}
	:visited {
		color: black;
	}
`;
