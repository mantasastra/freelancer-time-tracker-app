import { ISession } from "../Session.model";

/**
 * Transforms each session by including only
 * the name, time & startDate
 * @param sessions
 */
const transformSessions = (sessions: ISession[]) =>
  sessions.map((session) => ({
    name: session.name,
    time: session.time,
    startDate: session.startDate,
  }));

export default transformSessions;
