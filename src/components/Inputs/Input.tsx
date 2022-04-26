import { FormEvent, useRef } from "react";

import "src/components/Inputs/Input.css";

import { Card, CardItem } from "src/components";

import { useStore } from "src/store/useStore";

export function Input() {
	const inputTask = useRef<HTMLInputElement>(null);

	const tasks = useStore((state) => state.tasks);

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (inputTask.current) {
			if (inputTask.current.value.trim() === "") {
				return;
			}

			tasks.addTask(inputTask.current.value);

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
