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

const languageArr = ["en", "zh"];
const enFontArr = ["Satisfy", "Roboto"];

interface ISettingsProps {
	onClose: () => void;
}
const Settings = ({ onClose }: ISettingsProps) => {
	const { i18n } = useTranslation();
	const dispatch = useAppDispatch();
	const enFont = useAppSelector(selectEnFont);
	const [contactModalVisible, setContactModalVisible] = useState(false);
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
			{contactModalVisible && (
				<ContactModal onClose={() => setContactModalVisible(false)} />
			)}
			<div
				className={`w-2/3 h-full pt-6 pl-6 bg-white ${contentTranslateX} transition-all duration-500 flex flex-col gap-y-6`}
			>
				<SettingsItem
					onClick={() => setContactModalVisible(true)}
					icon={<MdOutlineFeedback />}
					name="Contact Us"
				/>

				{/* <Refresh /> */}
				<SettingsItem
					onClick={() => {
						window.location.reload();
					}}
					icon={<MdRefresh />}
					name="Refresh"
				/>

				<SettingsItem
					onClick={() => {
						dispatch(setCrazyModeVisible(true));
					}}
					icon={<MdBolt />}
					name="Crazy Mode"
				/>
				<SettingsItem
					onClick={() => {
						dispatch(setCycleModeVisible(true));
					}}
					icon={<MdCached />}
					name="Cycle Mode"
				/>
			</div>
		</div>
	);
};

export default Settings;
