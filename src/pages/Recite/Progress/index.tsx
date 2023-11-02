interface ProgressProps {
	current: number;
	total: number;
}
const Progress = ({ current, total }: ProgressProps) => {
	const currentIndex = current - 1;
	const innerWidth = (currentIndex / total) * 100;
	return (
		<div className="flex items-center gap-1 justify-center">
			{/* Outer */}
			<div className="w-48 h-1.5 bg-slate-100 rounded-full">
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
