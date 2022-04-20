import { Card, CardItem, Filter, TaskItem } from "src/components";

import "src/components/Tasks.css";

import { Task } from "src/models/task";

import { filterStore } from "src/stores/filter.store";
import { taskStore } from "src/stores/task.store";

import { useTaskStorage } from "src/hooks/useTaskStorage";

export function Tasks() {
	const filter = filterStore();
	const tasks = taskStore();

	const taskStorage = useTaskStorage();

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
		taskStorage.removeCompleted();
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
