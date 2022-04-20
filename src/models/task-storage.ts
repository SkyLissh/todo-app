import { Task } from "src/models/task";

export interface TaskStorage {
	addTask: (task: Task) => void;
	updateTask: (id: string, values: Partial<Task>) => void;
	removeTask: (id: string) => void;
	removeCompleted: () => void;
}
