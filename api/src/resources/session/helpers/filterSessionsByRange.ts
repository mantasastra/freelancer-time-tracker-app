import isSameDay from "date-fns/isSameDay";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import { ISession } from "../Session.model";

/**
 * Return only those dates
 * that are in range of the provided
 * start and end dates
 *
 * @param sessions
 * @param startDate
 * @param endDate
 */
const filterSessionsByRange = (
  sessions: ISession[],
  startDate: Date,
  endDate: Date
) =>
  sessions.filter((session) => {
    const date = new Date(session.startDate);

    return (
      (isSameDay(date, startDate) || isAfter(date, startDate)) &&
      (isSameDay(date, endDate) || isBefore(date, endDate))
    );
  });

export default filterSessionsByRange;
