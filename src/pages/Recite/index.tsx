import { useState } from "react";
import { globalStrings } from "../../data";
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
		<div>
			{isFinished ? (
				<div>isFinished</div>
			) : (
				<WorkArea
					zh={string.zh}
					answer={string.en}
					answerVisible={answerVisible}
					handleDisplayClick={handleDisplayClick}
					handleOkClick={handleOkClick}
					handleNotClick={handleNotClick}
				/>
			)}
		</div>
	);
};

export default Recite;
