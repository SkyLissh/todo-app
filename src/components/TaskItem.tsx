import { Button } from "src/components";

import { taskStore } from "src/stores/task.store";

import { useTaskStorage } from "src/hooks/useTaskStorage";

type Props = {
	children: React.ReactNode;

	id: string;
};

export function TaskItem({ children, id }: Props) {
	const tasks = taskStore();
	const task = tasks.values.find((task) => task.id === id)!!;

	const taskStorage = useTaskStorage();

	const iconHidden = task.completed ? "" : "icon--hidden";
	const active = task.completed ? "active" : "";

	function onDelete() {
		tasks.removeTask(id);
		taskStorage.removeTask(id);
	}

	function toggleComplete() {
		tasks.toggleCompleted(id);
		taskStorage.updateTask(task.id, { completed: !task.completed });
	}

	return (
		<div className="card__item">
			<Button iconStyle onClick={() => toggleComplete()}>
				<div className={`circle ${active}`}>
					<span className={`material-icons icon icon--done ${iconHidden}`}>done</span>
				</div>
			</Button>

			{children}

			<Button iconStyle onClick={() => onDelete()}>
				<span className="material-icons icon">close</span>
			</Button>
		</div>
	);
}
