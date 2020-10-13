import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import addDays from 'date-fns/addDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfMonth from 'date-fns/endOfMonth';
import eachWeekOfInterval from 'date-fns/eachWeekOfInterval';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';

/**
 * @description 시간 계산 유틸
 * @export
 * @class timeUtils
 */
export class timeUtils {
  /**
   * @description 2차원 배열 달력 주단위로 배열만듬
   * @static
   * @param {*} currentDate
   * @returns [[주], [], []]
   */
  static calendarBinary(currentDate) {
    const date = new Date(currentDate);
    const year = getYear(date);
    const month = getMonth(date);
    const startDate = startOfWeek(new Date(year, month, 1), {
      weekStartsOn: 0
    });
    const endDate = endOfMonth(new Date(year, month));
    const weekLength = eachWeekOfInterval({
      start: startDate,
      end: endDate
    }).length;

    let calendar = [];

    while (calendar.length < weekLength) {
      if (calendar.length === 0) {
        const addSevenDays = addDays(startDate, 6);
        calendar.push(this.daysArr(startDate, addSevenDays));
      } else {
        const start = addDays(calendar[calendar.length - 1][6], 1);
        calendar.push(this.daysArr(start, addDays(start, 6)));
      }
    }

    return calendar;
  }

  /**
   * @desciption 1차원 배열 달력 1일부터 월말까지
   * @static
   * @param {*} currentDate
   * @returns [일,일,일]
   */
  static calendar(currentDate) {
    const date = new Date(currentDate);
    const year = getYear(date);
    const month = getMonth(date);
    const endDate = endOfMonth(new Date(year, month));
    const result = this.daysArr(new Date(year, month, 1), endDate);

    return result;
  }

  /**
   *
   * @static
   * @param {*} start
   * @param {*} end
   * @returns
   */
  static daysArr(start, end) {
    return eachDayOfInterval({
      start: start,
      end: end
    });
  }
}
