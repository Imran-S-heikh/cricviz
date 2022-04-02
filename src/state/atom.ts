import { atom } from "recoil";
import { Timeline } from "../utils/timeline.util";

export const DataState = atom<Timeline[]>({
  key: "DATA_STATE",
  default: []
});