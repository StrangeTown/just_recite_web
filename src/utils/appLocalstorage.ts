
// Localstorage


const keys = {
  language: 'language',
  enFont: 'en-font',
};

const localStorage = window.localStorage;

const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const getItem = (key: string) => {
  return localStorage.getItem(key);
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

const clear = () => {
  localStorage.clear();
};

const appLocalstorage = {
  keys,
  setItem,
  getItem,
  removeItem,
  clear,
};

export default appLocalstorage;