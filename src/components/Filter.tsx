import { Dispatch, SetStateAction } from "react";

import "src/components/Filter.css";

type Props = {
	hidden?: boolean;

	filterState: [string, Dispatch<SetStateAction<string>>];
};

export function Filter({ hidden, filterState }: Props) {
	const [filter, setFilter] = filterState;
	const options: string[] = ["all", "active", "completed"];

	function changeFilter(filter: string) {
		localStorage.setItem("filter", filter);
		setFilter(filter);
	}

	return (
		<div className={`filter ${hidden ? "hide--filter" : ""}`}>
			{options.map((option) => (
				<p
					className={`filter__text ${filter == option ? "active" : ""}`}
					key={option}
					onClick={() => changeFilter(option)}
				>
					{option}
				</p>
			))}
		</div>
	);
}
