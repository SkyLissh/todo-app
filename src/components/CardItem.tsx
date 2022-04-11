import "src/components/CardItem.css";

interface Props {
	circle?: boolean;
	close?: boolean;
	children: React.ReactNode;
}

export function CardItem(props: Props) {
	return (
		<div className="card__item">
			{props.circle && <div className="circle"></div>}
			{props.children}
			{props.close && <span className="material-icons icon">close</span>}
		</div>
	);
}
