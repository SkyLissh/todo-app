import "src/components/CardItem.css";

interface Props {
	children: React.ReactNode;
}

export default function CardItem(props: Props) {
	return (
		<div className="card__item">
			<div className="circle"></div>
			{props.children}
			<span className="material-icons icon">close</span>
		</div>
	);
}
