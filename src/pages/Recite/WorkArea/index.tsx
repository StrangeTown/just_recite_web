interface IWorkAreaProps {
	zh: string;
	answer: string;
	answerVisible: boolean;
	handleDisplayClick: () => void;
	handleOkClick: () => void;
	handleNotClick: () => void;
}
const WorkArea = ({
  zh,
  answer,
	answerVisible,
	handleDisplayClick,
	handleOkClick,
	handleNotClick,
}: IWorkAreaProps) => {
	return (
		<div>
      <div className="h-10">
			  {answerVisible && <div className="text-opacity-5 text-black">{answer}</div>}
      </div>
			<div className="text-opacity-5 text-black">{zh}</div>
			{answerVisible ? (
				<div className="flex justify-center gap-5">
					<button onClick={handleNotClick} className="text-opacity-5 text-black">not</button>
					<button onClick={handleOkClick} className="text-opacity-5 text-black">ok</button>
				</div>
			) : (
				<div>
					<button onClick={handleDisplayClick} className="text-opacity-5 text-black">display</button>
				</div>
			)}
		</div>
	);
};

export default WorkArea;
