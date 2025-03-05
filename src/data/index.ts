import strings2023 from "./2023";
import strings2024 from "./2024";
import qingkStrings from "./qingke";
import guoqingStrings from "./guoqing";
import strings2025 from "./2025";

export type tStringItem = {
	id: string;
	en: string;
	zh: string;
	audio?: string;
	hook?: {
		text?: string;
		imgUrl?: string;
	};
};

const testData: tStringItem[] = [
	// ...qingkStrings,
	// ...strings2306,
	{
		zh: "好像我很闲似的",
		en: "Like I've nothing better to do.",
		id: "571c8670-fc21-49e0-8e35-2ecfd7dc81e2",
		audio:
			"https://github.com/StrangeTown/just_recite_web/raw/main/src/assets/audio/Like_I-ve_nothing_better_1.wav",
		hook: {
			text: "闲",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "我也不在意",
		en: "Won't matter to me",
		id: "15615737-811e-40a3-8c84-a8db99c066c0",
		audio:
			"https://github.com/StrangeTown/just_recite_web/raw/main/src/assets/audio/Like_I-ve_nothing_better_1.wav",
		hook: {
			text: "不在意",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "他们越来越喜欢我",
		en: "They're really taken a liking to me.",
		id: "ae1f27dd-fad3-4c6e-9e06-fbefdced361a",
		audio:
			"https://github.com/StrangeTown/just_recite_web/raw/main/src/assets/audio/Like_I-ve_nothing_better_1.wav",
		hook: {
			text: "喜欢",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "你应该过去打个招呼.",
		en: "You should stop by and say hi.",
		id: "67bb151b-f766-49a6-a244-f1797d9589b1",
		hook: {
			text: "招呼",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "我老是朝着好的方面想",
		en: "I keep seeing it the good way.",
		id: "d8389d3f-788f-478d-a58f-74c9f904673c",
		hook: {
			text: "方面",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "看我遇见谁了",
		en: "Look who I ran into.",
		id: "cbccf2e6-81cf-41a5-b715-4a6fe6f43b8a",
		hook: {
			text: "遇见",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "我们去走走",
		en: "Let's take a walk.",
		id: "a2b3689b-e7d2-4bd3-b7ef-6d5d7f2c7088",
		hook: {
			text: "走走",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "我已经学到教训了",
		en: "I've learned my lesson.",
		id: "c3f8959b-76d2-4c89-a625-6f8c1380a006",
		hook: {
			text: "教训",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "你不是被开除了吗",
		en: "Don't you get fired?",
		id: "2db21f55-ec97-4c05-9b9d-544f181d7bad",
		hook: {
			text: "开除",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "你吃了那么多苦",
		en: "You've been through so much",
		id: "04cc87cf-e6d8-4694-8f51-be639087a232",
		hook: {
			text: "吃苦",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "“我刚刚完成了作业。”",
		en: "I finished my homework just now.",
		id: "c993eeb8-7662-477e-8015-8c1e7fe5fa49",
		hook: {
			text: "作业",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
];

const data = [
	...qingkStrings,
	...strings2023,
	...guoqingStrings,
	...strings2024,
	...strings2025,
];

let isTest = false;
// isTest = true;
const globalStrings = isTest ? testData : data;

export { globalStrings };
