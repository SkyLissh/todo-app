import "src/App.css";

import { Container, FilterCard, Header, Input, Tasks } from "src/components";

function App() {
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
