import { Card, CardItem, Filter, TaskItem } from "src/components";

import "src/components/Tasks.css";

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

	function clearCompleted() {
		tasks.deleteCompleted();
	}

	return (
		<Card>
			{filteredTasks.map((task) => (
				<TaskItem id={task.id} key={task.id}>
					<p className="card__text">{task.description}</p>
				</TaskItem>
			))}
			<CardItem>
				<div className="task__options">
					<p className="card__text task__option">{filteredTasks.length} Items Left</p>
					<Filter hidden />
					<p
						className="card__text task__option option--select"
						onClick={() => clearCompleted()}
					>
						Clear Completed
					</p>
				</div>
			</CardItem>
		</Card>
	);
}
