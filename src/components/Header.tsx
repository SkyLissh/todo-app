import { Button } from "src/components";

import "src/components/Header.css";

export function Header() {
	function toggleTheme() {
		const body: string | null = localStorage.getItem("dark-theme");

		if (body === "true") {
			localStorage.setItem("dark-theme", "false");
			document.body.classList.remove("theme--dark");
		} else {
			localStorage.setItem("dark-theme", "true");
			document.body.classList.add("theme--dark");
		}

		// if (body?.classList.contains("theme--dark")) {
		// 	body?.classList.remove("theme--dark");
		// } else {
		// 	body?.classList.add("theme--dark");
		// }
	}

	return (
		<header className="header">
			<h1 className="header__title">TODO</h1>
			<Button alt iconStyle onClick={toggleTheme}>
				<span className="material-icons icon--header">brightness_3</span>
			</Button>
		</header>
	);
}
