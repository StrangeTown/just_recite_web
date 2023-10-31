import { useEffect } from "react";
import { ArrowDownKey, ArrowLeftKey, ArrowRightKey, ArrowUpKey } from "./keys";
import ReciteButton from "./ReciteButton";
import { tStringItem } from "../../../data";
import { useTranslation } from "react-i18next";
import { selectEnFont } from "../../../store/slices/settingSlice";
import { useAppSelector } from "../../../store/hooks";

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

	const {t} = useTranslation();

	const enFont = useAppSelector(selectEnFont)

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
		<div className="w-full">
			{/* Answer */}
			<div className="h-32 w-full">
				{answerVisible && (
					<div className={`${textSizeCls} text-slate-600 ${fontCls}`}>
						{item.en}
					</div>
				)}
			</div>

			{/* Keys */}
			<div className="flex flex-col items-center">
				<div className="mt-2 flex items-start">
					<div className="text-slate-300 text-xs min-w-max leading-6">{t('translation')}</div>
					<div className="text-slate-600 text-base">{item.zh}</div>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="flex justify-center">
				<div className="w-72 mt-20 flex flex-col items-center bg-slate-50 p-10 rounded-lg">
					<div className="flex items-center relative">
						{/* left of the text */}
						<div className="text-slate-300 text-xs absolute bottom-0 transform -translate-x-full h-full flex items-center w-max">
							{t('hook')}
						</div>

						<div className="text-lg">{item.hook?.text}</div>
					</div>

					<div className="mt-4">
						{answerVisible ? (
							<div className="flex justify-center gap-6">
								<ReciteButton onClick={handleNotClick}>
									<div className="flex items-center gap-1">
										<div className="w-max">
											{t('notRemember')}
										</div>
										<ArrowLeftKey />
									</div>
								</ReciteButton>
								<ReciteButton onClick={handleOkClick}>
									<div className="flex items-center gap-1">
										<div className="w-max">
											{t('remember')}
										</div>
										<ArrowRightKey />
									</div>
								</ReciteButton>
							</div>
						) : (
							<div className="flex justify-center">
								<ReciteButton onClick={handleDisplayClick}>
									<div className="flex items-center gap-1">
										<div className="w-max">
											{t('display')}
										</div>
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
