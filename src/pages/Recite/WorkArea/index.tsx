import { useEffect } from "react";
import { ArrowDownKey, ArrowLeftKey, ArrowRightKey, ArrowUpKey } from "./keys";
import ReciteButton from "./ReciteButton";
import { tStringItem } from "../../../data";

interface IWorkAreaProps {
	item: tStringItem;
	answerVisible: boolean;
	handleDisplayClick: () => void;
	handleOkClick: () => void;
	handleNotClick: () => void;
}
const WorkArea = ({
	item,
	answerVisible,
	handleDisplayClick,
	handleOkClick,
	handleNotClick,
}: IWorkAreaProps) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				if (answerVisible) {
					handleNotClick();
				}
			} else if (e.key === "ArrowRight") {
				if (answerVisible) {
					handleOkClick();
				}
			} else if (e.key === "ArrowUp") {
				if (!answerVisible) {
					handleDisplayClick();
				}
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleDisplayClick, handleNotClick, handleOkClick]);

	return (
		<div>
			{/* Answer */}
			<div className="h-32">
				{answerVisible && (
					<div className="text-3xl text-slate-600">{item.en}</div>
				)}
			</div>

			{/* Keys */}
			<div className="flex flex-col items-center">
				<div className="mt-2 flex items-center">
					<div className="text-slate-300 text-xs">译文：</div>
					<div className="text-slate-600 text-base">{item.zh}</div>
				</div>
				<div className="flex items-center mt-20">
					<div className="text-slate-300 text-xs">钩子：</div>
					<div>{item.hook?.text}</div>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="mt-6">
				{answerVisible ? (
					<div className="flex justify-center gap-6">
						<ReciteButton onClick={handleNotClick}>
							忘记
							<ArrowLeftKey />
						</ReciteButton>
						<ReciteButton onClick={handleOkClick}>
							记得
							<ArrowRightKey />
						</ReciteButton>
					</div>
				) : (
					<div className="flex justify-center">
						<ReciteButton onClick={handleDisplayClick}>
							英文
							<ArrowUpKey />
						</ReciteButton>
					</div>
				)}
			</div>
		</div>
	);
};

export default WorkArea;
