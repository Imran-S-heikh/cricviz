import { Ball, InningsType, Match } from "../types";

export interface Timeline extends Ball {
  frame: number,
  currentOver: string[],
}

function generateTimeline(match: Match,fps: number) {
  const timeline: Timeline[] = [];
  let firstInnings, secondInnings;

  if (match[0].innings === InningsType.FIRST) {
    firstInnings = match[0];
    secondInnings = match[1];
  }else{
    secondInnings = match[0]
    firstInnings = match[1]
  }

  firstInnings.overs.forEach(over=>{

    const scores = over.map(item=>{
      if (item.scoreType === "wicket") {
        return "w"
      }else {
        return `${item.score}`
      }
    });

    over.forEach((ball,i)=>{
      const currentBall: Timeline = {
        ...ball,
        frame: ball.time * fps,
        currentOver: scores.slice(0,i+1)
      }
      timeline.push(currentBall)
    })
  })

  secondInnings.overs.forEach(over=>{

    const scores = over.map(item=>{
      if (item.scoreType === "wicket") {
        return "w"
      }else {
        return `${item.score}`
      }
    });

    over.forEach((ball,i)=>{
      const currentBall: Timeline = {
        ...ball,
        frame: ball.time * fps,
        currentOver: scores.slice(0,i+1)
      }
      timeline.push(currentBall)
    })
  })

  return timeline;
  
}

export default generateTimeline;