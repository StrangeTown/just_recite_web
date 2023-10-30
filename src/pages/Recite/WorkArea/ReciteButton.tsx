interface ReciteButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}
const ReciteButton = (props: ReciteButtonProps) => {
	const { children, onClick } = props;
	return (
		<button
			onClick={onClick}
			className="border border-slate-100 rounded-md px-6 md:px-3 py-3 md:py-1 text-sm flex items-center gap-2 text-slate-400 shadow-md hover:shadow-lg"
		>
			{children}
		</button>
	);
};

export default ReciteButton;
