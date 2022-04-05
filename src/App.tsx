import Header from "src/components/Header";
import Input from "src/components/Input";
import Tasks from "src/components/Tasks";
import Filter from "src/components/Filter";

import "src/App.css";

function App() {
	return (
		<>
			<img
				className="bg__image"
				src="/assets/images/bg-mobile-light.jpg"
				alt="background image"
			/>
			<Header />
			<Input />
			<Tasks />
			<Filter />

			<footer className="footer">
				<p className="footer_text">Drag and drop to render list</p>
			</footer>
		</>
	);
}

export default App;
