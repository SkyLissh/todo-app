import { Card, CardItem, Filter, TaskItem, TextButton } from "src/components";

import "src/components/Tasks/Tasks.css";

import { Task } from "src/models/task";

import { useStore } from "src/store/useStore";

export function Tasks() {
	const filter = useStore((state) => state.filter);
	const tasks = useStore((state) => state.tasks);

	const filteredTasks = tasks.values.filter((task: Task) => {
		switch (filter.value) {
			case "completed":
				return task.completed;

			case "active":
				return !task.completed;

			default:
				return true;
		}
	});

	return (
		<Card>
			<ul className="task__list">
				{filteredTasks.map((task) => (
					<TaskItem id={task.id} key={task.id}>
						<p className={`card__text ${task.completed ? "active" : ""}`}>
							{task.description}
						</p>
					</TaskItem>
				))}
			</ul>
			<CardItem>
				<div className="task__options">
					<p className="card__text task__option">{filteredTasks.length} Items Left</p>
					<Filter hidden />
					<TextButton text="Clear Completed" onClick={() => tasks.deleteCompleted()} />
				</div>
			</CardItem>
		</Card>
	);
}
