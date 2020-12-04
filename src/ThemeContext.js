import React, { createContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext({
	dark: true,
	toggle: () => {}
});

const ThemeProvider = (props) => {
	const [dark, setDark] = useState(true);

	useLayoutEffect(() => {
		const currentTheme = window.localStorage.getItem("dark");
		setDark(currentTheme);
	}, [dark]);

	const toggler = () => {
		setDark(!dark);
		window.localStorage.setItem("dark", dark);
		console.log("here");
	};
	const value = {
		dark: dark,
		toggle: toggler
	};
	return (
		<ThemeContext.Provider value={value}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
