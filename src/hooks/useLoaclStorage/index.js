import { LocalStorageUtil } from 'utils/localStorageUtil';
import { ObjectUtil } from 'utils/objectUtil';

function useLocalStorage() {
  const getItem = (key) => {
    const origin = LocalStorageUtil.get(key);
    const parseData = ObjectUtil.parseData(origin);

    return parseData;
  };

  const getAsyncArrItem = async (key) => {
    const data = await getItem(key);

    return !!data ? data : [];
  };

  const getAsyncItem = async (key) => {
    const data = LocalStorageUtil.get(key);

    return data;
  };

  const setItem = (key, data) => {
    LocalStorageUtil.set(key, data);
  };

  const removeItem = (key) => {
    LocalStorageUtil.remove(key);
  };

  const clearAll = () => {
    LocalStorageUtil.clear();
  };

  const addKeyData = (key, data) => {
    const origin = getItem(key);
    const parseData = ObjectUtil.parseData(origin);
    let copyData;

    if (data instanceof Array) {
      if (!!parseData) {
        copyData = [...parseData, ...data];
      } else {
        copyData = [...data];
      }
    } else if (data instanceof Object) {
      if (!!parseData) {
        copyData = { ...parseData, ...data };
      } else {
        copyData = { ...data };
      }
    } else {
      copyData = copyData + data;
    }

    setItem(key, JSON.stringify(copyData));
  };

  const removeKeyData = (key, data) => {
    const origin = getItem(key);
    const parseData = ObjectUtil.parseData(origin);
    let copyData;

    if (data instanceof Array) {
      if (!!parseData) {
        copyData = parseData.filter((item) => item !== data[0]);
      } else {
        copyData = [];
      }
    } else if (data instanceof Object) {
      if (!!parseData) {
        for (let obj in parseData) {
          if (Object.is(parseData[obj], data)) {
            delete parseData[obj];
          }
        }
        copyData = parseData;
      } else {
        copyData = {};
      }
    } else {
      copyData = copyData.replace(data, '');
    }

    setItem(key, JSON.stringify(copyData));
  };

  const removeKeyArr = (key, type, value) => {
    const origin = getItem(key);
    const parseData = ObjectUtil.parseData(origin);
    let copyData;

    copyData = parseData.filter((item) => item[type] !== value);

    setItem(key, JSON.stringify(copyData));
  };

  return {
    getAsyncArrItem,
    getAsyncItem,
    removeKeyData,
    addKeyData,
    getItem,
    setItem,
    removeItem,
    clearAll,
    removeKeyArr
  };
}

export default useLocalStorage;
