import { useRef } from "react";
import { FaPlay } from "react-icons/fa";

interface IAudioProps {
	src: string;
}
const Audio = ({ src }: IAudioProps) => {
	const audioEleRef = useRef<HTMLAudioElement>(null);

	return (
		<div className="w-full flex justify-center">
			<audio ref={audioEleRef} className="hidden" src={src} controls></audio>
			<FaPlay
				className="cursor-pointer text-slate-400"
				onClick={() => {
					audioEleRef.current?.play();
				}}
			/>
		</div>
	);
};

export default Audio;
