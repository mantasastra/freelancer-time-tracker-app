import { ISession } from "../Session.model";

/**
 * Transforms each session by including only necessary data for the UI
 * @param sessions
 */
const transformSessions = (sessions: ISession[]) =>
  sessions.map((session) => ({
    name: session.name,
    time: session.time,
    startDate: session.startDate,
  }));

export default transformSessions;
