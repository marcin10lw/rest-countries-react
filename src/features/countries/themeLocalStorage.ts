const localStorageKey = "theme";

export const getThemeFromLocalStorage = () => {
  const localStorageValue = JSON.parse(
    localStorage.getItem(localStorageKey) as string
  );

  if (localStorageValue === null) {
    return false;
  }

  return localStorageValue;
};

export const saveThemeToLocalStorage = (value: any) => {
  localStorage.setItem(localStorageKey, JSON.parse(value));
};
