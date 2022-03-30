import { selector } from "recoil";
import { DataState } from "../../state/atom";

export const ScorebarState = selector({
  key: "SCOREBAR_STATE",
  get: ({get})=>{
    const data = get(DataState);
    const scorecard = {
      score: 0,
      wicket: 0
    }

    data.forEach(item=>{
      scorecard.score = scorecard.score + item.score;
    });

    console.log(scorecard);

    return scorecard
  }
})