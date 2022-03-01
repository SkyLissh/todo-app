import "src/components/Input.css";
import Card from "src/components/Card";
import CardItem from "src/components/CardItem";

export default function Input() {
	return (
		<Card>
			<CardItem>
				<input className="card__input" type="text" placeholder="Create new todo..." />
			</CardItem>
		</Card>
	);
}
