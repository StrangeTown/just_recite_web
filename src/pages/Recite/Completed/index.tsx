const Completed = () => {
	return (
		<div className="flex flex-col items-center">
			{/* completed icon */}
			<div>
				<svg
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="13601"
					width="40"
					height="40"
				>
					<path
						d="M211.626667 435.84l228.736 228.778667 408.576-408.533334 74.282666 74.24-408.576 408.576h0.085334l-74.24 74.282667-303.104-303.061333 74.24-74.282667z"
						fill="#bbbbbb"
						fill-opacity=".68"
						p-id="13602"
					></path>
				</svg>
			</div>
			<div className="mt-16">
				<div
					className="cursor-pointer underline text-slate-500"
					onClick={() => {
						window.location.reload();
					}}
				>
					再来一组
				</div>
			</div>
		</div>
	);
};

export default Completed;
