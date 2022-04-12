import { Container, FilterCard, Header, Input, Tasks } from "src/components";

import "src/App.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		const body: string | null = localStorage.getItem("dark-theme");

		if (body === "true") {
			document.body.classList.add("theme--dark");
		}
	});

	return (
		<>
			<div className="bg__image"></div>
			<Container>
				<Header />
				<Input />
				<Tasks />
				<FilterCard />
			</Container>

			<footer className="footer">
				<p className="footer_text">Drag and drop to render list</p>
			</footer>
		</>
	);
}

export default App;
