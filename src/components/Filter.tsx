import "src/components/Filter.css";

import { filterStore } from "src/stores/filter.store";

type Props = {
	hidden?: boolean;
};

export function Filter({ hidden }: Props) {
	const filter = filterStore();

	const options: string[] = ["all", "active", "completed"];

	return (
		<div className={`filter ${hidden ? "hide--filter" : ""}`}>
			{options.map((option) => (
				<p
					className={`filter__text ${filter.value == option ? "active" : ""}`}
					key={option}
					onClick={() => filter.setFilter(option)}
				>
					{option}
				</p>
			))}
		</div>
	);
}
