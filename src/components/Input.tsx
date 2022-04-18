import { Card, CardItem } from "src/components";

import "src/components/Input.css";

export function Input() {
	return (
		<Card>
			<CardItem circle>
				<input className="card__input" type="text" placeholder="Create new todo..." />
			</CardItem>
		</Card>
	);
}
