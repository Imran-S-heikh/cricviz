import { atom } from "recoil";

export interface Ball {
  score: number,
  bowlerName: string,
  batterName: string,
  ballType: 'legal' | 'wide' | 'no-ball',
  runType: 'legal' | 'bye',
  time: number
}

export const DataState = atom<Ball[]>({
  key: "DATA_STATE",
  default: []
});