import { useTranslation } from "react-i18next";

interface ITranslationProps {
	string?: string;
	keyText?: string;
}
const Translation = ({ string, keyText = "" }: ITranslationProps) => {
	// keyText = 'nba'
	// string = 'I like nba'
	// const finalValue = 'I like <span>nba</span>'
	const finalValue =
		string?.replace(
			new RegExp(keyText, "gi"),
			"<span class='highlighter'>$&</span>"
		) || "";

	const { t } = useTranslation();
	return (
		<div className="flex items-start">
			<div className="text-slate-300 text-xs min-w-max leading-6">
				{t("translation")}
			</div>
			<div
				className="text-slate-600 text-base"
				dangerouslySetInnerHTML={{
					__html: finalValue,
				}}
			></div>
		</div>
	);
};

export default Translation;
