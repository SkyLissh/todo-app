import "src/components/Filter/Filter.css";

import { TextButton } from "src/components";
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
				<TextButton
					text={option}
					key={option}
					bold
					active={filter.value === option}
					onClick={() => filter.setFilter(option)}
				/>
			))}
		</div>
	);
}
