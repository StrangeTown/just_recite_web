interface SettingsItemProps {
	onClick: () => void;
	icon: React.ReactNode;
	name: string;
}

const SettingsItem = ({ onClick, icon, name }: SettingsItemProps) => {
	return (
		<div className="flex items-center gap-x-3" onClick={onClick}>
			{icon}
			<div className="text-slate-700 text-sm">{name}</div>
		</div>
	);
};
export default SettingsItem;
