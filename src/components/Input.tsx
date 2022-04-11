import "src/components/Input.css";
import { Card, CardItem } from "src/components";

export function Input() {
	return (
		<Card>
			<CardItem circle>
				<input className="card__input" type="text" placeholder="Create new todo..." />
			</CardItem>
		</Card>
	);
}
