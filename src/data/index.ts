export type tStringItem = {
  id: number;
  en: string;
  zh: string;
};

const globalStrings: tStringItem[] = [
  {
    id: 1,
    zh: '英语教育是低效的',
    en: 'English education is inefficient',
  },
  {
    id: 2,
    zh: '如何快速掌握口语',
    en: 'How to master spoken English quickly',
  },
  {
    id: 3,
    zh: '身体健康是一切的基础',
    en: 'Health is the foundation of everything',
  },
  {
    id: 4,
    zh: '在错误中学习，会让你学得更扎实',
    en: 'Learning from mistakes will make you learn more solidly',
  }
];

export {
  globalStrings
}