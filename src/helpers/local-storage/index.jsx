export const SetStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    //
  }
};

export const GetStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
};

export const RemoveStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    //
  }
};
