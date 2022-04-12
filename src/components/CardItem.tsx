import { Button } from "src/components";

import "src/components/CardItem.css";

interface Props {
	circle?: boolean;
	close?: boolean;
	children: React.ReactNode;
	// TODO: add done property
}

export function CardItem(props: Props) {
	return (
		<div className="card__item">
			{props.circle && (
				// TODO: Circle and text class change with done property

				<div className="circle">
					<span className="material-icons icon icon--done icon--hidden">done</span>
				</div>
			)}
			{props.children}
			{props.close && (
				<Button iconStyle>
					<span className="material-icons icon">close</span>
				</Button>
			)}
		</div>
	);
}
