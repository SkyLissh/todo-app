import "src/components/Buttons/Button.css";

type Props = {
	children: React.ReactNode;
	className?: string;

	onClick?: () => void;
};

export function Button(props: Props) {
	return (
		<button type="button" className={`button ${props.className}`} onClick={props.onClick}>
			{props.children}
		</button>
	);
}
