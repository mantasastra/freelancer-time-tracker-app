import transformSessions from "../transformSessions";

describe("transformSessions", () => {
  it("should transform the given sessions", () => {
    const mockSessions: any = [
      {
        _id: "13123123",
        name: "__NAME__",
        time: 10,
        startDate: "2021-01-09T20:37:16.898Z",
        _v: 0,
      },
      {
        _id: "14124312",
        name: "__NAME_TWO__",
        time: 25,
        startDate: "2021-01-10T20:37:16.898Z",
        _v: 0,
      },
    ];

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
    ];

    expect(transformSessions(mockSessions)).toEqual(expectedResult);
  });
});
