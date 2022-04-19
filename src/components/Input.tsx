import { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import { Card, CardItem } from "src/components";

import "src/components/Input.css";

import { Task } from "src/models/task";
import { LocalCRUD } from "src/models/local-crud";

type Props = {
	setTasks: Dispatch<SetStateAction<Task[]>>;
};

export function Input({ setTasks }: Props) {
	const inputTask = useRef<HTMLInputElement>(null);

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (inputTask.current) {
			const task: Task = {
				id: Date.now(),
				description: inputTask.current.value,
				completed: false
			};

			setTasks((prevTasks) => [...prevTasks, task]);
			LocalCRUD.add(task);

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
