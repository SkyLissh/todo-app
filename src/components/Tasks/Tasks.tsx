import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import "src/components/Tasks/Tasks.css";

import { Card, CardItem, Filter, TaskItem, TextButton } from "src/components";

import { useStore } from "src/store/useStore";

export function Tasks() {
	const filter = useStore((state) => state.filter);
	const tasks = useStore((state) => state.tasks);

	const filteredTasks = tasks.values.filter((task) => {
		switch (filter.value) {
			case "active":
				return !task.completed;
			case "completed":
				return task.completed;
			default:
				return true;
		}
	});

	function onDragEnd(result: DropResult) {
		if (!result.destination) return;

		const sourceIndex = result.source.index;
		const destinationIndex = result.destination.index;

		const srcTask = filteredTasks[sourceIndex];
		const destTask = filteredTasks[destinationIndex];

		const srcIdx = tasks.values.findIndex((task) => task.id === srcTask.id);
		const destIdx = tasks.values.findIndex((task) => task.id === destTask.id);

		tasks.moveTask(srcIdx, destIdx);
	}

	return (
		<Card>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="tasks">
					{(provided, snapshot) => (
						<ul
							className="task__list"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{filteredTasks.map((task, idx) => (
								<TaskItem id={task.id} key={task.id} index={idx}>
									<p className={`card__text ${task.completed ? "active" : ""}`}>
										{task.description}
									</p>
								</TaskItem>
							))}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
			<CardItem>
				<div className="task__options">
					<p className="card__text task__option">{filteredTasks.length} Items</p>
					<Filter hidden />
					<TextButton text="Clear Completed" onClick={() => tasks.deleteCompleted()} />
				</div>
			</CardItem>
		</Card>
	);
}
