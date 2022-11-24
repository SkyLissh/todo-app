import { Draggable } from "react-beautiful-dnd";

import "src/components/Tasks/TaskItem.css";

import { Checkbox, IconButton } from "src/components";

import { useStore } from "src/store/useStore";

type Props = {
	children: React.ReactNode;

	id: string;
	index: number;
};

export function TaskItem({ children, id, index }: Props) {
	const tasks = useStore((state) => state.tasks);
	const task = tasks.values.find((task) => task.id === id)!;

	function onDelete() {
		tasks.removeTask(id);
	}

	function toggleComplete() {
		tasks.toggleCompleted(id);
	}

	return (
		<Draggable draggableId={id} index={index}>
			{(provided, snapshot) => (
				<li
					className="task__item"
					{...provided.dragHandleProps}
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<Checkbox id={id} checked={task.completed} onChange={toggleComplete} />

					{children}

					<IconButton icon="close" hidden onClick={() => onDelete()} />
				</li>
			)}
		</Draggable>
	);
}
