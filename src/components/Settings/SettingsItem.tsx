interface SettingsItemProps {
	onClick: () => void;
	icon: React.ReactNode;
	name: string;
}

const SettingsItem = ({ onClick, icon, name }: SettingsItemProps) => {
	return (
		<div
			className="flex items-center gap-x-3 cursor-pointer group/settingsitem"
			onClick={onClick}
		>
			{icon}
			<div className="text-slate-600 text-sm group-hover/settingsitem:text-slate-800">
				{name}
			</div>
		</div>
	);
};
export default SettingsItem;
