import filterSessionsByRange from "../filterSessionsByRange";

describe("filterSessionsByRange", () => {
  it("should filter the given sessions by range", () => {
    const mockSessions: any = [
      {
        name: "__NAME__",
        time: 10,
        startDate: "2021-01-09T20:37:16.898Z",
      },
      {
        name: "__NAME_TWO__",
        time: 25,
        startDate: "2021-01-10T20:37:16.898Z",
      },
      {
        name: "__NAME_THREE__",
        time: 125,
        startDate: "2021-02-09T20:37:16.898Z",
      },
      {
        name: "__NAME_FOUR__",
        time: 321,
        startDate: "2021-01-10T11:37:16.898Z",
      },
    ];

    const startDate = new Date("2021-01-04T00:00:00.000Z");
    const endDate = new Date("2021-01-10T23:59:59.999Z");

    const expectedResult = [
      {
        name: "__NAME__",
        time: 10,
        startDate: "2021-01-09T20:37:16.898Z",
      },
      {
        name: "__NAME_TWO__",
        time: 25,
        startDate: "2021-01-10T20:37:16.898Z",
      },
      {
        name: "__NAME_FOUR__",
        time: 321,
        startDate: "2021-01-10T11:37:16.898Z",
      },
    ];

    expect(filterSessionsByRange(mockSessions, startDate, endDate)).toEqual(
      expectedResult
    );
  });
});
