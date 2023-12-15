import { MdLightbulb, MdOutlineLightbulb } from "react-icons/md";
interface LightButtonProps {
	onClick: () => void;
	isLight: boolean;
}
const LightButton = ({ onClick, isLight }: LightButtonProps) => {
	const containerBgCls = isLight ? "bg-slate-50" : "bg-slate-900";
	return (
		<div
			className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${containerBgCls}`}
			onClick={onClick}
		>
			{isLight ? (
				<MdOutlineLightbulb className="text-slate-300 text-lg" />
			) : (
				<MdLightbulb className="text-slate-300 text-lg" />
			)}
		</div>
	);
};

export default LightButton;
