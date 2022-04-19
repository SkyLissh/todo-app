import { useEffect, useState } from "react";
import { Button } from "src/components";

import "src/components/Header.css";

export function Header() {
	const bodyClasses = document.body.classList;
	const savedDark = localStorage.getItem("dark-theme");

	const [dark, setDark] = useState<boolean>(savedDark === "true");

	useEffect(() => {
		localStorage.setItem("dark-theme", `${dark}`);
		dark ? bodyClasses.remove("theme--dark") : bodyClasses.add("theme--dark");
	}, [dark]);

	return (
		<header className="header">
			<h1 className="header__title">TODO</h1>
			<Button alt iconStyle onClick={() => setDark(!dark)}>
				<span className="material-icons icon--header">
					{dark ? "light_mode" : "brightness_3"}
				</span>
			</Button>
		</header>
	);
}
