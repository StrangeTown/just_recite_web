import { useTranslation } from "react-i18next";
import appLocalstorage from "../../utils/appLocalstorage";
import SettingsItem from "./SettingsItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectEnFont, setEnFont } from "../../store/slices/settingSlice";
import { useEffect, useState } from "react";
import {
	setCrazyModeVisible,
	setCycleModeVisible,
} from "../../store/slices/recitePageSlice";
import {
	MdBolt,
	MdCached,
	MdOutlineFeedback,
	MdOutlineShare,
	MdRefresh,
} from "react-icons/md";
import { getCurrentProgress } from "../../services";

const languageArr = ["en", "zh"];
const enFontArr = ["Satisfy", "Roboto"];

interface ISettingsProps {
	onClose: () => void;
	onContactClick?: () => void;
}
const Settings = ({ onClose, onContactClick }: ISettingsProps) => {
	const progress = getCurrentProgress();
	const [copied, setCopied] = useState(false);
	const { i18n } = useTranslation();
	const dispatch = useAppDispatch();
	const enFont = useAppSelector(selectEnFont);
	const [backdropBgOpacityCls, setBackdropBgOpacityCls] =
		useState("bg-opacity-0");
	const [contentTranslateX, setContentTranslateX] =
		useState("translate-x-full");

	useEffect(() => {
		setTimeout(() => {
			setBackdropBgOpacityCls("bg-opacity-50");
			setContentTranslateX("translate-x-0");
		}, 0);
	}, []);

	const currentLanguage =
		appLocalstorage.getItem(appLocalstorage.keys.language) || "en";

	const handleLanguageClick = (language: string) => {
		appLocalstorage.setItem(appLocalstorage.keys.language, language);
		i18n.changeLanguage(language);
	};
	const handleEnFontClick = (font: string) => {
		appLocalstorage.setItem(appLocalstorage.keys.enFont, font);
		dispatch(setEnFont(font));
	};

	// check if the click is on the backdrop
	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target !== e.currentTarget) {
			return;
		}

		setBackdropBgOpacityCls("bg-opacity-0");
		setContentTranslateX("translate-x-full");
		setTimeout(() => {
			onClose();
		}, 500);
	};

	const copyLink = () => {
		const link = window.location.href;
		navigator.clipboard.writeText(link);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	const progressString = `${progress.current} / ${progress.total}`;

	return (
		<div
			className={`fixed top-0 right-0 h-full w-full flex z-100 bg-black ${backdropBgOpacityCls} transition-all duration-500 flex justify-end`}
			onClick={handleBackdropClick}
		>
			<div
				className={`w-2/3 md:w-1/4 h-full pt-6 pl-6 pb-3 bg-white ${contentTranslateX} transition-all duration-500 flex flex-col justify-between`}
			>
				<div className=" flex flex-col gap-y-6">
					<SettingsItem
						onClick={() => {
							dispatch(setCrazyModeVisible(true));
							onClose();
						}}
						icon={<MdBolt className="text-slate-600" />}
						name="Hook Mode"
					/>
					<SettingsItem
						onClick={() => {
							dispatch(setCycleModeVisible(true));
							onClose();
						}}
						icon={<MdCached className="text-slate-600" />}
						name="Cycle Mode"
					/>

					{/* <Refresh /> */}
					<SettingsItem
						onClick={() => {
							window.location.reload();
						}}
						icon={<MdRefresh className="text-slate-600" />}
						name="Refresh"
					/>

					<SettingsItem
						onClick={() => {
							copyLink();
						}}
						icon={<MdOutlineShare className="text-slate-600" />}
						name={copied ? "Link Copied! 🎉🔗" : "Share"}
					/>

					<SettingsItem
						onClick={() => {
							onContactClick?.();
							onClose();
						}}
						icon={<MdOutlineFeedback className="text-slate-600" />}
						name="Contact Us"
					/>
				</div>
				<div className="text-sm text-slate-600">{progressString}</div>
			</div>
		</div>
	);
};

export default Settings;
