import { useTranslation } from "react-i18next";

interface HeaderProps {
	onSettingsClick: () => void;
}
const Header = ({ onSettingsClick }: HeaderProps) => {
	const { t } = useTranslation();

	return (
		<div className="flex justify-end px-4 py-2 border-b">
			<div
				className="text-slate-500"
				onClick={() => {
					onSettingsClick();
				}}
			>
				{t("settigns")}
			</div>
		</div>
	);
};

export default Header;
