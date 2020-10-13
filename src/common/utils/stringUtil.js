/**
 * @description 스트링을 제어하는 유틸
 * @export
 * @class StringUtil
 */
export class StringUtil {
  /**
   * @description 원하는 길이만큼 원하는 문자열을 넣어준다.
   * @static
   * @param {*} item
   * @param {*} width
   * @param {*} joinItem
   * @returns
   */
  static pad(item, width, joinItem) {
    if (typeof item === 'number') {
      item = item + '';
    }

    if (typeof item === 'undefined') {
      return '';
    }

    return item.length >= width
      ? item
      : new Array(width - item.length + 1).join(joinItem) + item;
  }

  /**
   * @description replace시에 변경할 값이 없는 경우를 체크
   * @static
   * @param {*} search
   * @param {*} change
   * @param {*} str
   * @returns
   */
  static replace(search, change, str) {
    if (str) {
      if (Boolean(~str.indexOf(search))) {
        return str.split(search).join(change);
      } else {
        return str;
      }
    } else {
      return '';
    }
  }

  /**
   *
   * @static
   * @param {*} str
   * @returns
   */
  static lower(str) {
    if (str.length > 0) {
      return str.toLowerCase();
    } else {
      return str;
    }
  }

  /**
   *
   * @static
   * @param {*} str
   * @returns
   */
  static upper(str) {
    if (str.length > 0) {
      return str.toUpperCase();
    } else {
      return str;
    }
  }

  /**
   * @description string을 CONSTANT 형식으로 변경
   * @static
   * @param {*} str
   * @returns
   */
  static changeConstants(str) {
    try {
      if (!!str) {
        if (str.length > 0) {
          return this.replace('-', '_', str).toUpperCase();
        } else {
          return str;
        }
      } else {
        return '';
      }
    } catch (error) {
      return '';
    }
  }

  /**
   * @description string을 kebab 형식으로 변경
   * @static
   * @param {*} str
   * @returns
   */
  static changeKebab(str) {
    try {
      if (!!str) {
        if (str.length > 0) {
          return this.replace('_', '-', str).toLowerCase();
        } else {
          return str;
        }
      } else {
        return '';
      }
    } catch (error) {
      return '';
    }
  }

  /**
   * @description 한글 체크
   * @static
   * @param {*} name
   * @returns
   */
  static checkHangle(name) {
    const splitName = !!name && name.split('');
    let count = 0;

    if (splitName.length > 0) {
      splitName.forEach((str) => {
        const c = str.charCodeAt(0);
        if (0x1100 <= c && c <= 0x11ff) count++;
        if (0x3130 <= c && c <= 0x318f) count++;
        if (0xac00 <= c && c <= 0xd7a3) count++;
      });
    }

    return ~(count > 0);
  }

  /**
   *
   *
   * @static
   * @param {*} str
   * @returns
   * @memberof StringUtil
   */
  static searchTextLowerProcess(str) {
    const split = !!str && str.split('');
    let lowers = [];

    if (split.length > 0) {
      lowers = split.map((item) => {
        if (this.checkHangle(item)) {
          return this.lower(item);
        } else {
          return item;
        }
      });
    }

    return lowers.join('');
  }

  /**
   * @description querystring 변환
   * @static
   * @param {*} data
   * @returns
   */
  static querystringConvert(data = {}) {
    const param = new URLSearchParams(data);

    return param.toString();
  }
}
