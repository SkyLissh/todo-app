import "src/components/Card.css";

interface Props {
	children: React.ReactNode;
	mediaHidden?: boolean;
}

export function Card({ children, mediaHidden }: Props) {
	return <div className={`card ${mediaHidden ? "hide" : ""}`}>{children}</div>;
}
