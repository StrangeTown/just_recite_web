import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setCycleModeVisible } from "../../../store/slices/recitePageSlice";
import { selectRandomStrings } from "../../../store/slices/stringSlice";
import { useEffect, useRef, useState } from "react";

const CycleMode = () => {
	const dispatch = useAppDispatch();
	const strings = useAppSelector(selectRandomStrings);
	const stringsLength = strings.length;
	const [activeStringIndex, setActiveStringIndex] = useState(0);
	const interval = useRef<number | null>(null);

	const string = strings[activeStringIndex];

	useEffect(() => {
		// set random index
		interval.current = window.setInterval(() => {
			const newRandomIndex = Math.floor(Math.random() * stringsLength);
			setActiveStringIndex(newRandomIndex);
			console.log(newRandomIndex);
		}, 3000);

		return () => {
			if (interval.current) {
				window.clearInterval(interval.current);
			}
		};
	}, [stringsLength]);

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center">
			<div className="absolute top-0 right-0 p-4">
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
