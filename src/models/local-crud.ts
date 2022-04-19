import { OptionalTask, Task } from "src/models/task";

export class LocalCRUD {
	public static add(task: Task) {
		const savedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
		savedTasks.push(task);
		localStorage.setItem("tasks", JSON.stringify(savedTasks));
	}

	public static update(taskId: number, values: OptionalTask) {
		const savedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
		const newTasks: Task[] = savedTasks.map((task) => {
			if (task.id === taskId) {
				return {
					...task,
					...values
				};
			}
			return task;
		});
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}

	public static remove(taskId: number) {
		const savedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
		const newTasks: Task[] = savedTasks.filter((task) => task.id !== taskId);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}

	public static removeCompleted() {
		const savedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
		const newTasks: Task[] = savedTasks.filter((task) => !task.completed);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}
}
