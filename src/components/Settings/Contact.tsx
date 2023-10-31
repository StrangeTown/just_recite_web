import { useState } from "react";
import contactImg from "../../assets/images/WechatIMG198.jpg";

interface IContactModalProps {
	onClose: () => void;
}
const ContactModal = ({ onClose }: IContactModalProps) => {
	return (
		<div className="fixed inset-0 bg-[#091a12] backdrop-opacity-10 flex items-center justify-center">
			{/* close icon */}
			<div className="absolute top-4 right-4 mt-2 mr-2" onClick={onClose}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-slate-500 cursor-pointer"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</div>
			<div className="max-w-sm">
				<img src={contactImg} alt="" />
			</div>
		</div>
	);
};

const Contact = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const handleContactClick = () => {
		setModalVisible(true);
	};

	return (
		<>
			{modalVisible && (
				<ContactModal
					onClose={() => {
						setModalVisible(false);
					}}
				/>
			)}
			<div onClick={handleContactClick}>Contact</div>
		</>
	);
};

export default Contact;
