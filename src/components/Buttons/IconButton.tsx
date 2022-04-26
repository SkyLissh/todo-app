import "src/components/Buttons/IconButton.css";

import { Button } from "src/components";

type Props = {
	icon: string;
	hidden?: boolean;
	big?: boolean;

	onClick?: () => void;
};

export function IconButton({ icon, hidden, big, onClick }: Props) {
	const iconBig = big ? "icon--big" : "";
	const buttonHidden = hidden ? "button--hide" : "";

	return (
		<Button className={`button--icon ${buttonHidden}`} onClick={onClick}>
			<span className={`material-icons ${iconBig}`}>{icon}</span>
		</Button>
	);
}
