interface ProgressProps {
	current: number;
	total: number;
}
const Progress = ({ current, total }: ProgressProps) => {
	const currentIndex = current - 1;
	const innerWidth = (currentIndex / total) * 100;

	const hasValue = innerWidth > 0;
	const outerBackgroundColor = hasValue ? 'bg-slate-100' : 'bg-transparent';

	return (
		<div className="flex items-center gap-1 justify-center">
			{/* Outer */}
			<div className={`w-48 h-1.5 rounded-full ${outerBackgroundColor} transition-all duration-1000`}>
				{/* Inner */}
				<div
					className="h-full bg-slate-300 rounded-full transition-all duration-300"
					style={{ width: `${innerWidth}%` }}
				/>
			</div>
		</div>
	);
};

export default Progress;
