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
import { setCrazyModeVisible } from "./store/slices/recitePageSlice";
import { isLargeScreen } from "./utils";

function App() {
	const dispatch = useAppDispatch();
	const [settingsVisible, setSettingsVisible] = useState(false);
	// const [contactModalVisible, setContactModalVisible] = useState(false);
	const contactModalVisible = useAppSelector(selectContactUsVisible);
	const [isLarge, setIsLarge] = useState(isLargeScreen());

	useEffect(() => {
		const handleResize = () => {
			setIsLarge(isLargeScreen());
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const changeContactUsVisiblity = (visible: boolean) => {
		dispatch(setContactUsVisible(visible));
	};

	useEffect(() => {
		generateItems();
	}, [dispatch]);

	const settingsComponentVisible = isLarge || settingsVisible;

	return (
		<>
			<div className="App fixed left-0 top-0 bottom-0 right-0 flex">
				<div className="flex flex-col flex-1">
					{/* Header */}
					<div className="border-b lg:hidden">
						<Header
							onSettingsClick={() => setSettingsVisible(!settingsVisible)}
						/>
					</div>

					{/* Content */}
					<div className="flex-1 flex">
						<div className="flex-1">
							<Home />
						</div>
					</div>
				</div>

				{/* Settings */}
				{settingsComponentVisible && (
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

			{contactModalVisible && (
				<ContactModal onClose={() => changeContactUsVisiblity(false)} />
			)}
		</>
	);
}

export default App;
