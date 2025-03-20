import store from "../store"
import { IStoreStringItem, setRandomStrings } from "../store/slices/stringSlice"
import appLocalstorage from "../utils/appLocalstorage"
import { getRandomStrings, getStringById, getTotalLength } from "../utils/data";
const preloadImages = (urls: string[]) => {
	for (const url of urls) {
		const img = new Image();
		img.src = url;
	}
};

const getPreviousIds = () => {
	const history = appLocalstorage.getItem(appLocalstorage.keys.history);
	// get last 10 ids from history
	if (history) {
		const historyArr = JSON.parse(history) as string[];
		return historyArr.slice(-10);
	} else {
		return [];
	}
};

const generateItems = () => {
	// get random three of previous ids
	const previousIds = getPreviousIds();
	console.log(previousIds);

	// Select up to 3 random previous IDs
	const selectedPreviousIds: string[] = [];
	const availablePreviousIds = [...previousIds];

	// Get up to 3 previous IDs if available
	const numPreviousToInclude = Math.min(3, availablePreviousIds.length);
	for (let i = 0; i < numPreviousToInclude; i++) {
		if (availablePreviousIds.length === 0) break;
		const randomIndex = Math.floor(Math.random() * availablePreviousIds.length);
		selectedPreviousIds.push(availablePreviousIds[randomIndex]);
		availablePreviousIds.splice(randomIndex, 1);
	}

	const randomStrings: IStoreStringItem[] = getRandomStrings({
		len: 10 - selectedPreviousIds.length, // Adjust count to maintain total of 10 items
		excludeIds: selectedPreviousIds,
	});

	// Get strings from previous sessions and add them
	const stringsFromPreviousSessions = selectedPreviousIds
		.map((id) => getStringById(id))
		.filter((s) => s && s.id) // Filter out any undefined items and items with undefined id
		.map((s) => ({
			...s,
			fromPrevSession: true,
		})) as IStoreStringItem[];

	// Combine new and previous items
	let combinedStrings = [...randomStrings];

	// Insert each previous string at a random position
	stringsFromPreviousSessions.forEach((prevString) => {
		const randomPosition = Math.floor(
			Math.random() * (combinedStrings.length + 1)
		);
		combinedStrings.splice(randomPosition, 0, prevString);
	});

	const imageUrls = combinedStrings
		.map((s) => s.hook?.imgUrl)
		.filter((img) => img) as string[];
	preloadImages(imageUrls);

	store.dispatch(setRandomStrings(combinedStrings));
};

const saveIdsToHistory = (ids: string[]) => {
	const history = appLocalstorage.getItem(appLocalstorage.keys.history);
	let historyArr: string[] = [];
	if (history) {
		historyArr = JSON.parse(history);
	}
	const filteredIds = ids.filter((id) => !historyArr.includes(id));
	historyArr.push(...filteredIds);
	appLocalstorage.setItem(
		appLocalstorage.keys.history,
		JSON.stringify(historyArr)
	);
};
const getHistoryLength = () => {
	const history = appLocalstorage.getItem(appLocalstorage.keys.history);
	if (history) {
		const historyArr = JSON.parse(history) as string[];
		return historyArr.length;
	} else {
		return 0;
	}
};

const getCurrentProgress = () => {
	const total = getTotalLength();
	return {
		current: getHistoryLength(),
		total,
	};
};

export { generateItems, saveIdsToHistory, getCurrentProgress };
