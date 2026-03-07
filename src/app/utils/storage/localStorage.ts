export const createLocalStorageVariable = (
  variable: string,
  value: unknown,
  duration: number = 24,
) => {
  const now = new Date();
  const time = now.getTime();
  const hours = 60 * 60 * duration;
  const expireTime = 1000 * hours + time;
  now.setTime(expireTime);
  if (!localStorage.getItem(variable)) {
    localStorage.setItem(
      variable,
      JSON.stringify({
        value: value,
        expire: now.getTime(),
      }),
    );
  }
};

export const updateLocalStorageVariable = (
  variable: string,
  value: unknown,
  expire: number,
) => {
  if (localStorage.getItem(variable)) {
    localStorage.setItem(
      variable,
      JSON.stringify({
        value: value,
        expire: expire,
      }),
    );
  }
};

export const getLocalStorageVariable = (variable: string) => {
  const itemJson = localStorage.getItem(variable);
  if (itemJson) {
    const item = JSON.parse(itemJson);
    return item;
  }
  return null;
};

export const deleteLocalStorageVariable = (variables: string[] = []) => {
  const timestamp = new Date().getTime();
  variables.forEach((variable: string) => {
    const itemLocalStorage = localStorage.getItem(variable);
    if (itemLocalStorage) {
      const data = JSON.parse(itemLocalStorage);
      if (timestamp >= data.expire) {
        localStorage.removeItem(variable);
      }
    }
  });
};

export const forceDeleteLocalStorageVariable = (variables: string[] = []) => {
  variables.forEach((variable: string) => {
    const itemLocalStorage = localStorage.getItem(variable);
    if (itemLocalStorage) {
      localStorage.removeItem(variable);
    }
  });
};

export const decodeJWT = (token: string) =>
  JSON.parse(atob(token.split('.')[1]));
