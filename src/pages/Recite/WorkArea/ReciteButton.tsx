interface ReciteButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}
const ReciteButton = (props: ReciteButtonProps) => {
	const { children, onClick } = props;
	return (
		<button
			onClick={onClick}
			className="text-opacity-5 text-black flex items-center gap-1"
		>
			{children}
		</button>
	);
};

export default ReciteButton;
