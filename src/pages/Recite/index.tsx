import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectRandomStrings } from "../../store/slices/stringSlice";
import WorkArea from "./WorkArea";
import Completed from "./Completed";
import CrazyPractice from "./CrazyPractice";
import { generateItems, saveIdsToLocalStorage } from "../../services";
import {
	selectCracyModeVisible,
	selectCycleModeVisible,
	setCrazyModeVisible,
} from "../../store/slices/recitePageSlice";
import CycleMode from "./CycleMode";

const Recite = () => {
	const randomStrings = useAppSelector(selectRandomStrings);
	const [activeStringIndex, setActiveStringIndex] = useState(0);
	const [answerVisible, setAnswerVisible] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const string = randomStrings[activeStringIndex];
	const crazyModeVisible = useAppSelector(selectCracyModeVisible);
	const cycleModeIsOn = useAppSelector(selectCycleModeVisible);
	const dispatch = useAppDispatch();

	const toggleCrazyMode = (isOn: boolean) => {
		dispatch(setCrazyModeVisible(isOn));
	};

	const handleDisplayClick = () => {
		setAnswerVisible(true);
	};
	const handleOkClick = () => {
		setAnswerVisible(false);
		if (activeStringIndex < randomStrings.length - 1) {
			setActiveStringIndex(activeStringIndex + 1);
		} else {
			setIsFinished(true);
			const ids = randomStrings.map((item) => item.id);
			saveIdsToLocalStorage(ids);
		}
	};
	const handleNotClick = () => {
		setAnswerVisible(false);
		setActiveStringIndex(0);
	};

	return (
		<div className="h-full flex items-center justify-center p-0">
			{crazyModeVisible && (
				<CrazyPractice
					onClose={() => {
						toggleCrazyMode(false);
					}}
				/>
			)}

			{cycleModeIsOn && <CycleMode />}

			{isFinished ? (
				<Completed
					onCrazyPracticeClick={() => {
						toggleCrazyMode(true);
					}}
					onRestartClick={() => {
						setIsFinished(false);
						setActiveStringIndex(0);
					}}
					onResetClick={() => {
						generateItems();
						setIsFinished(false);
						setActiveStringIndex(0);
					}}
				/>
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
