interface ProgressBackgroundProps {
	len: number;
	activeIndexArr: number[];
}
const ProgressBackground = ({
	len,
	activeIndexArr,
}: ProgressBackgroundProps) => {
	return (
		<div className="flex justify-center flex-wrap-reverse gap-1">
			{Array.from({ length: len }).map((item, index) => {
				const isActive = activeIndexArr.includes(index);
				const className = isActive ? "bg-slate-300" : "bg-slate-100";
				return (
					<div
						className={`w-1 h-1 ${className} transition-all duration-500`}
						key={index}
					></div>
				);
			})}
		</div>
	);
};

export default ProgressBackground;
