import { Dispatch, SetStateAction } from "react";

import { Card, CardItem, Filter } from "src/components";

type Props = {
	filterState: [string, Dispatch<SetStateAction<string>>];
};

export function FilterCard({ filterState }: Props) {
	return (
		<Card mediaHidden>
			<CardItem>
				<Filter filterState={filterState} />
			</CardItem>
		</Card>
	);
}
