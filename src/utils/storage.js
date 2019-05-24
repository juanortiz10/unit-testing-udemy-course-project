export const saveData = (keyName, keyValue) => {
  localStorage.setItem(keyName, keyValue);
};

export const getData = (keyName) => localStorage.getItem(keyName);

export const clearStorage = () => localStorage.clear();
