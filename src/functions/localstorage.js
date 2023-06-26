export function setStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getStorage(key) {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
}
