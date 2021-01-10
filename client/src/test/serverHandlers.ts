import { rest } from "msw";

const handlers = [
  rest.get("http://localhost:8000/api/session/list", async (req, res, ctx) => {
    const mockData = [
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
        time: 321,
        startDate: "2021-01-10T11:37:16.898Z",
      },
    ];

    return res(ctx.json(mockData));
  }),
  rest.get(
    "http://localhost:8000/api/session/overview",
    async (req, res, ctx) => {
      const mockData = {
        todaysSessions: [
          {
            name: "__NAME__",
            time: 10,
            startDate: "2021-01-09T20:37:16.898Z",
          },
        ],
        thisWeekSessions: [
          {
            name: "__NAME_TWO__",
            time: 25,
            startDate: "2021-01-08T20:37:16.898Z",
          },
          {
            name: "__NAME_THREE__",
            time: 25,
            startDate: "2021-01-08T15:37:16.898Z",
          },
        ],
        thisMonthSessions: [
          {
            name: "__NAME_FOUR__",
            time: 321,
            startDate: "2021-01-01T01:37:16.898Z",
          },
        ],
      };

      return res(ctx.json(mockData));
    }
  ),
];

export { handlers };
