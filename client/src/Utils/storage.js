export const getItemFromStorage = (key) => {

  const item = window.localStorage.getItem(key);
  console.log('getItemFromStorage : ', item);
  return item ? JSON.parse(item) : null;
};

export const setItemInStorage = (name, data) => {
  console.log('setItemInStorage : ', name, data);
  window.localStorage.setItem(name, JSON.stringify(data));
};

export const removeItemFromStorage = (name) => {
  console.log('removeItemFromStorage : ', name);
  window.localStorage.removeItem(name);
};
