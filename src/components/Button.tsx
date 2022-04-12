import "src/components/Button.css";

type Props = {
	children: React.ReactNode;

	circle?: boolean;
	iconStyle?: boolean;
	alt?: boolean;
	onClick?: () => void;
};

export function Button(props: Props) {
	const buttonAlt = props.alt ? "button--alt" : "";
	const buttonStyle = props.iconStyle ? "button--icon" : "";

	return (
		<button className={`button ${buttonStyle} ${buttonAlt}`} onClick={props.onClick}>
			{props.children}
		</button>
	);
}
