import create from "zustand";

import { Task } from "src/models/task";

interface TaskState {
	values: Task[];
	addTask: (task: Task) => void;
	removeTask: (id: string) => void;
	toggleCompleted: (id: string) => void;
	deleteCompleted: () => void;
}

const savedTasks = localStorage.getItem("tasks");

export const taskStore = create<TaskState>((set) => ({
	values: savedTasks ? JSON.parse(savedTasks) : [],

	addTask: (task: Task) => {
		set((state) => ({
			values: [...state.values, task]
		}));
	},

	removeTask: (id: string) => {
		set((state) => ({
			values: state.values.filter((task) => task.id !== id)
		}));
	},

	toggleCompleted(id: string) {
		set((state) => ({
			values: state.values.map((task) => {
				if (task.id === id) {
					return {
						...task,
						completed: !task.completed
					};
				}
				return task;
			})
		}));
	},

	deleteCompleted: () => {
		set((state) => ({
			values: state.values.filter((task) => !task.completed)
		}));
	}
}));
