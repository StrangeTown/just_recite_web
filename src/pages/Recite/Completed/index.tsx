import { MdDone } from "react-icons/md";
import { OneKey, ThreeKey, TwoKey } from "../WorkArea/keys";
import { useEffect } from "react";

interface CompletedProps {
	onCrazyPracticeClick: () => void;
	onRestartClick: () => void;
	onResetClick: () => void;
}
const Completed = ({
	onCrazyPracticeClick,
	onRestartClick,
	onResetClick,
}: CompletedProps) => {
	const restart = () => {
		onRestartClick();
	};
	const reset = () => {
		onResetClick();
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "1") {
				reset();
			} else if (e.key === "2") {
				onCrazyPracticeClick();
			} else if (e.key === "3") {
				restart();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div className="flex flex-col items-center">
			{/* completed icon */}
			<div>
				<MdDone className="text-4xl text-slate-300" />
			</div>
			<div className="mt-16">
				<div
					className="cursor-pointer text-slate-500 px-3 py-2  shadow justify-center flex items-center gap-x-1"
					onClick={() => {
						reset();
					}}
				>
					新的一组
					<OneKey />
				</div>
				<div
					className="mt-4 cursor-pointer text-slate-500 px-3 py-2 shadow justify-center flex items-center gap-x-1"
					onClick={onCrazyPracticeClick}
				>
					利用<span className="highlighter">钩子</span>疯狂复习
					<TwoKey />
				</div>
				<div
					className="mt-4 cursor-pointer text-slate-500 px-3 py-2 shadow justify-center flex items-center gap-x-1"
					onClick={restart}
				>
					重新背记
					<ThreeKey />
				</div>
			</div>
		</div>
	);
};

export default Completed;
