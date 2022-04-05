import Card from "src/components/Card";
import CardItem from "src/components/CardItem";

import "src/components/Tasks.css";

export default function Tasks() {
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
				<p className="card__text">5 Items Left</p>
				<p className="card__text">Clear Completed</p>
			</CardItem>
		</Card>
	);
}
