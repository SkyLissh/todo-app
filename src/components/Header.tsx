import { useEffect } from "react";

import "src/components/Header.css";

import { IconButton } from "src/components";
import { useStore } from "src/store/useStore";

export function Header() {
	const bodyClasses = document.body.classList;

	const theme = useStore((state) => state.theme);

	useEffect(() => {
		theme.value ? bodyClasses.add("theme--dark") : bodyClasses.remove("theme--dark");
	}, [theme.value]);

	return (
		<header className="header">
			<h1 className="header__title">TODO</h1>
			<IconButton
				icon={theme.value ? "light_mode" : "brightness_3"}
				big
				onClick={() => theme.toggleTheme()}
			/>
		</header>
	);
}
