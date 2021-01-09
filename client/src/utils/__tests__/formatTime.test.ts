import formatTime from "../formatTime";

describe("formatTime", () => {
  it.each`
    time      | expectedResult
    ${0}      | ${"00:00:00"}
    ${10}     | ${"00:00:10"}
    ${100}    | ${"00:01:40"}
    ${140}    | ${"00:02:20"}
    ${222}    | ${"00:03:42"}
    ${461}    | ${"00:07:41"}
    ${1210}   | ${"00:20:10"}
    ${5932}   | ${"01:38:52"}
    ${159932} | ${"44:25:32"}
  `(
    "should format the given time $time correctly",
    ({ time, expectedResult }) => {
      expect(formatTime(time)).toEqual(expectedResult);
    }
  );
});
