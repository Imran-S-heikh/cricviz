import { InningsType, Match } from "../types";
import generateTimeline from "../utils/timeline.util";

export const match: Match = [
  {
    teamId: 1,
    innings: InningsType.FIRST,
    overs: [
      [
        {
          score: 1,
          ballType: 'legal',
          batter: "rakib",
          bowler: "imran",
          scoreType: "legal",
          time: 7
        },
        {
          score: 2,
          ballType: "legal",
          batter: "rakib",
          bowler: "imran",
          scoreType: "bye",
          time: 12
        },
        {
          score: 0,
          ballType: "legal",
          batter: "rakib",
          bowler: "imran",
          scoreType: "wicket",
          time: 18
        },
        {
          score: 2,
          ballType: "legal",
          batter: "rakib",
          bowler: "imran",
          scoreType: "bye",
          time: 22
        },
        {
          score: 1,
          ballType: 'legal',
          batter: "rakib",
          bowler: "imran",
          scoreType: "legal",
          time: 25
        },
        {
          score: 4,
          ballType: "legal",
          batter: "rakib",
          bowler: "imran",
          scoreType: "bye",
          time: 30
        }
      ]
    ],
    players: ["imran", "shifayet"],
    score: 10
  },
  {
    teamId: 1,
    innings: InningsType.FIRST,
    overs: [
      [
        {
          score: 0,
          ballType: 'legal',
          bowler: "rakib",
          batter: "imran",
          scoreType: "legal",
          time: 45
        },
        {
          score: 4,
          ballType: "legal",
          bowler: "rakib",
          batter: "imran",
          scoreType: "bye",
          time: 50
        },
        {
          score: 0,
          ballType: "legal",
          bowler: "rakib",
          batter: "imran",
          scoreType: "wicket",
          time: 55
        },
        {
          score: 2,
          ballType: "legal",
          bowler: "rakib",
          batter: "imran",
          scoreType: "bye",
          time: 62
        },
        {
          score: 1,
          ballType: 'legal',
          bowler: "rakib",
          batter: "imran",
          scoreType: "legal",
          time: 68
        },
        {
          score: 4,
          ballType: "legal",
          bowler: "rakib",
          batter: "imran",
          scoreType: "bye",
          time: 72
        }
      ]
    ],
    players: ["rakib", "hasan"],
    score: 11
  }
]

