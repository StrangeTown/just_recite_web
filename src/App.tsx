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

	useEffect(() => {
		const randomStrings = getRandomStrings(10);
		dispatch(setRandomStrings(randomStrings));
	}, []);

	return (
		<div className="App h-screen flex flex-col">
			<Header
				settingsVisible={settingsVisible}
				onSettingsClick={() => setSettingsVisible(!settingsVisible)}
			/>
			<div className="flex-1 flex">
				<div className="flex-1">
					<Home />
				</div>
				{settingsVisible && <Settings />}
			</div>
		</div>
	);
}

export default App;
