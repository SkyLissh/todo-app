import { Card, CardItem, Filter } from "src/components";

import "src/components/Tasks.css";

export function Tasks() {
	return (
		<Card>
			<CardItem circle close>
				<p className="card__text">My first task</p>
			</CardItem>
			<CardItem circle close>
				<p className="card__text">My first task</p>
			</CardItem>
			<CardItem circle close>
				<p className="card__text">My first task</p>
			</CardItem>
			<CardItem circle close>
				<p className="card__text">My first task</p>
			</CardItem>
			<CardItem circle close>
				<p className="card__text">My first task</p>
			</CardItem>
			<CardItem circle close>
				<p className="card__text">My first task</p>
			</CardItem>
			<CardItem>
				<div className="task__options">
					<p className="card__text task__option">5 Items Left</p>
					<Filter hidden />
					<p className="card__text task__option option--select">Clear Completed</p>
				</div>
			</CardItem>
		</Card>
	);
}
