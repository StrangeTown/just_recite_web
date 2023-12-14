import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectRandomStrings } from "../../../store/slices/stringSlice";
import { AiOutlineClose } from "react-icons/ai";
import ReciteButton from "../WorkArea/ReciteButton";
import { ArrowDownKey } from "../WorkArea/keys";
import { useTranslation } from "react-i18next";
import HookText from "./HookText";
import ProgressBackground from "./ProgressBg";

const progressGridLength = 600;
const totalProgressIndexArr = Array.from(
	{ length: progressGridLength },
	(_, i) => i
);

interface CrazyPracticeProps {
	onClose: () => void;
}
const CrazyPractice = ({ onClose }: CrazyPracticeProps) => {
	const strings = useAppSelector(selectRandomStrings);
	const [activeStringIndex, setActiveStringIndex] = useState(0);
	const [parcticeCount, setParcticeCount] = useState(0);
	const { t } = useTranslation();
	const [activeIndexArr, setActiveIndexArr] = useState<number[]>([]);

	const string = strings[activeStringIndex];

	const addActiveIndex = useCallback(() => {
		const leftProgressIndexArr = totalProgressIndexArr.filter(
			(item) => !activeIndexArr.includes(item)
		);
		const randomIndex = Math.floor(Math.random() * leftProgressIndexArr.length);
		const newActiveIndexArr = [
			...activeIndexArr,
			leftProgressIndexArr[randomIndex],
		];
		setActiveIndexArr(newActiveIndexArr);
	}, [activeIndexArr]);

	const handleNextClick = useCallback(() => {
		const newRandomIndex = Math.floor(Math.random() * strings.length);
		if (newRandomIndex === activeStringIndex) {
			handleNextClick();
		} else {
			setActiveStringIndex(newRandomIndex);
			setParcticeCount(parcticeCount + 1);
			addActiveIndex();
		}
	}, [activeStringIndex, strings, parcticeCount, addActiveIndex]);

	const hookText = string.hook?.text || "";
	// const translationElement =
	//   string.zh?.replace(
	//     new RegExp(hookText, "gi"),
	//     "<span class='highlighter'>$&</span>"
	//   ) || ""

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowDown") {
				handleNextClick();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleNextClick]);

	const countString = `${parcticeCount}/1000`;

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center">
			<div className="absolute inset-x-0 bottom-0 p-1">
				<ProgressBackground
					len={progressGridLength}
					activeIndexArr={activeIndexArr}
				/>
			</div>
			<div className="absolute top-0 right-0 p-4">
				<AiOutlineClose
					className="text-2xl text-slate-500 cursor-pointer"
					onClick={() => {
						onClose();
					}}
				/>
			</div>
			<div className="flex flex-col items-center">
				{/* Count */}
				{/* <div className="text-sm text-slate-500 mb-6">{countString}</div> */}

				{/* Hook Text */}
				<HookText key={hookText} hookText={hookText} string={string.zh} />

				{/* Action */}
				<div className="mt-6">
					<ReciteButton onClick={handleNextClick}>
						<div className="flex items-center gap-1">
							<div className="w-max">{t("next")}</div>
							<ArrowDownKey />
						</div>
					</ReciteButton>
				</div>
			</div>
		</div>
	);
};

export default CrazyPractice;
