import { Button } from "src/components";

import { useStore } from "src/store/useStore";

type Props = {
	children: React.ReactNode;

	id: string;
};

export function TaskItem({ children, id }: Props) {
	const tasks = useStore((state) => state.tasks);
	const task = tasks.values.find((task) => task.id === id)!!;

	const iconHidden = task.completed ? "" : "icon--hidden";
	const active = task.completed ? "active" : "";

	function onDelete() {
		tasks.removeTask(id);
	}

	function toggleComplete() {
		tasks.toggleCompleted(id);
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
