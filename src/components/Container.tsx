import "src/components/Container.css";

type Props = {
	children: React.ReactNode;
};

export function Container({ children }: Props) {
	return <main className="container">{children}</main>;
}
