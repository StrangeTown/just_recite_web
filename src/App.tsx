import "./App.css";
import Home from "./pages/Home";
import { useAppDispatch } from "./store/hooks";
import { getRandomStrings } from "./utils/data";
import { setRandomStrings } from "./store/slices/stringSlice";
import { useEffect, useState } from "react";
import Settings from "./components/Settings";
import Header from "./components/Header";

function App() {
	const dispatch = useAppDispatch();
	const [settingsVisible, setSettingsVisible] = useState(false);

	const preloadImages = (urls: string[]) => {
		for (const url of urls) {
			const img = new Image();
			img.src = url;
		}
	};
	useEffect(() => {
		const randomStrings = getRandomStrings(10);

		const imageUrls = randomStrings
			.map((s) => s.hook?.imgUrl)
			.filter((img) => img) as string[];
		preloadImages(imageUrls);

		dispatch(setRandomStrings(randomStrings));
	}, [dispatch]);

	return (
		<div className="App fixed left-0 top-0 bottom-0 right-0 flex flex-col">
			<div className="border-b">
				<Header
					settingsVisible={settingsVisible}
					onSettingsClick={() => setSettingsVisible(!settingsVisible)}
				/>
			</div>
			<div className="flex-1 flex">
				<div className="flex-1">
					<Home />
				</div>
				{settingsVisible && (
					<Settings
						onClose={() => {
							setSettingsVisible(false);
						}}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
