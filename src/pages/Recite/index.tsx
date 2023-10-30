import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectRandomStrings } from "../../store/slices/stringSlice";
import WorkArea from "./WorkArea";
import Progress from "./Progress";

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
		<div className="h-full flex items-center justify-center p-3">
			{isFinished ? (
				<div>isFinished</div>
			) : (
				<div className="h-full flex flex-col pt-2 w-full">
          <Progress current={activeStringIndex + 1} total={randomStrings.length} />
          <div className="flex-1 flex items-center justify-center">
            {
							string && <WorkArea
								item={string}
								answerVisible={answerVisible}
								handleDisplayClick={handleDisplayClick}
								handleOkClick={handleOkClick}
								handleNotClick={handleNotClick}
							/>
						}
          </div>
				</div>
			)}
		</div>
	);
};

export default Recite;
