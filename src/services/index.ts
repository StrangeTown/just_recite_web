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
	// get random one of previous ids
	const previousIds = getPreviousIds();
	console.log(previousIds);
	const previousId =
		previousIds[Math.floor(Math.random() * previousIds.length)];

	const randomStrings: IStoreStringItem[] = getRandomStrings({
		len: 10,
		excludeIds: [previousId],
	});

	const stringFromPreviousSession = getStringById(previousId);
	// insert string from previous session to randomStrings in a random position
	if (stringFromPreviousSession) {
		randomStrings.splice(Math.floor(Math.random() * randomStrings.length), 0, {
			...stringFromPreviousSession,
			fromPrevSession: true,
		});
	}

	const imageUrls = randomStrings
		.map((s) => s.hook?.imgUrl)
		.filter((img) => img) as string[];
	preloadImages(imageUrls);

	store.dispatch(setRandomStrings(randomStrings));
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
