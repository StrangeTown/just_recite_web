import "./App.css";
import Home from "./pages/Home";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { useEffect, useState } from "react";
import Settings from "./components/Settings";
import Header from "./components/Header";
import { generateItems } from "./services";
import ContactModal from "./components/Settings/ContactModal";
import {
	selectContactUsVisible,
	setContactUsVisible,
} from "./store/slices/settingSlice";

function App() {
	const dispatch = useAppDispatch();
	const [settingsVisible, setSettingsVisible] = useState(false);
	// const [contactModalVisible, setContactModalVisible] = useState(false);
	const contactModalVisible = useAppSelector(selectContactUsVisible);

	const changeContactUsVisiblity = (visible: boolean) => {
		dispatch(setContactUsVisible(visible));
	};

	useEffect(() => {
		generateItems();
	}, [dispatch]);

	return (
		<>
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
							onContactClick={() => {
								changeContactUsVisiblity(true);
							}}
						/>
					)}
				</div>
			</div>

			{contactModalVisible && (
				<ContactModal onClose={() => changeContactUsVisiblity(false)} />
			)}
		</>
	);
}

export default App;
