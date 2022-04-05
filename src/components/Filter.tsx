import Card from "src/components/Card";
import CardItem from "src/components/CardItem";

export default function Filter() {
	return (
		<Card>
			<CardItem>
				<p className="card__text">All</p>
				<p className="card__text">Active</p>
				<p className="card__text">Completed</p>
			</CardItem>
		</Card>
	);
}
