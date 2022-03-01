import "src/App.css";
import Header from "src/components/Header";
import Input from "src/components/Input";
import Tasks from "src/components/Tasks";

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
		</>
	);
}

export default App;
