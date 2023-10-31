import { useTranslation } from "react-i18next";
import appLocalstorage from "../../utils/appLocalstorage";
import SettingsItem from "./SettingsItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectEnFont, setEnFont } from "../../store/slices/settingSlice";
import Contact from "./Contact";

const languageArr = ["en", "zh"];
const enFontArr = ["Satisfy", "Roboto"];

const Settings = () => {
	const { i18n } = useTranslation();
	const dispatch = useAppDispatch();
	const enFont = useAppSelector(selectEnFont);

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

	return (
		<div className="w-40 border-l p-1">
			<SettingsItem
				options={languageArr}
				current={currentLanguage}
				onClick={handleLanguageClick}
			/>
			<SettingsItem
				options={enFontArr}
				current={enFont}
				onClick={handleEnFontClick}
			/>
			<Contact />
		</div>
	);
};

export default Settings;
