import { useState } from "react";
import { Ball } from "../state/atom";

function useTimeline(timeline: Ball[]) {

  const [index,setIndex] = useState(0);
  const state = timeline[index];

  function next() {
    setIndex(pre=>pre++)
  }

  function prev() {
    setIndex(pre=>pre--)
  }

  return {
    next,
    prev,
    state,
    index
  }
}

export default useTimeline;