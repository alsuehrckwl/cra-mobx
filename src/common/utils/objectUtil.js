/**
 * @description
 * @export
 * @class ObjectUtil
 */
export class ObjectUtil {
  /**
   * @description json객체 판단
   * @static
   * @param {*} str
   * @returns
   */
  static isJSON(str) {
    try {
      return JSON.parse(str) instanceof Object;
    } catch (e) {
      return false;
    }
  }

  /**
   *
   * @static
   * @param {*} data
   * @returns
   */
  static parseData(data) {
    try {
      if (!!data) {
        if (data instanceof Array) {
          return data;
        } else if (data instanceof Object) {
          return data;
        } else {
          return JSON.parse(data);
        }
      } else {
        return null;
      }
    } catch (error) {}
  }

  /**
   * @description 오브젝트 비교
   * @static
   * @param {*} x
   * @param {*} y
   * @returns
   */
  static isEqualObject(x, y) {
    if (x === y) {
      return true;
    }
    if (!(x instanceof Object) || !(y instanceof Object)) {
      return false;
    }
    if (x.constructor !== y.constructor) {
      return false;
    }

    for (var p in x) {
      if (!x.hasOwnProperty(p)) {
        continue;
      }
      if (!y.hasOwnProperty(p)) {
        return false;
      }
      if (x[p] === y[p]) {
        continue;
      }
      if (typeof x[p] !== 'object') {
        return false;
      }
      if (!Object.equals(x[p], y[p])) {
        return false;
      }
    }

    for (p in y) {
      if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
        return false;
      }
    }

    return true;
  }

  /**
   * @description null 체크
   * @static
   * @param {*} data
   * @returns
   */
  static isNotNull(data) {
    if (
      data === '' ||
      data === null ||
      data === undefined ||
      (data !== null && typeof data == 'object' && !Object.keys(data).length)
    ) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * @description 오브젝트 카피
   * @static
   * @param {*} obj
   * @returns
   */
  static deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    const result = Array.isArray(obj) ? [] : {};

    for (let key of Object.keys(obj)) {
      result[key] = this.deepClone(obj[key]);
    }

    return result;
  }
}
