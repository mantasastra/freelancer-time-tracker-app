/**
 * Formats the given time to the following format:
 * "00:00:00"
 * @param time
 */
const formatTime = (time: number): string => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);

  const formattedSeconds = `0${seconds}`.slice(-2);
  const formattedMinutes = `0${minutes}`.slice(-2);
  const formattedHours = `0${hours}`.slice(-2);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export default formatTime;
