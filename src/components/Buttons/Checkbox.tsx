import "src/components/Buttons/Checkbox.css";

type Props = {
	id: string;
	checked: boolean;

	onChange: () => void;
};

export function Checkbox({ id, checked, onChange }: Props) {
	return (
		<label className="checkbox">
			<input
				className="checkbox__input"
				type="checkbox"
				id={id}
				onChange={onChange}
				checked={checked}
			/>
			<span className="checkbox__check">
				<span className="material-icons checkbox__icon">done</span>
			</span>
		</label>
	);
}
