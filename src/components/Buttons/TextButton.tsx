import { Button } from "src/components";

import "src/components/Buttons/TextButton.css";

type Props = {
	text: string;
	bold?: boolean;
	active?: boolean;

	onClick?: () => void;
};

export function TextButton({ text, bold, active, onClick }: Props) {
	const textBold = bold ? "text--bold" : "";
	const textActive = active ? "text--active" : "";

	return (
		<Button className={`button--text ${textBold} ${textActive}`} onClick={onClick}>
			{text}
		</Button>
	);
}
