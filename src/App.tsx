import { Container, FilterCard, Header, Input, Tasks } from "src/components";

import "src/App.css";

function App() {
	return (
		<>
			{/* <img
				className="bg__image"
				src="/assets/images/bg-mobile-light.jpg"
				alt="background image"
			/> */}
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
