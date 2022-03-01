import Card from "src/components/Card";
import CardItem from "src/components/CardItem";

import "src/components/Tasks.css";

export default function Tasks() {
	return (
		<Card>
			<CardItem>
				<p className="card__text">My first task</p>
			</CardItem>
		</Card>
	);
}
