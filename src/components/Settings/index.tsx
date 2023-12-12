import { useTranslation } from "react-i18next";
import appLocalstorage from "../../utils/appLocalstorage";
import SettingsItem from "./SettingsItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectEnFont, setEnFont } from "../../store/slices/settingSlice";
import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import {
	setCrazyModeVisible,
	setCycleModeVisible,
} from "../../store/slices/recitePageSlice";
import { MdBolt, MdCached, MdOutlineFeedback, MdRefresh } from "react-icons/md";
import { on } from "events";

const languageArr = ["en", "zh"];
const enFontArr = ["Satisfy", "Roboto"];

interface ISettingsProps {
	onClose: () => void;
	onContactClick?: () => void;
}
const Settings = ({ onClose, onContactClick }: ISettingsProps) => {
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

	return (
		<div
			className={`fixed top-0 right-0 h-full w-full flex z-100 bg-black ${backdropBgOpacityCls} transition-all duration-500 flex justify-end`}
			onClick={handleBackdropClick}
		>
			<div
				className={`w-2/3 md:w-1/4 h-full pt-6 pl-6 bg-white ${contentTranslateX} transition-all duration-500 flex flex-col gap-y-6`}
			>
				<SettingsItem
					onClick={() => {
						onContactClick?.();
						onClose();
					}}
					icon={<MdOutlineFeedback className="text-slate-600" />}
					name="Contact Us"
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
						dispatch(setCrazyModeVisible(true));
						onClose();
					}}
					icon={<MdBolt className="text-slate-600" />}
					name="Crazy Mode"
				/>
				<SettingsItem
					onClick={() => {
						dispatch(setCycleModeVisible(true));
						onClose();
					}}
					icon={<MdCached className="text-slate-600" />}
					name="Cycle Mode"
				/>
			</div>
		</div>
	);
};

export default Settings;
