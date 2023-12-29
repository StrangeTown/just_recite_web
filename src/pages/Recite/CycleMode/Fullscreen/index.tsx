import { useEffect, useState } from "react";
import {
	MdFullscreen,
	MdFullscreenExit,
	MdOutlineFullscreen,
	MdOutlineFullscreenExit,
} from "react-icons/md";

interface FullscreenProps {
	isLight: boolean;
}
const Fullscreen = ({ isLight }: FullscreenProps) => {
	const containerBgCls = isLight ? "bg-slate-50" : "bg-slate-900";
	const [isFullscreen, setIsFullscreen] = useState(false);

	useEffect(() => {
		const handleFullScreenChange = () => {
			setIsFullscreen(document.fullscreenElement !== null);
		};
		document.addEventListener("fullscreenchange", handleFullScreenChange);
		return () => {
			document.removeEventListener("fullscreenchange", handleFullScreenChange);
		};
	}, []);

	const icon = {
		isFullscreen: {
			light: <MdOutlineFullscreenExit className="text-slate-300 text-lg" />,
			dark: <MdFullscreenExit className="text-slate-300 text-lg" />,
		},
		notFullscreen: {
			light: <MdOutlineFullscreen className="text-slate-300 text-lg" />,
			dark: <MdFullscreen className="text-slate-300 text-lg" />,
		},
	};

	const iconToRender = isFullscreen
		? icon.isFullscreen[isLight ? "light" : "dark"]
		: icon.notFullscreen[isLight ? "light" : "dark"];

	return (
		<div
			className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${containerBgCls}`}
			onClick={() => {
				if (isFullscreen) {
					document.exitFullscreen();
				} else {
					document.documentElement.requestFullscreen();
				}
			}}
		>
			{/* <MdFormatSize className="text-slate-300 text-lg" /> */}
			{/* {isLight ? (
				<MdOutlineFullscreen className="text-slate-300 text-lg" />
			) : (
				<MdFormatSize className="text-slate-300 text-lg" />
			)} */}
			{iconToRender}
		</div>
	);
};

export default Fullscreen;
