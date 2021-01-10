import { Request, Response, NextFunction } from "express";
import isSameDay from "date-fns/isSameDay";
import startOfWeek from "date-fns/startOfWeek";
import startOfMonth from "date-fns/startOfMonth";
import endOfWeek from "date-fns/endOfWeek";
import endOfMonth from "date-fns/endOfMonth";

import transformSessions from "./helpers/transformSessions";
import filterSessionsByRange from "./helpers/filterSessionsByRange";
import Session from "./Session.model";

type Data = {
  name: string;
  time: number;
  startDate: string;
};

/**
 * POST /api/session/add
 **/
export const addSession = (req: Request, res: Response, next: NextFunction) => {
  const data: Data = req.body;

  if (!data.name || !data.time) {
    return res.status(400).json({
      error: "Properties 'name' and 'time' must be present.",
    });
  }

  const newSession = new Session({
    name: data.name,
    time: data.time,
    startDate: data.startDate,
  });

  newSession
    .save()
    .then(() => res.json({ message: "Session has been saved" }))
    .catch(() => {
      return res.status(500).json({
        error: "Something's wrong. Please try again later.",
      });
    });
};

/**
 * GET /api/session/list
 **/
export const getAllSessions = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Session.find({}, (err, sessions) => {
    if (err) {
      return res.status(400).json({
        error: "There are no saved sessions.",
      });
    }

    const transformedSessions = transformSessions(sessions);

    res.json(transformedSessions);
  });
};

/**
 * GET /api/session/overview
 **/
export const getOverview = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Session.find({}, (err, sessions) => {
    if (err) {
      return res.status(400).json({
        error: "There are no saved sessions.",
      });
    }

    const currentDate = new Date();
    const thisWeekStartDate = startOfWeek(currentDate, { weekStartsOn: 1 });
    const thisWeekEndDate = endOfWeek(currentDate, { weekStartsOn: 1 });
    const thisMonthStartDate = startOfMonth(currentDate);
    const thisMonthEndDate = endOfMonth(currentDate);

    const todaysSessions = sessions.filter(({ startDate }) =>
      isSameDay(currentDate, new Date(startDate))
    );
    const thisWeekSessions = filterSessionsByRange(
      sessions,
      thisWeekStartDate,
      thisWeekEndDate
    );
    const thisMonthSessions = filterSessionsByRange(
      sessions,
      thisMonthStartDate,
      thisMonthEndDate
    );

    const formattedTodaysSessions = transformSessions(todaysSessions);
    const formattedThisWeekSessions = transformSessions(thisWeekSessions);
    const formattedThisMonthSessions = transformSessions(thisMonthSessions);

    return res.json({
      todaysSessions: formattedTodaysSessions,
      thisWeekSessions: formattedThisWeekSessions,
      thisMonthSessions: formattedThisMonthSessions,
    });
  });
};
