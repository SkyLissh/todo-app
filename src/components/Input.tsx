import { FormEvent, useRef } from "react";
import { v4 as uuid4 } from "uuid";

import "src/components/Input.css";

import { Card, CardItem } from "src/components";

import { Task } from "src/models/task";

import { taskStore } from "src/stores/task.store";

import { useTaskStorage } from "src/hooks/useTaskStorage";

export function Input() {
	const inputTask = useRef<HTMLInputElement>(null);
	const taskStorage = useTaskStorage();

	const tasks = taskStore();

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (inputTask.current) {
			const task: Task = {
				id: uuid4(),
				description: inputTask.current.value,
				completed: false
			};

			tasks.addTask(task);
			taskStorage.addTask(task);

			inputTask.current.value = "";
		}
	}

	return (
		<Card>
			<CardItem>
				<form className="card__form" onSubmit={onSubmit}>
					<input
						ref={inputTask}
						className="card__input"
						type="text"
						placeholder="Create new todo..."
					/>
				</form>
			</CardItem>
		</Card>
	);
}
