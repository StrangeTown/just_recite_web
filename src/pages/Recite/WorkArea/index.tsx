import { useEffect } from "react";
import { ArrowDownKey, ArrowLeftKey, ArrowRightKey, ArrowUpKey } from "./keys";
import ReciteButton from "./ReciteButton";
import { tStringItem } from "../../../data";
import { useTranslation } from "react-i18next";
import { selectEnFont } from "../../../store/slices/settingSlice";
import { useAppSelector } from "../../../store/hooks";
import Translation from "./Translation";

interface IWorkAreaProps {
	item: tStringItem;
	answerVisible: boolean;
	handleDisplayClick: () => void;
	handleOkClick: () => void;
	handleNotClick: () => void;
}
const WorkArea = ({
	item,
	answerVisible,
	handleDisplayClick,
	handleOkClick,
	handleNotClick,
}: IWorkAreaProps) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				if (answerVisible) {
					handleNotClick();
				}
			} else if (e.key === "ArrowRight") {
				if (answerVisible) {
					handleOkClick();
				}
			} else if (e.key === "ArrowUp") {
				if (!answerVisible) {
					handleDisplayClick();
				}
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleDisplayClick, handleNotClick, handleOkClick]);

	const { t } = useTranslation();

	const enFont = useAppSelector(selectEnFont);

	interface IEnFonts {
		[key: string]: string;
	}

	const enFonts: IEnFonts = {
		Satisfy: "font-[Satisfy]",
		Roboto: "font-[Roboto]",
	};
	const fontCls = enFonts[enFont];

	const textSizeCls = item.en.length > 50 ? "text-2xl" : "text-3xl";

	return (
		<div className="w-full h-full flex flex-col pt-10">
			{/* Answer */}
			<div className="flex-1 h-32 w-full flex items-center justify-center p-4">
				{answerVisible && (
					<div className={`${textSizeCls} text-slate-600 ${fontCls}`}>
						{item.en}
					</div>
				)}
			</div>

			{/* Tanslation */}
			<div className="flex flex-col items-center p-4">
				<Translation string={item.zh} keyText={item.hook?.text} />
			</div>

			{/* Action Buttons */}
			<div className="w-full h-72 flex justify-center mt-20">
				<div className="w-full flex flex-col items-center bg-slate-50 p-10 pt-20 rounded-tl-[20px] rounded-tr-[20px]">
					<div className="">
						{answerVisible ? (
							<div className="flex justify-center gap-6">
								<ReciteButton onClick={handleNotClick}>
									<div className="flex items-center gap-1">
										<div className="w-max">{t("notRemember")}</div>
										<ArrowLeftKey />
									</div>
								</ReciteButton>
								<ReciteButton onClick={handleOkClick}>
									<div className="flex items-center gap-1">
										<div className="w-max">{t("remember")}</div>
										<ArrowRightKey />
									</div>
								</ReciteButton>
							</div>
						) : (
							<div className="flex justify-center">
								<ReciteButton onClick={handleDisplayClick}>
									<div className="flex items-center gap-1">
										<div className="w-max">{t("display")}</div>
										<ArrowUpKey />
									</div>
								</ReciteButton>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkArea;
