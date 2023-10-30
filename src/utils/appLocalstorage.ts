
// Localstorage


const keys = {
  language: 'language',
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

export default {
  keys,
  setItem,
  getItem,
  removeItem,
  clear,
};