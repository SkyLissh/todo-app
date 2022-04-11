import { Card, CardItem } from "src/components";

import "src/components/Filter.css";

type Props = {
	hidden?: boolean;
};

export function Filter({ hidden }: Props) {
	return (
		<div className={`filter ${hidden ? "hide--filter" : ""}`}>
			<p className="card__text">All</p>
			<p className="card__text">Active</p>
			<p className="card__text">Completed</p>
		</div>
	);
}

export function FilterCard() {
	return (
		<Card mediaHidden>
			<CardItem>
				<Filter />
			</CardItem>
		</Card>
	);
}
