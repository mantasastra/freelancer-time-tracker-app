import { Request, Response, NextFunction } from "express";
import Session from "./Session.model";

type Data = {
  name: string;
  time: number;
};

export const addSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
  });

  newSession
    .save()
    .then(() => res.json({ message: "Session has been saved" }))
    .catch((err) => console.error(err));
};
