const { solution } = require("./hillsAndValleys");

const testData = [
  {
    terrain: [2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5],
    result: [
      { start: 0, end: 1, type: "valley" },
      { start: 3, end: 3, type: "hill" },
      { start: 8, end: 9, type: "valley" },
      { start: 11, end: 11, type: "hill" },
    ],
  },
  {
    terrain: [1, 0, 0, 0, 0, 0, 1],
    result: [
      { start: 0, end: 0, type: "hill" },
      { start: 1, end: 5, type: "valley" },
      { start: 6, end: 6, type: "hill" },
    ],
  },
  { terrain: [], result: [] },
  { terrain: [-1], result: [{ start: 0, end: 0, type: "hill" }] },
  { terrain: [-3, -3], result: [{ start: 0, end: 1, type: "hill" }] },
  {
    terrain: [0, 0, 0, 1, 1, 1],
    result: [
      { start: 0, end: 2, type: "valley" },
      { start: 3, end: 5, type: "hill" },
    ],
  },
  {
    terrain: [1, 2, 3, 4, 5],
    result: [
      { start: 0, end: 0, type: "valley" },
      { start: 4, end: 4, type: "hill" },
    ],
  },
  {
    terrain: [3, 2, 1, 0, -1, -2, -3],
    result: [
      { start: 0, end: 0, type: "hill" },
      { start: 6, end: 6, type: "valley" },
    ],
  },
];

it.each(testData)("basic tests %o", ({ terrain, result }) => {
  expect(solution(terrain)).toEqual(result);
});

