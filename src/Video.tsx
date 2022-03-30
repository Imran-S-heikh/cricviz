import { AbsoluteFill, Composition, useCurrentFrame, Video } from 'remotion';
import Scorebar from "./sections/Scorebar/Scorebar.section";
import { RecoilRoot, useSetRecoilState } from "recoil";
import video from "./../target/20220222_171300.mp4";
import React, { useEffect } from "react";
import { Ball, DataState } from "./state/atom";

const data: Ball[] = [
	{
		bowlerName: "munna",
		batterName: "shifayet",
		score: 4,
		time: 7,
		ballType: "legal",
		runType: "bye"
	},
	{
		bowlerName: "munna",
		batterName: "shifayet",
		score: 2,
		time: 36,
		ballType: "legal",
		runType: "bye"
	},
	{
		bowlerName: "munna",
		batterName: "shifayet",
		score: 4,
		time: 43,
		ballType: "legal",
		runType: "bye"
	}
];

const dataMapped: {[key: number]: number} = {};

data.forEach((item,index)=>{
	dataMapped[item.time * 60] = index
})

const Root = () => {

	const frame = useCurrentFrame();
	const setData = useSetRecoilState(DataState);

	useEffect(()=>{

		const index = dataMapped[frame];

		// console.log(index)

		if (index !== undefined) {
			console.log(index)
			const ball = data[index];
			setData(pre=>[...pre,ball]);
		}
	},[frame]);

	return (
		<React.Fragment>
			<div className="P(r) Fx(1)">
				<AbsoluteFill >
					<Video className="D(f) Jc(c) Ai(c) H(100%)" src={video} />
				</AbsoluteFill>
			</div>
			<Scorebar />
		</React.Fragment>
	)
}

export const RemotionVideo: React.FC = () => {
	return (
			<Composition
				id="score-bar"
				component={()=>(
					<RecoilRoot>
						<Root/>
					</RecoilRoot>
				)}
				durationInFrames={3000}
				fps={60}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
	);
};
