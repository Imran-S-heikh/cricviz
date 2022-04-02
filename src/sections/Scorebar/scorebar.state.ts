import { selector } from "recoil";
import { DataState } from "../../state/atom";
import { ID } from "../../types";

interface Scorecard {
  score: number,
  wicket: number,
  balls: number,
  // currentOver: string[],
  currentOver: {
    bowlerId: ID | null,
    over: string[],
    runs: number,
    balls: number,
    wicket: number
  }
}

export const ScorebarState = selector({
  key: "SCOREBAR_STATE",
  get: ({ get }) => {
    const data = get(DataState);
    const scorecard: Scorecard = {
      score: 0,
      wicket: 0,
      balls: 0,
      currentOver: {
        wicket: 0,
        runs: 0,
        balls: 0,
        bowlerId: null,
        over: [],
      }
    }

    data.forEach(item => {
      scorecard.score = scorecard.score + item.score;

      if (item.ballType === 'legal') {
        scorecard.balls = scorecard.balls + 1;
      }

      if (item.scoreType === 'wicket') {
        scorecard.wicket = scorecard.wicket + 1;
      }

    });

    // let countCurrentOver = true;

    
    [...data].reverse().forEach((item, i) => {
      if (i === 0) {
        scorecard.currentOver.bowlerId = item.bowler;
        scorecard.currentOver.over = item.currentOver;
      }

      // if (countCurrentOver) {
        
      // }

      if (scorecard.currentOver.bowlerId === item.bowler) {
        if (item.scoreType === 'wicket' && item.ballType === "legal") {
          scorecard.currentOver.wicket = scorecard.currentOver.wicket + 1;
        }else if(item.scoreType === "legal"){
          scorecard.currentOver.runs = scorecard.currentOver.runs + item.score
        }
      }


    });

    console.log(scorecard);

    return scorecard
  }
})