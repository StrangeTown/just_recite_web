interface IContactProps {
  onClick: () => void;
}
const Contact = ({ onClick }: IContactProps) => {
	return (
		<>
			<div onClick={onClick}>Contact Us</div>
		</>
	);
};

export default Contact;
