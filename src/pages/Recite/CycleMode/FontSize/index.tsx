import { MdFormatSize, MdOutlineFormatSize } from "react-icons/md";

interface FontSizeButtonProps {
	onClick: () => void;
	isLight: boolean;
}
const FontSizeButton = ({ onClick, isLight }: FontSizeButtonProps) => {
	const containerBgCls = isLight ? "bg-slate-50" : "bg-slate-900";
	return (
		<div
			className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${containerBgCls}`}
			onClick={onClick}
		>
			{/* <MdFormatSize className="text-slate-300 text-lg" /> */}
			{isLight ? (
				<MdOutlineFormatSize className="text-slate-300 text-lg" />
			) : (
				<MdFormatSize className="text-slate-300 text-lg" />
			)}
		</div>
	);
};

export default FontSizeButton;
