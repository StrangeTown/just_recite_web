import { useTranslation } from "react-i18next";

interface HeaderProps {
	onSettingsClick: () => void;
  settingsVisible: boolean;
}
const Header = ({ onSettingsClick, settingsVisible }: HeaderProps) => {
	const { t } = useTranslation();

  const menuColorCls = settingsVisible ? "md:text-slate-500" : "md:text-slate-300";
	return (
		<div className="flex justify-end px-4 py-2 border-b">
			<div
				className={`flex items-center gap-2 text-slate-500 ${menuColorCls}`}
				onClick={() => {
					onSettingsClick();
				}}
			>
        {/* Menu Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
			</div>
		</div>
	);
};

export default Header;
