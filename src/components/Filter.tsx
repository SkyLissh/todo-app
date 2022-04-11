import { Card, CardItem } from "src/components";

import "src/components/Filter.css";

type Props = {
	hidden?: boolean;
};

export function Filter({ hidden }: Props) {
	return (
		<div className={`filter ${hidden ? "hide--filter" : ""}`}>
			<p className="filter__text active">All</p>
			<p className="filter__text">Active</p>
			<p className="filter__text">Completed</p>
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
