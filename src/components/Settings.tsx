import appLocalstorage from "../utils/appLocalstorage";

const Settings = () => {
	const currentLanguage =
		appLocalstorage.getItem(appLocalstorage.keys.language) || "en";

	const handleLanguageClick = (language: string) => {
		appLocalstorage.setItem(appLocalstorage.keys.language, language);
		window.location.reload();
	};
	return (
		<div className="w-40 border-l p-1">
			<div className="flex items-center w-full">
				{["en", "zh"].map((item, index) => {
					return (
						<div
							key={index}
							className={`flex-1 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
								currentLanguage === item
									? "bg-slate-500 text-white"
									: "text-slate-500"
							}`}
							onClick={() => {
								handleLanguageClick(item);
							}}
						>
							<div>{item}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Settings;
