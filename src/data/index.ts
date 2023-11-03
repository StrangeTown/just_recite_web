import strings2306 from "./2306";

export type tStringItem = {
	id: string;
	en: string;
	zh: string;
	hook?: {
		text?: string;
		imgUrl?: string;
	};
};

const qingkStrings: tStringItem[] = [
	{
		zh: "好像我很闲似的",
		en: "Like I've nothing better to do.",
		id: "571c8670-fc21-49e0-8e35-2ecfd7dc81e2",
		hook: {
			text: "闲",
		},
	},
	{
		zh: "我也不在意",
		en: "Won't matter to me",
		id: "15615737-811e-40a3-8c84-a8db99c066c0",
		hook: {
			text: "不在意",
		},
	},
	{
		zh: "他们越来越喜欢我",
		en: "They're really taken a liking to me.",
		id: "ae1f27dd-fad3-4c6e-9e06-fbefdced361a",
		hook: {
			text: "喜欢",
		},
	},
	{
		zh: "你应该过去打个招呼.",
		en: "You should stop by and say hi.",
		id: "67bb151b-f766-49a6-a244-f1797d9589b1",
		hook: {
			text: "招呼",
		},
	},
	{
		zh: "我老是朝着好的方面想",
		en: "I keep seeing it the good way.",
		id: "d8389d3f-788f-478d-a58f-74c9f904673c",
		hook: {
			text: "方面",
		},
	},
	{
		zh: "看我遇见谁了",
		en: "Look who I ran into.",
		id: "cbccf2e6-81cf-41a5-b715-4a6fe6f43b8a",
		hook: {
			text: "遇见",
		},
	},
	{
		zh: "我们去走走",
		en: "Let's take a walk.",
		id: "a2b3689b-e7d2-4bd3-b7ef-6d5d7f2c7088",
		hook: {
			text: "走走",
		},
	},
	{
		zh: "我已经学到教训了",
		en: "I've learned my lesson.",
		id: "c3f8959b-76d2-4c89-a625-6f8c1380a006",
		hook: {
			text: "教训",
		},
	},
	{
		zh: "你不是被开除了吗",
		en: "Don't you get fired?",
		id: "2db21f55-ec97-4c05-9b9d-544f181d7bad",
		hook: {
			text: "开除",
		},
	},
	{
		zh: "你吃了那么多苦",
		en: "You've been through so much",
		id: "04cc87cf-e6d8-4694-8f51-be639087a232",
		hook: {
			text: "吃苦",
		},
	},
	{
		zh: "我对你的损失深表遗憾",
		en: "I’m sorry for your loss",
		id: "dab7c71a-1eb4-4a51-9237-9972db28cd8f",
		hook: {
			text: "损失",
		},
	},
	{
		zh: "我没有收到留言.所以不算",
		en: "I didn't get that message.So this doesn't count",
		id: "7e6a9711-e090-48cd-a700-8a7c59df97d9",
		hook: {
			text: "留言",
		},
	},
	{
		zh: "你干嘛转移话题？",
		en: "Why are you changing the subject？",
		id: "f2e441fb-e420-423b-b1b5-52748d134d64",
		hook: {
			text: "话题",
		},
	},
	{
		zh: "真希望我可以做点什么让你好过点",
		en: "I wish there were something I could do to make you feel better.",
		id: "9c2f8c83-e04c-470e-83de-8cdebb973a7e",
		hook: {
			text: "好过",
		},
	},
	{
		zh: "谢谢你替我挺身而出",
		en: "I did appreciate you standing up for me",
		id: "47a22c2f-8fd4-40a1-a306-460c24a4667a",
		hook: {
			text: "挺身而出",
		},
	},
	{
		zh: "不过我想我该走了",
		en: "But I think I'm about to leave",
		id: "6596379e-f210-476e-8d03-653b0745b150",
		hook: {
			text: "该走了",
		},
	},
	{
		zh: "我马上出去",
		en: "I'll be out in a second",
		id: "806b4096-318e-4b15-83c1-3ef963193bba",
		hook: {
			text: "出去",
		},
	},
	{
		zh: "这说明什么",
		en: "What does that tell you？",
		id: "c4c49ed4-cde4-4b51-8c64-c059fb69ba61",
		hook: {
			text: "说明",
		},
	},
	{
		zh: "让我们补偿你",
		en: "Let us make it up to you.",
		id: "8b4f732c-1b01-4fa0-8680-2cbced0650d4",
		hook: {
			text: "补偿",
		},
	},
	{
		zh: "我看就先这样吧",
		en: "I think that's enough for now",
		id: "934ee8b9-1fff-4bf9-9c42-c6ed275a33b6",
		hook: {
			text: "先这样",
		},
	},
	{
		zh: "别再自责了",
		en: "Stop beating yourself up",
		id: "53a70453-6b3a-4924-a77c-3965c9199b56",
		hook: {
			text: "自责",
		},
	},
	{
		zh: "别抱太大希望",
		en: "Don't get your hopes up",
		id: "5dfebcdc-ee5f-4a2d-ac0f-4640e69abfb1",
		hook: {
			text: "希望",
		},
	},
	{
		zh: "举个例子",
		en: "Name one",
		id: "f825afc9-0fa4-4580-83d5-8019a726526e",
		hook: {
			text: "例子",
		},
	},
	{
		zh: "你们两个慢慢聊",
		en: "I'll let you two guys acquainted",
		id: "b626ec51-3993-4e1c-95f9-b8396b62c3f4",
		hook: {
			text: "聊",
		},
	},
	{
		zh: "承认吧",
		en: "Let's face it",
		id: "02d0a578-70ee-42b9-8dad-749975481029",
		hook: {
			text: "承认",
		},
	},
	{
		zh: "我终于自食恶果了",
		en: "I have tasted my own medicine and it is bitter.",
		id: "63bcd7b2-a881-4101-82ce-ada5d8c30e82",
		hook: {
			text: "自食恶果",
		},
	},
	{
		zh: "我受够了",
		en: "I have had enough of this",
		id: "52d474d3-834f-46b9-8c3f-e8c671e8fd75",
		hook: {
			text: "受够",
		},
	},
	{
		zh: "抱歉打断你",
		en: "Don't mean to interrupt.",
		id: "d3beaaa1-ba92-4f3f-a160-c6e1c597d27a",
		hook: {
			text: "打断",
		},
	},
	{
		zh: "我要求的不多",
		en: "I'm not asking for a lot",
		id: "ef7d71c0-4582-468a-8bfd-e9b2ab0b6c80",
		hook: {
			text: "要求",
		},
	},
	{
		zh: "我们交往过",
		en: "We used to date",
		id: "95505685-c127-4a67-aef7-2b1d73e8a07f",
		hook: {
			text: "交往",
		},
	},
	{
		zh: "过去的事就别提了",
		en: "Water under the bridge. Forget it.",
		id: "9b702c94-2897-48e4-9b61-6eeceac677bf",
		hook: {
			text: "过去的事",
		},
	},
	{
		zh: "他回绝了",
		en: "He blew us off.",
		id: "b6ee3947-c022-4e7b-8f19-a28e01a95b1d",
		hook: {
			text: "回绝",
		},
	},
	{
		zh: "难道我犯了大错？",
		en: "Did I just make a huge mistake？",
		id: "f6bcd462-a85b-4243-8b71-869b1649f315",
		hook: {
			text: "大错",
		},
	},
	{
		zh: "没什么大不了的",
		en: "No big deal",
		id: "3285842b-5cf5-4fbe-b2f8-73386d3989c4",
		hook: {
			text: "大不了",
		},
	},
	{
		zh: "你真是个大好人",
		en: "You're a wonderful human being.",
		id: "c8c88594-9fd3-433a-b8fd-07e7e03f9a9c",
		hook: {
			text: "好人",
		},
	},
	{
		zh: "我就知道你会一猜即中",
		en: "I knew you would get it on the first guess.",
		id: "ec878a6c-daac-403a-9954-d48304ae7b0b",
		hook: {
			text: "猜",
		},
	},
	{
		zh: "所以是谁并不重要,对吧？",
		en: "So it doesn’t really matter who gets credit,right?",
		id: "399c33ff-e338-4949-b76a-ff668318a554",
		hook: {
			text: "并不重要",
		},
	},
	{
		zh: "你不能就这么算了",
		en: "You can't let him get away with that .",
		id: "f0ed9e9a-a0fe-4162-9f6a-0aade8706ac9",
		hook: {
			text: "算了",
		},
	},
	{
		zh: "微笑能让你无往不胜",
		en: "A smile goes a long way.",
		id: "8421e7d3-bcec-47b9-849f-36e33da8878e",
		hook: {
			text: "微笑",
		},
	},
	{
		zh: "别跟我使眼色",
		en: "Don't wink at me",
		id: "10d812ae-04ca-4301-a0b1-ece75672ae1b",
		hook: {
			text: "使眼色",
		},
	},
	{
		zh: "别想左右她",
		en: "Don't try to sway her.",
		id: "d4064a6f-5e6d-4783-9140-f553b2d2e2fb",
		hook: {
			text: "左右",
		},
	},
	{
		zh: "我已经词穷了",
		en: "I’m out of words.",
		id: "5361c632-6ed1-45a7-8b9a-0499132db0eb",
		hook: {
			text: "词穷",
		},
	},
	{
		zh: "这句话很难说",
		en: "It's a really hard word to say.",
		id: "a179a16e-287a-4ae1-9419-62ff2d719365",
		hook: {
			text: "难说",
		},
	},
	{
		zh: "反正你也得独立",
		en: "You've needed to get out on your own way.",
		id: "b8ec8627-685a-432d-a993-f95fc21e7cfb",
		hook: {
			text: "独立",
		},
	},
	{
		zh: "拜托,你真以为我会上当？",
		en: "Oh, come on, you really think that's gonna work on me.",
		id: "3c1751bc-b259-4330-9043-4c72a7ed62d5",
		hook: {
			text: "上当",
		},
	},
	{
		zh: "我有事要忙",
		en: "I’m gonna run a couple of errands.",
		id: "3eabc1fb-fc54-4224-84db-869588eaeebc",
		hook: {
			text: "忙",
		},
	},
	{
		zh: "你最近在干嘛",
		en: "What is going on with you？",
		id: "557d9a48-2d87-4656-a88a-2709b2fd909a",
		hook: {
			text: "干嘛",
		},
	},
	{
		zh: "我不知道你在说什么",
		en: "I have no idea what you're talking about.",
		id: "174f347d-5190-441e-868a-ec32a3517279",
		hook: {
			text: "说什么",
		},
	},
	{
		zh: "谢谢你替我打气",
		en: "Thanks for trying to cheer me up.",
		id: "6a6a0727-5ed3-4333-9098-00adae77d76d",
		hook: {
			text: "打气",
		},
	},
	{
		zh: "我们多久没见面了",
		en: "How long's it been since we've seen each other?",
		id: "2a8f5bdf-5313-4d9d-920e-f3f6501a3262",
		hook: {
			text: "见面",
		},
	},
	{
		zh: "你能帮我个忙吗",
		en: "Look, will you do me a favor?",
		id: "a23acc0a-5510-4f89-8aa3-1f5115f1521c",
		hook: {
			text: "帮忙",
		},
	},
	{
		zh: "说真的，兄弟，你太需要这个了",
		en: "Honestly, man, you raelly need this",
		id: "55994c7e-bd89-4cb2-8c4c-4c2da7c1c2b6",
		hook: {
			text: "需要",
		},
	},
	{
		zh: "你也要保重",
		en: "You take care too",
		id: "3623ec7a-5ff0-4358-b4d6-f7d0cde91074",
		hook: {
			text: "保重",
		},
	},
	{
		zh: "你知道我想要什么吗",
		en: "You know what I really wanted?",
		id: "3cf2c583-2d02-4a72-876e-6e8352fe4f65",
		hook: {
			text: "想要",
		},
	},
	{
		zh: "多谢你能过来",
		en: "Thank you so much for coming",
		id: "e51fd5fb-d0dc-4709-8257-ef8641c4b21b",
		hook: {
			text: "过来",
		},
	},
	{
		zh: "我只会浪费你的时间",
		en: "I'm just wasting your time",
		id: "96ffc603-b901-44f5-8cf5-2f34fe539c11",
		hook: {
			text: "浪费",
		},
	},
	{
		zh: "我们终于有了共识",
		en: "Finally something we agree on",
		id: "1bdcd30d-66fe-48d0-804d-8ae0f4309223",
		hook: {
			text: "共识",
		},
	},
	{
		zh: "你说得倒容易",
		en: "That's easy for you to say",
		id: "0c39e5d5-7415-4f5b-9000-9d516eeda782",
		hook: {
			text: "容易",
		},
	},
	{
		zh: "因为你搞砸了一切",
		en: "Because you blow everything",
		id: "b1f31618-6f06-42c1-812e-49467d25c3c5",
		hook: {
			text: "搞砸",
		},
	},
	{
		zh: "没有别的办法",
		en: "There is no other way!",
		id: "e101bf9a-7a9b-49e6-8039-ec7ca883208e",
		hook: {
			text: "办法",
		},
	},
	{
		zh: "那是什么意思",
		en: "What the hell is that supposed to mean?",
		id: "46b80985-45bc-44ed-b317-6c90980b5b21",
		hook: {
			text: "意思",
		},
	},
	{
		zh: "这次有点太过了",
		en: "This is way over the line",
		id: "fc7351a9-4961-45d8-a81f-ed808dd83a35",
		hook: {
			text: "太过",
		},
	},
	{
		zh: "想都别想",
		en: "Don't even think it.",
		id: "8ed3edd0-3db1-47f6-9eab-478833c07a7a",
		hook: {
			text: "别想",
		},
	},
	{
		zh: "可以和你谈一下吗",
		en: "Can I just talk to you for just a second ？",
		id: "542fd776-93a7-4db1-9d9a-3af4bd1022a4",
		hook: {
			text: "谈一下",
		},
	},
	{
		zh: "只有你自己在意",
		en: "No body cares about this except you",
		id: "58dbf2a4-55b3-404a-b289-65c04088dedf",
		hook: {
			text: "在意",
		},
	},
	{
		zh: "这会让他心碎",
		en: "It's gonna break his heart",
		id: "2c8a8224-a7f1-4c73-b679-c304132110e4",
		hook: {
			text: "心碎",
		},
	},
	{
		zh: "应该随时会到",
		en: "They'll be here in any minute",
		id: "79fbfd7a-73fe-4b38-9a83-2abdb40b78de",
		hook: {
			text: "随时",
		},
	},
	{
		zh: "你实在太过分了",
		en: "You have so crossed a line",
		id: "458bffa1-5cb1-49a1-8b3a-4e1b75cf035b",
		hook: {
			text: "过分",
		},
	},
	{
		zh: "想象一下",
		en: "Just think about how would it feel",
		id: "7be0d385-188e-468e-9464-03f6cbae64dc",
		hook: {
			text: "想象",
		},
	},
	{
		zh: "你太疯狂了",
		en: "You're a wild man.",
		id: "7821c472-3158-4af5-b363-e4e0df54dc15",
		hook: {
			text: "疯狂",
		},
	},
	{
		zh: "能不能别再拖延了，快回答我问题",
		en: "Can you just stop stalling and answer the question? ",
		id: "4fd2bce0-c624-4b09-80f0-2c16da08d63a",
		hook: {
			text: "拖延",
		},
	},
	{
		zh: "但奇怪的是…",
		en: "But the strange thing is...",
		id: "41abda88-f90b-4064-9d1d-e314c701102f",
		hook: {
			text: "奇怪",
		},
	},
	{
		zh: "我和我父亲在所有事情上都意见相左",
		en: "We disagreed about literally everything, my father and I",
		id: "2051bd8e-05e7-4cf1-b1d4-9a6e473ccfe2",
		hook: {
			text: "意见相左",
		},
	},
	{
		zh: "我们要开放思想去接受宇宙的无限可能",
		en: "We have to open our minds to the infinite possibilities of what the cosmos has to offer",
		id: "cf29f5fb-f150-4c3a-adb3-e751518b2890",
		hook: {
			text: "开放思想",
		},
	},
	{
		zh: "没有你我哪也不去",
		en: "I'm not going anywhere without you",
		id: "0aad7f75-6d6b-47fc-8e35-c8a168f96571",
		hook: {
			text: "哪也不去",
		},
	},
	{
		zh: "我也在想",
		en: "I'm still figuring that out",
		id: "618c88db-b14c-4eb0-8313-22c46c35959d",
		hook: {
			text: "在想",
		},
	},
	{
		zh: "很抱歉不得不走到这一步",
		en: "I'm sorry to have to take this step",
		id: "dbd1766d-3932-4f39-a4ea-aa0f69583633",
		hook: {
			text: "这一步",
		},
	},
	{
		zh: "你想开车去悬崖那边吗",
		en: "Would you like to drive out to the cliffs?",
		id: "2766ec38-83e4-4384-afea-8f3e2b396999",
		hook: {
			text: "悬崖",
		},
	},
	{
		zh: "还是让专业的来吧",
		en: "Leave it to the professionals",
		id: "2d683801-0884-4395-8d93-6f8a782968c4",
		hook: {
			text: "专业",
		},
	},
	{
		zh: "大家都会没事的",
		en: "Everyone's gonna be okay",
		id: "c964c4a9-49b3-4778-a59f-5c8db1bdbcad",
		hook: {
			text: "没事",
		},
	},
	{
		zh: "我要搬出去了,房租就给你缴了",
		en: "I'm gonna be moving out ,so you're gonna be in charge of paying the rent.",
		id: "cd7408db-e553-40eb-a991-db1736228332",
		hook: {
			text: "房租",
		},
	},
	{
		zh: "我真是一刻也不得闲",
		en: "I can't get a minute of peace",
		id: "7f679ef7-78a8-4acc-9c6c-468a00c60f15",
		hook: {
			text: "得闲",
		},
	},
	{
		zh: "这就对了. 这样不是好多了？",
		en: "There you go. Doesn't everyone feel better？",
		id: "51e61778-a1b5-4009-823d-788b65b73af7",
		hook: {
			text: "对了",
		},
	},
	{
		zh: "你们对对方太刻薄",
		en: "You're just mean to each other . ",
		id: "b4c260e0-3efa-4f60-82a2-40fb25f31635",
		hook: {
			text: "刻薄",
		},
	},
	{
		zh: "我还想你去哪了呢",
		en: "I was wondering where you went.",
		id: "7bca888c-986c-4e9c-9e26-15e797243fcb",
		hook: {
			text: "去哪了",
		},
	},
	{
		zh: "你以为我是白痴吗",
		en: "What kind of idiot do you take me for ？",
		id: "10317ac5-d17a-4562-b18b-86d2fbcdd3fa",
		hook: {
			text: "白痴",
		},
	},
	{
		zh: "就再等一秒",
		en: "Wait just one more second.",
		id: "7412f635-423b-470b-82c3-0bb6c023e909",
		hook: {
			text: "再等",
		},
	},
	{
		zh: "等等, 你都讲完了",
		en: "Wait a minute.You just take all the words. ",
		id: "d776e32d-c30e-4683-b67e-7dad2e94bd40",
		hook: {
			text: "讲完",
		},
	},
	{
		zh: "我要绑鞋带,你先跑,我就来",
		en: "I have to tie my shoes, so you go ahead, I'll catch up.",
		id: "336eb551-b24f-4f9a-8143-ef821ae6667f",
		hook: {
			text: "绑鞋带",
		},
	},
	{
		zh: "为啥不对她坦白 和她说实话呢？",
		en: "Why don't you just be straight with her ？Tell her the truth.",
		id: "13e8e044-7989-4277-b33f-cbda505b7404",
		hook: {
			text: "坦白",
		},
	},
	{
		zh: "天呐,你差点把我吓出心脏病.",
		en: "Oh, my god, you almost gave me a heart attack",
		id: "2d44ebc9-ca23-4aaa-a13a-f9a16b7edd3c",
		hook: {
			text: "吓",
		},
	},
	{
		zh: "烂透了.什么事都得我自己来",
		en: "Terrible.If I wait something done right,I have to do it myself.",
		id: "71a5774f-bb53-4f59-b9ff-aaef2f94f50d",
		hook: {
			text: "烂透了",
		},
	},
	{
		zh: "我们就挑明了吧",
		en: "Let's just get this out in the open",
		id: "47194e50-065a-4349-a63d-45438b5d33bf",
		hook: {
			text: "挑明",
		},
	},
	{
		zh: "你不要在意别人的目光",
		en: "You don't care if people are staring",
		id: "2e809a89-6e70-49ee-a72b-18da2a5f9e12",
		hook: {
			text: "在意",
		},
	},
	{
		zh: "我们不干了",
		en: "We are done.",
		id: "9bcc876e-b23e-4a62-9bab-548b74751aee",
		hook: {
			text: "不干了",
		},
	},
	{
		zh: "你怀疑我说谎时，总是这样看我",
		en: "That's the look you give me when you think I'm lying",
		id: "9300db48-e96c-4b90-89e9-dabbc3e95f17",
		hook: {
			text: "怀疑",
		},
	},
	{
		zh: "我可以进来吗",
		en: "Is it okay for me to come in now？",
		id: "6e9217b1-2c95-4f16-b712-04ec82210642",
		hook: {
			text: "进来",
		},
	},
	{
		zh: "你在怕我吗？",
		en: "Are you afraid of me or something ？",
		id: "c562aca3-aa5e-4e22-99b8-8a814827fca5",
		hook: {
			text: "怕",
		},
	},
	{
		zh: "情况完全不同",
		en: "A totally different situation. ",
		id: "59850b5d-deba-453d-b0e5-c0c182c22145",
		hook: {
			text: "不同",
		},
	},
	{
		zh: "何帮我们安排一下？",
		en: "Why don't you set us up ？",
		id: "9c4eb201-28a8-411b-94d0-31d734439910",
		hook: {
			text: "安排",
		},
	},
	{
		zh: "上班去吧",
		en: "Let's head off to work. ",
		id: "6d0f0c43-ab06-47da-b39f-97c1fb6dcbed",
		hook: {
			text: "上班",
		},
	},
	{
		zh: "你真的对我有信心",
		en: "You really have faith in me.",
		id: "770353b2-0a83-43b3-a93a-ac0969a443dd",
		hook: {
			text: "信心",
		},
	},
	{
		zh: "你是怎么搞的？",
		en: "What's the matter with you ？",
		id: "78cbc4c8-c78f-4ea0-a961-045496b52b0e",
		hook: {
			text: "怎么搞的",
		},
	},
	{
		zh: "我对他完全改变了看法.",
		en: "It's making me look at him totally differently.",
		id: "e1281c60-0e9d-4239-b2d9-4aabe1a46905",
		hook: {
			text: "看法",
		},
	},
	{
		zh: "只剩下这个可行的方法",
		en: "This is the only thing left that has a shot at working. ",
		id: "4612e96a-e3b0-4e41-9ccc-eaecce4c15ce",
		hook: {
			text: "可行",
		},
	},
	{
		zh: "别在催我了",
		en: "You have to stop rushing me. ",
		id: "b1eb38fa-f116-441a-a72c-d9d1247a5853",
		hook: {
			text: "催",
		},
	},
	{
		zh: "不是你说了什么. 是你的口气",
		en: "It’s not what you said .It's the way you said it.",
		id: "4f244055-add3-4b5f-be4b-2cfae2c47076",
		hook: {
			text: "语气",
		},
	},
	{
		zh: "谢谢你的谅解",
		en: "Thanks for being so understanding.",
		id: "d0b4177a-6b0d-49b5-96e9-1e7c908f2216",
		hook: {
			text: "谅解",
		},
	},
	{
		zh: "你的（名字）是我第一个蹦到我脑子里的名字",
		en: "Yours was the first name that popped into my head .",
		id: "5fdca6d1-9fc7-40c1-a250-97695ae00eb1",
		hook: {
			text: "想到",
		},
	},
	{
		zh: "你笑什么笑？",
		en: "What are you laughing at ？",
		id: "41424c0f-d9b4-4ce1-85cf-df205cacc6b5",
		hook: {
			text: "笑什么",
		},
	},
	{
		zh: "我看出来为啥很难抗拒",
		en: "I can see why that's hard to resist. ",
		id: "c95f658b-db51-4752-85d3-15d4909f79ef",
		hook: {
			text: "抗拒",
		},
	},
	{
		zh: "他们对我很重要",
		en: "They mean so much to me.",
		id: "673c09db-d5e0-432d-b73d-528629754451",
		hook: {
			text: "重要",
		},
	},
	{
		zh: "别这么小气吧",
		en: "You gotta loosen the purse strings a little.",
		id: "8b62e8a3-852c-4e43-aa46-9522d562d41b",
		hook: {
			text: "小气",
		},
	},
	{
		zh: "她为什么不想陪我们？",
		en: "Why doesn't she want to hang out with us？",
		id: "0d2ee408-c881-48ed-b334-514ed6b37fce",
		hook: {
			text: "陪",
		},
	},
	{
		zh: "别那么孩子气",
		en: "Don't be a baby.",
		id: "6f3c381b-bcf8-4b57-8d4b-9c44bc4557c4",
		hook: {
			text: "孩子气",
		},
	},
	{
		zh: "听起来很棒！我们一定要试一试",
		en: "That sounds like a great idea! Let's definitely give it a try.",
		id: "13dc858a-f4e4-43be-be92-11a2646c0844",
		hook: {
			text: "试",
		},
	},
	{
		zh: "不断上升的海平面",
		en: "rising sea levels",
		id: "fe11a1bb-e5e2-4e0b-aab1-4b9277088725",
		hook: {
			text: "海平面",
		},
	},
	{
		zh: "随着海平面上升，预计未来几年这些岛屿中的许多将消失",
		en: "With rising sea levels, it's predicted that many of these islands will simply disappear in coming years.",
		id: "7d42472f-d87a-4df4-bc76-418cbaf8558d",
		hook: {
			text: "海平面",
		},
	},
	{
		zh: "气候变化的影响使这些岛屿社区现在的生活变得困难",
		en: "the effects of climate change are making life difficult for right now",
		id: "b5584876-0187-44e5-ade2-5028e331ac9e",
		hook: {
			text: "气候变化",
		},
	},
	{
		zh: "我们有什么共同点",
		en: "What do we have in common?",
		id: "e9acdd09-a7cd-4e2a-aa14-2453a862aa29",
		hook: {
			text: "共同点",
		},
	},
	{
		zh: "我以为电影会好看，结果根本不是",
		en: "I thought the movie was going to be good, but it turns out it is far from it.",
		id: "76cf67f9-2ad4-4ec7-bea8-08c8da7e982f",
		hook: {
			text: "结果",
		},
	},
	{
		zh: "她对学习的热情，加上她天生的好奇心和对探索的热爱，使她成为一名优秀的学生",
		en: "Her passion for learning, added to her natural curiosity and love of exploration, makes her an outstanding student.",
		id: "69c3a247-34cf-484b-9759-b117aa738b0e",
		hook: {
			text: "优秀的学生",
		},
	},
	{
		zh: "我起晚了 像往常一样",
		en: "I woke up late as usual.",
		id: "085f35a7-2408-427a-a385-aae073b876cc",
		hook: {
			text: "像往常一样",
		},
	},
	{
		zh: "我试着不吃糖果，但它们太诱人了!",
		en: "I'm trying to keep away from the sweets, but they're just so tempting!",
		id: "8c055ed6-f47f-4d96-84d4-f7e8e0e21275",
		hook: {
			text: "诱人",
		},
	},
	{
		zh: "我现在得回去工作了，不过我们以后再叙叙旧吧!",
		en: "I need to get back to work now, but let's catch up later!",
		id: "265f4e61-77fc-48e5-8ebf-314ecebd7595",
		hook: {
			text: "叙旧",
		},
	},
	{
		zh: "看到这些美丽的花让我想起了我在山上徒步旅行的时候。",
		en: "Seeing all these beautiful flowers reminds me of the time I went hiking in the mountains.",
		id: "27c185ca-0bdc-4631-b1f2-0b8c94984564",
		hook: {
			text: "徒步旅行",
		},
	},
	{
		zh: "“我想知道音乐会什么时候开始。”",
		en: "I need to find out what time the concert starts.",
		id: "fc20a97d-7463-42b0-9ec0-b869aa27a510",
		hook: {
			text: "音乐会",
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
	{
		zh: "“美元和加元的价值大致相当。”",
		en: "The American dollar and the Canadian dollar are roughly equivalent in value.",
		id: "3faa0340-5ecd-4ceb-9f04-cd3ef2c3c2b3",
		hook: {
			text: "价值",
		},
	},
	{
		zh: "“为了通过考试，我需要努力学习。”",
		en: "I need to study hard in order to pass the exam.",
		id: "4558129a-f902-432e-b67c-98c0769491e7",
		hook: {
			text: "通过考试",
		},
	},
	{
		zh: "“今晚我宁愿呆在家里看电影，也不愿出去社交。”",
		en: "I prefer to stay in and watch a movie rather than go out and socialize tonight.",
		id: "8e2a469f-ed91-4eca-8b59-190f310f98eb",
		hook: {
			text: "社交",
		},
	},
	{
		zh: "“我想今晚我要吃鸡肉而不吃牛排。”",
		en: "I think I'll have the chicken instead of the steak for dinner tonight.",
		id: "8d8a7916-4355-4bbd-8f2c-5b21f57df455",
		hook: {
			text: "鸡肉",
		},
	},
	{
		zh: "“要是我用功一点，就不会不及格了。”",
		en: "If only I had studied harder for the test, I wouldn't have failed it.",
		id: "f8d8be5b-f08b-49d8-a500-b886348945df",
		hook: {
			text: "不及格",
		},
	},
	{
		zh: "“尽管我很忙，我还是设法完成了这个项目。”",
		en: "I managed to finish the project somehow, even though I was so busy.",
		id: "df5025be-101e-4c88-a12d-9d4cd76d886e",
		hook: {
			text: "设法",
		},
	},
	{
		zh: "“幸运的是，当我的车坏了，我需要付拖车的钱时，我身上有一些多余的现金。”",
		en: "Fortunately, I had some extra cash on me when my car broke down and I needed to pay for a tow truck.",
		id: "a5c578ea-3085-4fca-90be-63cc815909cd",
		hook: {
			text: "幸运",
		},
	},
	{
		zh: "考虑到情况，你感到不知所措完全可以理解。",
		en: "Considering the situation, it's entirely understandable that you feel overwhelmed.",
		id: "7587a53f-e79b-4233-acf6-04cb7fbe67b3",
		hook: {
			text: "不知所措",
		},
	},
	{
		zh: "在得出结论之前，收集更多信息也许会有帮助",
		en: "Maybe it would be helpful to gather more information before reaching a conclusion",
		id: "0e13d7b1-975c-4585-8f44-877df6b309b5",
		hook: {
			text: "结论",
		},
	},
	{
		zh: "今天绝对是个美好的一天，天空湛蓝，微风轻拂",
		en: "It's definitely a beautiful day outside, with clear blue skies and a gentle breeze.",
		id: "ea8175a3-8f78-465d-bba3-75f7e72c8e5d",
		hook: {
			text: "美好",
		},
	},
	{
		zh: "让你的想象力驰骋，创造一些令人惊叹的东西!",
		en: "Let your imagination run wild and create something amazing!",
		id: "1c4cb82d-ff2a-4842-b17a-69285183cef1",
		hook: {
			text: "想象力",
		},
	},
	{
		zh: "“如今的时尚趋势变得越来越奇怪。🤪👗”",
		en: "Today's fashion trends are getting really weird. 🤪👗",
		id: "2d60ad0a-3bde-43f9-9bba-5df2ab43e402",
		hook: {
			text: "时尚",
		},
	},
	{
		zh: "一方面，技术已经彻底改变了沟通方式，使其比以往任何时候都更快捷、更方便。",
		en: "On the one hand, technology has revolutionized communication, making it faster and more convenient than ever before.	",
		id: "50366848-440b-45c8-9277-ea91f006f107",
		hook: {
			text: "技术",
		},
	},
	{
		zh: "“终于到达了我梦想的目的地!”🌍✈️”",
		en: "Finally reached my dream destination! 🌍✈️",
		id: "e3acc783-f092-4f1a-addc-5fb37e83f06a",
		hook: {
			text: "目的地",
		},
	},
	{
		zh: "“当你玩得开心时，时间过得很快!”⌛️😄”",
		en: "Time flies when you're having fun! ⌛️😄",
		id: "11f6a13d-8a06-4c10-a483-02d8482631d7",
		hook: {
			text: "开心",
		},
	},
	{
		zh: "“当我走进拥挤的电梯时，我总是感到既兴奋又紧张。🤩😬”",
		en: "I always feel a mix of excitement and nervousness when stepping into a crowded elevator. ",
		id: "87715440-6288-4aab-8070-2fff799e1aef",
		hook: {
			text: "电梯",
		},
	},
	{
		zh: "这位建筑师设计了一座令人惊叹的建筑，在城市的天际线中脱颖而出。🏢🌆”",
		en: "The architect designed a stunning building that stands out in the city skyline. 🏢🌆",
		id: "349583eb-e645-4b68-923b-aebcdaa9fa35",
		hook: {
			text: "天际线",
		},
	},
	{
		zh: "“有时候，最好的解决办法就是深呼吸，放松。😌”",
		en: "Sometimes, the best solution is simply to take a deep breath and relax. 😌",
		id: "72679bde-fea9-47eb-a950-7446e1b77eee",
		hook: {
			text: "放松",
		},
	},
	{
		zh: "“我喜欢手机彻底改变了我们沟通和获取信息的方式。📱💬”",
		en: "I love how mobile phones have revolutionized the way we communicate and access information. 📱💬",
		id: "f2c42d59-afaf-42a6-a6d8-e99db0b77e54",
		hook: {
			text: "彻底",
		},
	},
	{
		zh: "“我需要定期锻炼来保持身材和健康。💪🏋️",
		en: "I need to work out regularly to stay fit and healthy. 💪🏋️",
		id: "13592867-7982-4c51-84b6-441f8ebd3742",
		hook: {
			text: "锻炼",
		},
	},
	{
		zh: "“永远不要放弃你的梦想，因为曾经看似不可能的事情，只要有决心和努力，都可以成为可能。”🌟🙌”",
		en: "Never give up on your dreams, for what once seemed impossible can become possible with determination and hard work. 🌟🙌",
		id: "5fdb5b4f-ffa1-47fe-911b-2f779a4d137d",
		hook: {
			text: "决心",
		},
	},
	{
		zh: "“我很高兴能搬到一个新的城市，开始我生活的新篇章。🚚🏙️”",
		en: "I'm excited to move to a new city and start a fresh chapter in my life. 🚚🏙️",
		id: "e5f67b38-0e39-446e-b631-ded56d8693a6",
		hook: {
			text: "篇章",
		},
	},
	{
		zh: "我在找一家软件开发公司的工作",
		en: "I'm looking for a job at a software development firm",
		id: "db5b1c57-1d32-4c4e-a509-ea8cc3fce443",
		hook: {
			text: "软件开发",
		},
	},
	{
		zh: "“今天早上我错过了🚌，所以我不得不打车去上班。”",
		en: "I missed the bus this morning, so I had to take a taxi to work.",
		id: "ca3169a1-cbb3-49b4-baa9-bb58f7bb2b42",
		hook: {
			text: "打车",
		},
	},
	{
		zh: '"我用纸巾擦鼻子。"',
		en: "I used a tissue to wipe my nose.",
		id: "6dcec485-d2cc-4631-9c04-ce61be4ad607",
		hook: {
			text: "纸巾",
		},
	},
	{
		zh: "我把碗装满了美味的汤。",
		en: "I filled the bowl with delicious soup.",
		id: "ebc8ebd6-2e14-45e3-ad33-f6ca87b71336",
		hook: {
			text: "碗",
		},
	},
	{
		zh: "我要洗衣服，所以我要把衣服扔进洗衣机。💦👕👖🧦🧼🌪️",
		en: "I need to do laundry, so I'm going to throw my clothes in the washing machine. 💦👕👖🧦🧼🌪️",
		id: "cf0a7318-a282-4f14-bb63-982e260cfa80",
		hook: {
			text: "洗衣机",
		},
	},
];
const testData: tStringItem[] = [
	// ...qingkStrings,
	// ...strings2306,
	{
		zh: "好像我很闲似的",
		en: "Like I've nothing better to do.",
		id: "571c8670-fc21-49e0-8e35-2ecfd7dc81e2",
		hook: {
			text: "闲",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "我也不在意",
		en: "Won't matter to me",
		id: "15615737-811e-40a3-8c84-a8db99c066c0",
		hook: {
			text: "不在意",
			imgUrl: "https://s1.locimg.com/2023/11/03/0bb37b06e6a11.png",
		},
	},
	{
		zh: "他们越来越喜欢我",
		en: "They're really taken a liking to me.",
		id: "ae1f27dd-fad3-4c6e-9e06-fbefdced361a",
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

// const globalStrings = [
// ...qingkStrings,
// ...strings2306,
// ...testData,
// ]

let isTest = false;
// isTest = true;
const globalStrings = isTest ? testData : [...qingkStrings, ...strings2306];

export { globalStrings };
