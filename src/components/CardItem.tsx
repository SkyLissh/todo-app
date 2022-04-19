import { Button } from "src/components";

import "src/components/CardItem.css";

interface Props {
	children: React.ReactNode;
}

export function CardItem(props: Props) {
	return <div className="card__item">{props.children}</div>;
}
