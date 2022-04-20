import { Task } from "src/models/task";
import { TaskStorage } from "src/models/task-storage";

export function useTaskStorage(): TaskStorage {
	const savedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

	function addTask(task: Task) {
		savedTasks.push(task);
		localStorage.setItem("tasks", JSON.stringify(savedTasks));
	}

	function updateTask(id: string, values: Partial<Task>) {
		const newTasks: Task[] = savedTasks.map((task) => {
			if (task.id === id) {
				return {
					...task,
					...values
				};
			}
			return task;
		});
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}

	function removeTask(id: string) {
		const newTasks: Task[] = savedTasks.filter((task) => task.id !== id);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}

	function removeCompleted() {
		const newTasks: Task[] = savedTasks.filter((task) => !task.completed);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}

	return {
		addTask,
		updateTask,
		removeTask,
		removeCompleted
	};
}
