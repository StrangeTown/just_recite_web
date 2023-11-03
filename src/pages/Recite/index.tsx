import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectRandomStrings } from "../../store/slices/stringSlice";
import WorkArea from "./WorkArea";

const Recite = () => {
	const randomStrings = useAppSelector(selectRandomStrings);
	const [activeStringIndex, setActiveStringIndex] = useState(0);
	const [answerVisible, setAnswerVisible] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const string = randomStrings[activeStringIndex];

	const handleDisplayClick = () => {
		setAnswerVisible(true);
	};
	const handleOkClick = () => {
		setAnswerVisible(false);
		if (activeStringIndex < randomStrings.length - 1) {
			setActiveStringIndex(activeStringIndex + 1);
		} else {
			setIsFinished(true);
		}
	};
	const handleNotClick = () => {
		setAnswerVisible(false);
		setActiveStringIndex(0);
	};

	return (
		<div className="h-full flex items-center justify-center p-0 md:p-3">
			{isFinished ? (
				<div>isFinished</div>
			) : (
				<div className="h-full w-full">
					<WorkArea
						progressCurrent={activeStringIndex + 1}
						progressTotal={randomStrings.length}
						item={string}
						answerVisible={answerVisible}
						handleDisplayClick={handleDisplayClick}
						handleOkClick={handleOkClick}
						handleNotClick={handleNotClick}
					/>
				</div>
			)}
		</div>
	);
};

export default Recite;
