import { InningsType, Match } from "../types";

const match: Match = [
  {
    teamId: 1,
    innings: InningsType.FIRST,
    overs: [
      [
        {
          score: 1,
          ballType: 'legal',
          batsman: "rakib",
          bowler: "imran",
          scoreType: "legal",
          time: 7
        },
        {
          score: 2,
          ballType: "legal",
          batsman: "rakib",
          bowler: "imran",
          scoreType: "bye",
          time: 12
        },
        {
          score: 0,
          ballType: "legal",
          batsman: "rakib",
          bowler: "imran",
          scoreType: "wicket",
          time: 18
        },
        {
          score: 2,
          ballType: "legal",
          batsman: "rakib",
          bowler: "imran",
          scoreType: "bye",
          time: 22
        },
        {
          score: 1,
          ballType: 'legal',
          batsman: "rakib",
          bowler: "imran",
          scoreType: "legal",
          time: 25
        },
        {
          score: 4,
          ballType: "legal",
          batsman: "rakib",
          bowler: "imran",
          scoreType: "bye",
          time: 30
        }
      ]
    ],
    players: ["imran","shifayet"],
    score: 34
  },
  {
    teamId: 1,
    innings: InningsType.FIRST,
    overs: [],
    players: ["rakib","hasan"],
    score: 34
  }
]