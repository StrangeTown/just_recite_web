const data = [
	{
		zh: "好像我很闲似的",
    en: "Like I've nothing better to do."
	},
	{
		zh: "我也不在意",
    en: "Won't matter to me"
	},
	{
		zh: "他们越来越喜欢我",
    en: "They're really taken a liking to me."
	},
	{
		zh: "你应该过去打个招呼.",
    en: "You should stop by and say hi."
	},
	{
		zh: "我老是朝着好的方面想",
    en: "I keep seeing it the good way."
	},
	{
		zh: "看我遇见谁了",
    en: "Look who I ran into."
	},
	{
		zh: "我们去走走",
    en: "Let's take a walk."
	},
	{
		zh: "我已经学到教训了",
    en: "I've learned my lesson."
	},
	{
		zh: "你不是被开除了吗",
    en: "Don't you get fired?"
	},
	{
		zh: "你吃了那么多苦",
    en: "You've been through so much"
	},
	{
		zh: "我对你的损失深表遗憾",
    en: "I’m sorry for your loss"
	},
	{
		zh: "我没有收到留言.所以不算",
    en: "I didn't get that message.So this doesn't count"
	},
	{
		zh: "你干嘛转移话题？",
    en: "Why are you changing the subject？"
	},
	{
		zh: "真希望我可以做点什么让你好过点",
    en: "I wish there were something I could do to make you feel better."
	},
	{
		zh: "谢谢你替我挺身而出",
    en: "I did appreciate you standing up for me"
	},
	{
		zh: "不过我想我该走了",
    en: "But I think I'm about to leave"
	},
	{
		zh: "我马上出去",
    en: "I'll be out in a second"
	},
	{
		zh: "这说明什么",
    en: "What does that tell you？"
	},
	{
		zh: "让我们补偿你",
    en: "Let us make it up to you."
	},
	{
		zh: "我看就先这样吧",
    en: "I think that's enough for now"
	},
	{
		zh: "别再自责了",
    en: "Stop beating yourself up"
	},
	{
		zh: "别抱太大希望",
    en: "Don't get your hopes up"
	},
	{
		zh: "举个例子",
    en: "Name one"
	},
	{
		zh: "你们两个慢慢聊",
    en: "I'll let you two guys acquainted"
	},
	{
		zh: "承认吧",
    en: "Let's face it"
	},
	{
		zh: "我终于自食恶果了",
    en: "I have tasted my own medicine and it is bitter."
	},
	{
		zh: "我受够了",
    en: "I have had enough of this"
	},
	{
		zh: "抱歉打断你",
    en: "Don't mean to interrupt."
	},
	{
		zh: "我要求的不多",
    en: "I'm not asking for a lot"
	},
	{
		zh: "我们交往过",
    en: "We used to date"
	},
	{
		zh: "过去的事就别提了",
    en: "Water under the bridge. Forget it."
	},
	{
		zh: "他回绝了",
    en: "He blew us off."
	},
	{
		zh: "难道我犯了大错？",
    en: "Did I just make a huge mistake？"
	},
	{
		zh: "没什么大不了的",
    en: "No big deal"
	},
	{
		zh: "你真是个大好人",
    en: "You're a wonderful human being."
	},
	{
		zh: "我就知道你会一猜即中",
    en: "I knew you would get it on the first guess."
	},
	{
		zh: "所以是谁并不重要,对吧？",
    en: "So it doesn’t really matter who gets credit,right?"
	},
	{
		zh: "你不能就这么算了",
    en: "You can't let him get away with that ."
	},
	{
		zh: "微笑能让你无往不胜",
    en: "A smile goes a long way."
	},
	{
		zh: "别跟我使眼色",
    en: "Don't wink at me"
	},
	{
		zh: "别想左右她",
    en: "Don't try to sway her."
	},
	{
		zh: "我已经词穷了",
    en: "I’m out of words."
	},
	{
		zh: "这句话很难说",
    en: "It's a really hard word to say."
	},
	{
		zh: "反正你也得独立",
    en: "You've needed to get out on your own way."
	},
	{
		zh: "拜托,你真以为我会上当？",
    en: "Oh, come on, you really think that's gonna work on me."
	},
	{
		zh: "我有事要忙",
    en: "I’m gonna run a couple of errands."
	},
	{
		zh: "你最近在干嘛",
    en: "What is going on with you？"
	},
	{
		zh: "我不知道你在说什么",
    en: "I have no idea what you're talking about."
	},
	{
		zh: "谢谢你替我打气",
    en: "Thanks for trying to cheer me up."
	},
	{
		zh: "我们多久没见面了",
    en: "How long's it been since we've seen each other?"
	},
	{
		zh: "你能帮我个忙吗",
    en: "Look, will you do me a favor?"
	},
	{
		zh: "说真的，兄弟，你太需要这个了",
    en: "Honestly, man, you raelly need this"
	},
	{
		zh: "你也要保重",
    en: "You take care too"
	},
	{
		zh: "你知道我想要什么吗",
    en: "You know what I really wanted?"
	},
	{
		zh: "多谢你能过来",
    en: "Thank you so much for coming"
	},
	{
		zh: "我只会浪费你的时间",
    en: "I'm just wasting your time"
	},
	{
		zh: "我们终于有了共识",
    en: "Finally something we agree on"
	},
	{
		zh: "你说得倒容易",
    en: "That's easy for you to say"
	},
	{
		zh: "因为你搞砸了一切",
    en: "Because you blow everything"
	},
	{
		zh: "没有别的办法",
    en: "There is no other way!"
	},
	{
		zh: "那是什么意思",
    en: "What the hell is that supposed to mean?"
	},
	{
		zh: "这次有点太过了",
    en: "This is way over the line"
	},
	{
		zh: "想都别想",
    en: "Don't even think it."
	},
	{
		zh: "可以和你谈一下吗",
    en: "Can I just talk to you for just a second ？"
	},
	{
		zh: "只有你自己在意",
    en: "No body cares about this except you"
	},
	{
		zh: "这会让他心碎",
    en: "It's gonna break his heart"
	},
	{
		zh: "应该随时会到",
    en: "They'll be here in any minute"
	},
	{
		zh: "你实在太过分了",
    en: "You have so crossed a line"
	},
	{
		zh: "想象一下",
    en: "Just think about how would it feel"
	},
	{
		zh: "你太疯狂了",
    en: "You're a wild man."
	},
	{
		zh: "能不能别再拖延了，快回答我问题",
    en: "Can you just stop stalling and answer the question? "
	},
	{
		zh: "但奇怪的是…",
    en: "But the strange thing is..."
	},
	{
		zh: "我们在所有事情上都意见相左",
    en: "We disagreed about literally everything, my father and I"
	},
	{
		zh: "我们要开放思想去接受宇宙的无限可能",
    en: "We have to open our minds to the infinite possibilities of what the cosmos has to offer"
	},
	{
		zh: "没有你我哪也不去",
    en: "I'm not going anywhere without you"
	},
	{
		zh: "我也在想",
    en: "I'm still figuring that out"
	},
	{
		zh: "很抱歉不得不走到这一步",
    en: "I'm sorry to have to take this step"
	},
	{
		zh: "你想开车去悬崖那边吗",
    en: "Would you like to drive out to the cliffs?"
	},
	{
		zh: "还是让专业的来吧",
    en: "Leave it to the professionals"
	},
	{
		zh: "大家都会没事的",
    en: "Everyone's gonna be okay"
	},
	{
		zh: "我要搬出去了,房租就给你缴了",
    en: "I'm gonna be moving out ,so you're gonna be in charge of paying the rent."
	},
	{
		zh: "我真是一刻也不得闲",
    en: "I can't get a minute of peace"
	},
	{
		zh: "这就对了. 这样不是好多了？",
    en: "There you go. Doesn't everyone feel better？"
	},
	{
		zh: "你们对对方太刻薄",
    en: "You're just mean to each other . "
	},
	{
		zh: "我还想你去哪了呢",
    en: "I was wondering where you went."
	},
	{
		zh: "你以为我是白痴吗",
    en: "What kind of idiot do you take me for ？"
	},
	{
		zh: "就再等一秒",
    en: "Wait just one more second."
	},
	{
		zh: "等等, 你都讲完了",
    en: "Wait a minute.You just take all the words. "
	},
	{
		zh: "我要绑鞋带,你先跑,我就来",
    en: "I have to tie my shoes, so you go ahead, I'll catch up."
	},
	{
		zh: "为啥不对她坦白 和她说实话呢？",
    en: "Why don't you just be straight with her ？Tell her the truth."
	},
	{
		zh: "天呐,你差点把我吓出心脏病.",
    en: "Oh, my god, you almost gave me a heart attack"
	},
	{
		zh: "烂透了.什么事都得我自己来",
    en: "Terrible.If I wait something done right,I have to do it myself."
	},
	{
		zh: "我们就挑明了吧",
    en: "Let's just get this out in the open"
	},
	{
		zh: "你不要在意别人的目光",
    en: "You don't care if people are staring"
	},
	{
		zh: "我们不干了",
    en: "We are done."
	},
	{
		zh: "你怀疑我说谎时，总是这样看我",
    en: "That's the look you give me when you think I'm lying"
	},
	{
		zh: "我可以进来吗",
    en: "Is it okay for me to come in now？"
	},
	{
		zh: "你在怕我吗？",
    en: "Are you afraid of me or something ？"
	},
	{
		zh: "情况完全不同",
    en: "A totally different situation. "
	},
	{
		zh: "何帮我们安排一下？",
    en: "Why don't you set us up ？"
	},
	{
		zh: "上班去吧",
    en: "Let's head off to work. "
	},
	{
		zh: "你真的对我有信心",
    en: "You really have faith in me."
	},
	{
		zh: "你是怎么搞的？",
    en: "What's the matter with you ？"
	},
	{
		zh: "我对他完全改变了看法.",
    en: "It's making me look at him totally differently."
	},
	{
		zh: "只剩下这个可行的方法",
    en: "This is the only thing left that has a shot at working. "
	},
	{
		zh: "别在催我了",
    en: "You have to stop rushing me. "
	},
	{
		zh: "不是你说了什么. 是你的口气",
    en: "It’s not what you said .It's the way you said it."
	},
	{
		zh: "谢谢你的谅解",
    en: "Thanks for being so understanding."
	},
	{
		zh: "你的（名字）是我第一个蹦到我脑子里的名字",
    en: "Yours was the first name that popped into my head ."
	},
	{
		zh: "你笑什么笑？",
    en: "What are you laughing at ？"
	},
	{
		zh: "我看出来为啥很难抗拒",
    en: "I can see why that's hard to resist. "
	},
	{
		zh: "他们对我很重要",
    en: "They mean so much to me."
	},
	{
		zh: "别这么小气吧",
    en: "You gotta loosen the purse strings a little."
	},
	{
		zh: "她为什么不想陪我们？",
    en: "Why doesn't she want to hang out with us？"
	},
	{
		zh: "别那么孩子气",
    en: "Don't be a baby."
	},
	{
		zh: "听起来很棒！我们一定要试一试",
    en: "That sounds like a great idea! Let's definitely give it a try."
	},
	{
		zh: "不断上升的海平面",
    en: "rising sea levels"
	},
	{
		zh: "随着海平面上升，预计未来几年这些岛屿中的许多将消失",
    en: "With rising sea levels, it's predicted that many of these islands will simply disappear "
	},
	{
		zh: "气候变化的影响使这些岛屿社区现在的生活变得困难",
    en: "the effects of climate change are making life difficult for these island communities "
	},
	{
		zh: "我们有什么共同点",
    en: "What do we have in common?"
	},
	{
		zh: "我以为电影会好看，结果根本不是",
    en: "I thought the movie was going to be good, but it turns out it is far from it."
	},
	{
		zh: "她对学习的热情，加上她天生的好奇心和对探索的热爱，使她成为一名优秀的学生",
    en: "Her passion for learning, added to her natural curiosity and love of exploration, makes "
	},
	{
		zh: "我起晚了 像往常一样",
    en: "I woke up late as usual."
	},
	{
		zh: "我试着不吃糖果，但它们太诱人了!",
    en: "I'm trying to keep away from the sweets, but they're just so tempting!"
	},
	{
		zh: "我现在得回去工作了，不过我们以后再叙叙旧吧!",
    en: "I need to get back to work now, but let's catch up later!"
	},
	{
		zh: "看到这些美丽的花让我想起了我在山上徒步旅行的时候。",
    en: "Seeing all these beautiful flowers reminds me of the time I went hiking in the "
	},
	{
		zh: "“我想知道音乐会什么时候开始。”",
    en: "I need to find out what time the concert starts."
	},
	{
		zh: "“我刚刚完成了作业。”",
    en: "I finished my homework just now."
	},
	{
		zh: "“美元和加元的价值大致相当。”",
    en: "The American dollar and the Canadian dollar are roughly equivalent in value."
	},
	{
		zh: "“为了通过考试，我需要努力学习。”",
    en: "I need to study hard in order to pass the exam."
	},
	{
		zh: "“今晚我宁愿呆在家里看电影，也不愿出去社交。”",
    en: "I prefer to stay in and watch a movie rather than go out and socialize tonight."
	},
	{
		zh: "“我想今晚我要吃鸡肉而不吃牛排。”",
    en: "I think I'll have the chicken instead of the steak for dinner tonight."
	},
	{
		zh: "“要是我用功一点，就不会不及格了。”",
    en: "If only I had studied harder for the test, I wouldn't have failed it."
	},
	{
		zh: "“尽管我很忙，我还是设法完成了这个项目。”",
    en: "I managed to finish the project somehow, even though I was so busy."
	},
	{
		zh: "“幸运的是，当我的车坏了，我需要付拖车的钱时，我身上有一些多余的现金。”",
    en: "Fortunately, I had some extra cash on me when my car broke down and I needed to pay for "
	},
	{
		zh: "考虑到情况，你感到不知所措完全可以理解。",
    en: "Considering the situation, it's entirely understandable that you feel overwhelmed."
	},
	{
		zh: "在得出结论之前，收集更多信息也许会有帮助",
    en: "Maybe it would be helpful to gather more information before reaching a conclusion"
	},
	{
		zh: "今天绝对是个美好的一天，天空湛蓝，微风轻拂",
    en: "It's definitely a beautiful day outside, with clear blue skies and a gentle breeze."
	},
	{
		zh: "让你的想象力驰骋，创造一些令人惊叹的东西!",
    en: "Let your imagination run wild and create something amazing!"
	},
	{
		zh: "“如今的时尚趋势变得越来越奇怪。🤪👗”",
    en: "Today's fashion trends are getting really weird. 🤪👗"
	},
	{
		zh: "一方面，技术已经彻底改变了沟通方式，使其比以往任何时候都更快捷、更方便。",
    en: "On the one hand, technology has revolutionized communication, making it faster and more "
	},
	{
		zh: "“终于到达了我梦想的目的地!”🌍✈️”",
    en: "Finally reached my dream destination! 🌍✈️"
	},
	{
		zh: "“当你玩得开心时，时间过得很快!”⌛️😄”",
    en: "Time flies when you're having fun! ⌛️😄"
	},
	{
		zh: "“当我走进拥挤的电梯时，我总是感到既兴奋又紧张。🤩😬”",
    en: "I always feel a mix of excitement and nervousness when stepping into a crowded elevator. "
	},
	{
		zh: "这位建筑师设计了一座令人惊叹的建筑，在城市的天际线中脱颖而出。🏢🌆”",
    en: "The architect designed a stunning building that stands out in the city skyline. 🏢🌆"
	},
	{
		zh: "“有时候，最好的解决办法就是深呼吸，放松。😌”",
    en: "Sometimes, the best solution is simply to take a deep breath and relax. 😌"
	},
	{
		zh: "“我喜欢手机彻底改变了我们沟通和获取信息的方式。📱💬”",
    en: "I love how mobile phones have revolutionized the way we communicate and access "
	},
	{
		zh: "“我需要定期锻炼来保持身材和健康。💪🏋️",
    en: "I need to work out regularly to stay fit and healthy. 💪🏋️"
	},
	{
		zh: "“永远不要放弃你的梦想，因为曾经看似不可能的事情，只要有决心和努力，都可以成为可能。”🌟🙌”",
    en: "Never give up on your dreams, for what once seemed impossible can become possible with "
	},
	{
		zh: "“我很高兴能搬到一个新的城市，开始我生活的新篇章。🚚🏙️”",
    en: "I'm excited to move to a new city and start a fresh chapter in my life. 🚚🏙️"
	},
	{
		zh: "我在找一家软件开发公司的工作",
    en: "I'm looking for a job at a software development firm"
	},
	{
		zh: "“今天早上我错过了🚌，所以我不得不打车去上班。”",
    en: "I missed the bus this morning, so I had to take a taxi to work."
	},
	{
		zh: '"我用纸巾擦鼻子。"',
    en: "I used a tissue to wipe my nose."
	},
	{
		zh: "我把碗装满了美味的汤。",
    en: "I filled the bowl with delicious soup."
	},
	{
		zh: "我要洗衣服，所以我要把衣服扔进洗衣机。💦👕👖🧦🧼🌪️",
    en: "I need to do laundry, so I'm going to throw my clothes in the washing machine. 💦👕👖🧦🧼🌪️"
	},
];

const {v4: uuidv4} = require('uuid');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../scripts/output');

data.forEach((item) => {
  item.id = uuidv4();
});

fs.writeFileSync(path.join(dir, 'data.json'), JSON.stringify(data, null, 2));