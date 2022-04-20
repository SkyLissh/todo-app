import { useEffect, useState } from "react";

import "src/App.css";

import { Container, FilterCard, Header, Input, Tasks } from "src/components";
import { Task } from "src/models/task";

function App() {
	const savedTasks = localStorage.getItem("tasks");
	const parsedTasks: Task[] = savedTasks ? JSON.parse(savedTasks) : [];

	const [tasks, setTasks] = useState<Task[]>(parsedTasks);

	return (
		<>
			<div className="bg__image"></div>
			<Container>
				<Header />
				<Input setTasks={setTasks} />
				<Tasks taskState={[tasks, setTasks]} />
				<FilterCard />
			</Container>

			<footer className="footer">
				<p className="footer_text">Drag and drop to render list</p>
			</footer>
		</>
	);
}

export default App;
