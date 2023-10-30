
interface HeaderProps {
  onSettingsClick: () => void;
}
const Header = ({onSettingsClick}: HeaderProps) => {
  return (
    <div className="flex justify-end px-4 py-2 border-b">
				<div
					className="text-slate-500"
					onClick={() => {
            onSettingsClick();
					}}
				>
					Settings
				</div>
			</div>
  )
}

export default Header;