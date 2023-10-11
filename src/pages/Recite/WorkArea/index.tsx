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
		<>
			<div>{zh}</div>
			{answerVisible && <div>{answer}</div>}
			{answerVisible ? (
				<div>
					<button onClick={handleNotClick}>not</button>
					<button onClick={handleOkClick}>ok</button>
				</div>
			) : (
				<div>
					<button onClick={handleDisplayClick}>display</button>
				</div>
			)}
		</>
	);
};

export default WorkArea;
