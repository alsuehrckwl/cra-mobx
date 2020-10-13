/**
 * @description 로컬 스토리지 유틸
 * @export
 * @class LocalStorageUtil
 */
export class LocalStorageUtil {
  static get(key) {
    try {
      if (typeof window !== 'undefined') {
        return window.localStorage.getItem(key);
      }
    } catch (error) {
      return null;
    }
  }

  static set(key, value) {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, value);
      }
    } catch (error) {
      console.log(error);
    }
  }

  static remove(key) {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.log(error);
    }
  }

  static clear() {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.clear();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
