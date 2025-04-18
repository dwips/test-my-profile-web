const STORAGE_ACCESS_TOKEN = 'at';

export const getAccessToken = () => {
  return localStorage.getItem(STORAGE_ACCESS_TOKEN) || null;
};

export const setAccessToken = (token: string) => {
  localStorage.setItem(STORAGE_ACCESS_TOKEN, token);
};

export const removeAccessToken = () => {
  setAccessToken('');
  localStorage.removeItem(STORAGE_ACCESS_TOKEN);
};
