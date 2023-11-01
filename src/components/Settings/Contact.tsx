interface IContactProps {
  onClick: () => void;
}
const Contact = ({ onClick }: IContactProps) => {
	return (
		<>
			<div onClick={onClick}>Contact</div>
		</>
	);
};

export default Contact;
