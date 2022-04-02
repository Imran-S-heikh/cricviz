type ID = string | number;

interface Ball {
  bowler: ID,
  batsman: ID,
  score: number,
  ballType: 'legal' | 'wide' | 'no-ball',
  scoreType: 'legal' | 'bye' | 'wicket',
  time: number
}

type Over = Ball[];

export enum InningsType {
  FIRST = "FIRST_INNINGS",
  SECOND = "SECOND_INNINGS"
}

export interface Innings {
  teamId: ID,
  players: ID[],
  overs: Over[],
  score: number,
  innings: InningsType
}

export type Match = [Innings,Innings];