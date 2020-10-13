/**
 *
 * @description 필터 유틸
 * @class FilterUtil
 */
export class FunctionUtil {
  /**
   * @descripton 함수를 pipe한다
   * @static
   * @param {*} functions
   * @returns value
   */
  static pipe(...functions) {
    return (value) => {
      return functions.reduce((currentValue, currentFunction) => {
        return currentFunction(currentValue);
      }, value);
    };
  }

  /**
   * @description 함수를 compose 한다
   * @static
   * @param {*} functions
   * @returns
   */
  static compose(...functions) {
    return (value) => {
      return functions.reduceRight((currentValue, currentFunction) => {
        return currentFunction(currentValue);
      }, value);
    };
  }

  /**
   * @description 함수인지 체크
   * @static
   * @param {*} value
   * @returns
   */
  static isFunction(value) {
    return (
      value &&
      (Object.prototype.toString.call(value) === '[object Function]' ||
        'function' === typeof value ||
        value instanceof Function)
    );
  }
}
