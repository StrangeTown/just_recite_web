
interface SettingsItemProps {
  options: string[];
  current: string;
  onClick: (option: string) => void;
}
const SettingsItem = ({options, current, onClick}: SettingsItemProps) => {
  return (
    <div className="flex items-center w-full">
				{options.map((item, index) => {
					return (
						<div
							key={index}
							className={`flex-1 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
								current === item ? "underline" : ""
							}`}
							onClick={() => {
								onClick(item);
							}}
						>
							<div>{item}</div>
						</div>
					);
				})}
			</div>
  )
}

export default SettingsItem