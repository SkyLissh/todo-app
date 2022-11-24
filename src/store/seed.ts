import { v4 } from "uuid";

import { Task } from "src/models/task";

export const seedTasks: Task[] = [
	{
		id: v4(),
		description: "Learn React ⚛️",
		completed: true
	},
	{
		id: v4(),
		description: "Learn Flutter and Dart 🎯",
		completed: false
	},
	{
		id: v4(),
		description: "Learn TypeScript 🦕",
		completed: true
	},
	{
		id: v4(),
		description: "Learn Python 💖",
		completed: false
	},
	{
		id: v4(),
		description: "Learn Go 🐹",
		completed: false
	}
];
