import { v4 as uuid4 } from "uuid";

import { StoreSlice } from "src/store/useStore";

import { Task } from "src/models/task";

export interface TaskSlice {
	values: Task[];

	addTask: (description: string) => void;
	removeTask: (id: string) => void;
	toggleCompleted: (id: string) => void;
	deleteCompleted: () => void;
	activeLength: () => number;
}

export const createTaskSlice: StoreSlice<TaskSlice> = (set, get) => ({
	values: [],

	activeLength: () => {
		return get().tasks.values.filter((task) => !task.completed).length;
	},

	addTask: (description: string) => {
		set((state) => ({
			tasks: {
				...state.tasks,
				values: [
					...state.tasks.values,
					{
						id: uuid4(),
						description,
						completed: false
					}
				]
			}
		}));
	},

	removeTask: (id: string) => {
		set((state) => ({
			tasks: {
				...state.tasks,
				values: state.tasks.values.filter((task) => task.id !== id)
			}
		}));
	},

	toggleCompleted(id: string) {
		set((state) => ({
			tasks: {
				...state.tasks,
				values: state.tasks.values.map((task) => {
					if (task.id === id) {
						return {
							...task,
							completed: !task.completed
						};
					}
					return task;
				})
			}
		}));
	},

	deleteCompleted: () => {
		set((state) => ({
			tasks: {
				...state.tasks,
				values: state.tasks.values.filter((task) => !task.completed)
			}
		}));
	}
});
