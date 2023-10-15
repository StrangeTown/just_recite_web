import { useEffect } from "react";
import { ArrowDownKey, ArrowLeftKey, ArrowRightKey, ArrowUpKey } from "./keys";
import ReciteButton from "./ReciteButton";

interface IWorkAreaProps {
	zh: string;
	answer: string;
	answerVisible: boolean;
	handleDisplayClick: () => void;
	handleOkClick: () => void;
	handleNotClick: () => void;
}
const WorkArea = ({
	zh,
	answer,
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
			<div className="h-24">
				{answerVisible && (
					<div className=" text-black">{answer}</div>
				)}
			</div>
			<div className=" text-black">{zh}</div>
			{answerVisible ? (
				<div className="flex justify-center gap-6">
					<ReciteButton onClick={handleNotClick}>
						Not
						<ArrowLeftKey />
					</ReciteButton>
					<ReciteButton onClick={handleOkClick}>
						OK
						<ArrowRightKey />
					</ReciteButton>
				</div>
			) : (
				<div className="flex justify-center">
					<ReciteButton onClick={handleDisplayClick}>
						Display
						<ArrowUpKey />
					</ReciteButton>
				</div>
			)}
		</div>
	);
};

export default WorkArea;
