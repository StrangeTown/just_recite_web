import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setCycleModeVisible } from "../../../store/slices/recitePageSlice";
import { selectRandomStrings } from "../../../store/slices/stringSlice";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

const CycleMode = () => {
	const dispatch = useAppDispatch();
	const strings = useAppSelector(selectRandomStrings);
	const stringsLength = strings.length;
	const [activeStringIndex, setActiveStringIndex] = useState(0);
	const interval = useRef<number | null>(null);
	const progressCube = useRef<HTMLDivElement | null>(null);

	useEffect(() => {}, []);

	const string = strings[activeStringIndex];

	const animeCube = () => {
		progressCube.current!.style.width = "0";
		anime({
			targets: progressCube.current,
			width: "100%",
			duration: 3000,
			easing: "linear",
		});
	};

	useEffect(() => {
		animeCube();
	}, []);

	useEffect(() => {
		// set random index
		interval.current = window.setInterval(() => {
			const newRandomIndex = Math.floor(Math.random() * stringsLength);
			setActiveStringIndex(newRandomIndex);
			animeCube();
		}, 3000);

		return () => {
			if (interval.current) {
				window.clearInterval(interval.current);
			}
		};
	}, [stringsLength]);

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center">
			<div className="absolute top-0 left-0 w-full">
				<div ref={progressCube} className="w-[2px] h-[2px] bg-slate-300"></div>
			</div>
			<div className="absolute top-4 right-4">
				<AiOutlineClose
					className="text-2xl text-slate-500 cursor-pointer"
					onClick={() => {
						dispatch(setCycleModeVisible(false));
					}}
				/>
			</div>
			<div className="flex flex-col items-center w-full px-3">
				{/* <div className="text-2xl text-slate-500">{string.en}</div> */}
				<div className="text-2xl text-slate-500">{string.zh}</div>
			</div>
		</div>
	);
};

export default CycleMode;
