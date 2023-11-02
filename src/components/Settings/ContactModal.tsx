import { useState } from "react";
import contactImg from "../../assets/images/WechatIMG198.jpg";

const Loading = () => {
	return (
		<div className="fixed top-0 left-0 w-screen h-full z-10 inset-0 bg-[#091a12] backdrop-opacity-10 flex items-center justify-center">
			<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-400"></div>
		</div>
	);
};
interface IContactModalProps {
	onClose: () => void;
}
const ContactModal = ({ onClose }: IContactModalProps) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className="fixed top-0 left-0 w-screen h-full z-10 inset-0 bg-[#091a12] backdrop-opacity-10 flex items-center justify-center">
			{isLoading && <Loading />}

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

			{/* Conatct Image */}
			<div className="max-w-sm">
				<img
					src={contactImg}
					alt=""
					onLoad={() => setIsLoading(false)}
					onError={() => setIsLoading(false)}
				/>
			</div>
		</div>
	);
};

export default ContactModal;
