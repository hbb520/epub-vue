import Cookies from 'js-cookie';

const TokenKey = 'vue_admin_template_token';
let LocalStorage = localStorage || window.localStorage;

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

// 书签对象格式
// {
//   "id": Number,
//   "bookId": Number,
//   "startCfi": String,
//   "endCfi": String,
//   "href": String,
//   "word": String,
//   "createTime": Date,
// }

export function getLS(key) {
  return LocalStorage.getItem(key);
}

export function setLS(key, value) {
  return LocalStorage.setItem(key, value);
}

export function removeLS(key) {
  return LocalStorage.removeItem(key);
}

export function getBookmarks(id) {
  let key = 'bookmarks-' + id;
  let list = JSON.parse(LocalStorage.getItem(key)) || []
  return list;
}

export function setBookmarks(id, obj) {
  let key = 'bookmarks-' + id;
  let bookmarksList = getBookmarks(id) || [];
  bookmarksList.push(obj);
  return LocalStorage.setItem(key, JSON.stringify(bookmarksList));
}

export function removeBookmarks(id, value) {
  let key = 'bookmarks-' + id;
  let bookmarksList = getBookmarks(id) || [];
  bookmarksList = bookmarksList.filter(val => {
    return val.id !== value;
  });
  if (bookmarksList.length <= 0) {
    return LocalStorage.removeItem(key);
  } else {
    return LocalStorage.setItem(key, JSON.stringify(bookmarksList));
  }
}
