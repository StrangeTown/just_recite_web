const ProgressBackground = () => {
	return (
		<div className="flex flex-wrap-reverse gap-2">
			{Array.from({ length: 1000 }).map((item, index) => (
				<div className="w-1 h-1 bg-slate-300" key={index}></div>
			))}
		</div>
	);
};

export default ProgressBackground;
