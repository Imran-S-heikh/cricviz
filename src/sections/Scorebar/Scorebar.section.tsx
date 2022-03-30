import React, { useState } from 'react';
import { useRecoilValue } from "recoil";
import ScoreIndicator from "./molecules/StrikeIndicator.mole";
import { ScorebarState } from "./scorebar.state";
interface Props { }

interface Batter {
  name: string,
  run: number,
  ball: number,
  onStrike?: boolean
}

function Batter({ name, run, ball, onStrike }: Batter) {

  return (
    <div className="Bgc(pm) D(f) Jc(sb) Ai(c) Px(1rem) Fx(1)">
      <div className="D(f) Ai(c) Gap(1rem)">
        <ScoreIndicator strike={onStrike} />
        <p className="Tt(u)">{name}</p>
      </div>
      <div className="D(f) Ai(fe) Gap(1rem)">
        <p className="">{run}</p>
        <span className="C(txt) Lh(1) Fw(500)">{ball}</span>
      </div>
    </div>
  )
}


function Ball({ score }: { score: string }) {
  return (
    <div className="W(5rem) H(5rem) Bdc(pm) Bds(s) Bdw(1px) D(f) Jc(c) Ai(c)">
      <span className="Fz(3.2rem) Fw(b) C(txt)">{score}</span>
    </div>
  )
}

function Bowler() {

  const [onStrike, setOnStrike] = useState(true);

  return (
    <React.Fragment>
      <div className="Bgc(sn) D(f) Jc(sb) Ai(c) Px(1rem) Fx(1)">
        <div className="D(f) Ai(c) Gap(1rem)">
          <p className="Tt(u)">Munna</p>
        </div>
        <div className="D(f) Ai(fe) Gap(1rem)">
          <p className="">1-12</p>
          <span className="C(txt) Lh(1) Fw(500)">1.3</span>
        </div>
      </div>
      <div className="Fx(1) D(f) Ai(c) Gap(5px)">
        <Ball score="W" />
        <Ball score="1" />
        <Ball score="4" />
        {/* <Ball score="2" />
        <Ball score="0" />
        <Ball score="3" />
        <Ball score="W" />
        <Ball score="W" />
        <Ball score="W"/>
        <Ball score="W"/>
        <Ball score="W"/>
        <Ball score="W"/>
        <Ball score="W"/> */}

      </div>
    </React.Fragment>
  )
}



function Scorebar({ }: Props) {

  const {score} = useRecoilValue(ScorebarState);

  return (
    <div className="W(80%) D(g) Gtcr(3) P(1rem) Gap(1rem) H(16rem) Bgc(bg) Pos(a) Fz(3rem) Mx(a) B(2rem) Start(50%) TranslateX(-50%)">
      <div className="D(f) Fxd(c) Gap(5px)">
        <div className="Bgc(sn) Ai(c) D(f) Ta(c) Fx(1)">
          <p className="Fx(1)">TS</p>
          <p className="Fx(1) Bgc(pm) H(100%) D(f) Ai(c) Jc(c)">
            <span>{score}-2</span>
          </p>
          <p className="Fx(1)">3.1</p>
        </div>
        <div className="Bgc(sn) D(f) Ai(c) Fx(1)">
          <div className="D(f) Gap(1rem) Ai(fe)">
            <span className="C(txt) Fw(500) Mstart(1rem) Lh(1)">vs</span>
            <p>JS</p>
          </div>
          <div className="Fx(1) D(f) Jc(fe) Mend(1rem)">
            <p className="Fw(600) Fz(3rem)">RUN-RATE: 3.67</p>
          </div>
        </div>
      </div>
      <div className="D(f) Fxd(c) Gap(5px)">
        <Batter
          name="Shifayet"
          run={10}
          ball={6}
          onStrike
        />
        <Batter
          name="billal"
          run={6}
          ball={2}
          onStrike={false}
        />
      </div>
      <div className="D(f) Fxd(c) Gap(5px)">
        <Bowler />
      </div>
    </div>
  )
}

export default Scorebar