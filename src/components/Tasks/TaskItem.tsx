import "src/components/Tasks/TaskItem.css";

import { IconButton, Checkbox } from "src/components";

import { useStore } from "src/store/useStore";

type Props = {
	children: React.ReactNode;

	id: string;
};

export function TaskItem({ children, id }: Props) {
	const tasks = useStore((state) => state.tasks);
	const task = tasks.values.find((task) => task.id === id)!!;

	function onDelete() {
		tasks.removeTask(id);
	}

	function toggleComplete() {
		tasks.toggleCompleted(id);
	}

	return (
		<li className="task__item">
			<Checkbox id={id} checked={task.completed} onChange={toggleComplete} />

			{children}

			<IconButton icon="close" hidden onClick={() => onDelete()} />
		</li>
	);
}
