import { useEffect } from "react";

import "src/components/Header.css";

import { Button } from "src/components";
import { themeStore } from "src/stores/theme.store";

export function Header() {
	const bodyClasses = document.body.classList;

	const theme = themeStore();

	useEffect(() => {
		localStorage.setItem("dark-theme", `${theme.value}`);
		theme.value ? bodyClasses.remove("theme--dark") : bodyClasses.add("theme--dark");
	}, [theme.value]);

	return (
		<header className="header">
			<h1 className="header__title">TODO</h1>
			<Button alt iconStyle onClick={() => theme.toggle()}>
				<span className="material-icons icon--header">
					{theme.value ? "light_mode" : "brightness_3"}
				</span>
			</Button>
		</header>
	);
}
