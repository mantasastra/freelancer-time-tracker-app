import mongoose from "mongoose";

export interface ISession extends mongoose.Document {
  name: string;
  time: number;
  startDate: string;
}

const SessionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
});

const Session = mongoose.model<ISession>("Session", SessionSchema);

export default Session;
