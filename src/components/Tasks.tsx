import { Dispatch, SetStateAction } from "react";
import { Card, CardItem, Filter, TaskItem } from "src/components";

import "src/components/Tasks.css";

import { Task } from "src/models/task";
import { LocalCRUD } from "src/models/local-crud";

import { filterStore } from "src/stores/filter.store";

type Props = {
	taskState: [Task[], Dispatch<SetStateAction<Task[]>>];
};

export function Tasks({ taskState }: Props) {
	const [tasks, setTasks] = taskState;
	const filter = filterStore();

	const filteredTasks = tasks.filter((task: Task) => {
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
		setTasks(tasks.filter((task: Task) => !task.completed));
		LocalCRUD.removeCompleted();
	}

	return (
		<Card>
			{filteredTasks.map((task) => (
				<TaskItem task={task} setTasks={setTasks} key={task.id}>
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
