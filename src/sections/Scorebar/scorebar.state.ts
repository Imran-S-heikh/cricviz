import { selector } from "recoil";
import { DataState } from "../../state/atom";

export const ScorebarState = selector({
  key: "SCOREBAR_STATE",
  get: ({get})=>{
    const data = get(DataState);
    const scorecard = {
      score: 0,
      wicket: 0,
      balls: 0
    }

    data.forEach(item=>{
      scorecard.score = scorecard.score + item.score;

      if (item.ballType === 'legal') {
        scorecard.balls = scorecard.balls + 1;
      }

      if(item.scoreType === 'wicket') {
        scorecard.balls = scorecard.balls + 1;
      }

    });

    console.log(scorecard);

    return scorecard
  }
})