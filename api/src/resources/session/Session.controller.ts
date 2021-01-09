import { Request, Response, NextFunction } from "express";
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
    res.status(400);
    res.json({
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
    .catch((err) => console.error(err));
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
      res.status(400);
      res.json({
        error: "There are no saved sessions.",
      });
    }

    const transformedSessions = sessions.map((session) => ({
      name: session.name,
      time: session.time,
      startDate: session.startDate,
    }));

    res.json(transformedSessions);
  });
};
