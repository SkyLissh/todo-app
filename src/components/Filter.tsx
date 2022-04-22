import "src/components/Filter.css";

import { useStore } from "src/store/useStore";

type Props = {
	hidden?: boolean;
};

export function Filter({ hidden }: Props) {
	const filter = useStore((state) => state.filter);

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
