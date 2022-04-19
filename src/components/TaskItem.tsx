import { Button } from "src/components";

import { Task } from "src/models/task";
import { LocalCRUD } from "src/models/local-crud";

type Props = {
	children: React.ReactNode;

	task: Task;
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function TaskItem({ children, task, setTasks }: Props) {
	const iconHidden = task.completed ? "" : "icon--hidden";
	const active = task.completed ? "active" : "";

	function onDelete() {
		setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
		LocalCRUD.remove(task.id);
	}

	function toggleComplete() {
		setTasks((prevTasks) =>
			prevTasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
		);
		LocalCRUD.update(task.id, { completed: !task.completed });
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
