import { Dispatch, SetStateAction } from "react";
import { Card, CardItem, Filter, TaskItem } from "src/components";

import "src/components/Tasks.css";

import { Task } from "src/models/task";
import { LocalCRUD } from "src/models/local-crud";

type Props = {
	taskState: [Task[], Dispatch<SetStateAction<Task[]>>];
	filterState: [string, Dispatch<SetStateAction<string>>];
};

export function Tasks({ taskState, filterState }: Props) {
	const [tasks, setTasks] = taskState;
	const [filter, setFilter] = filterState;

	const filteredTasks = tasks.filter((task: Task) => {
		if (filter === "all") {
			return true;
		} else if (filter === "completed") {
			return task.completed;
		} else if (filter === "active") {
			return !task.completed;
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
					<Filter hidden filterState={[filter, setFilter]} />
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
