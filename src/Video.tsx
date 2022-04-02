import { AbsoluteFill, Composition, useCurrentFrame, Video } from 'remotion';
import Scorebar from "./sections/Scorebar/Scorebar.section";
import { RecoilRoot, useSetRecoilState } from "recoil";
import video from "./../target/20220222_171300.mp4";
import React, { useEffect, useRef } from "react";
import { DataState } from "./state/atom";
import useTimeline from "./hooks/useTimeline.hook";
import generateTimeline, { Timeline } from "./utils/timeline.util";
import { match } from "./data/match.data";
import { Ball } from "./types";

// const data: Ball[] = [10, 36, 43, 55, 65, 78].map((s, i, items) => ({
// 	bowlerName: "munna",
// 	batterName: "shifayet",
// 	score: 4,
// 	time: s,
// 	ballType: "legal",
// 	scoreType: "bye",
// 	startFrame: s * 60,
// 	endFrame: items[i + 1] ? (items[i + 1]) * 60 : 0
// }))

// interface BallType extends Ball {startFrame: number, endFrame: number};

// const data: Ball[] = [
// 	{
// 		bowlerName: "munna",
// 		batterName: "shifayet",
// 		score: 4,
// 		time: 10,
// 		ballType: "legal",
// 		scoreType: "bye"
// 	},
// 	{
// 		bowlerName: "munna",
// 		batterName: "shifayet",
// 		score: 2,
// 		time: 36,
// 		ballType: "legal",
// 		scoreType: "bye"
// 	},
// 	{
// 		bowlerName: "munna",
// 		batterName: "shifayet",
// 		score: 4,
// 		time: 43,
// 		ballType: "legal",
// 		scoreType: "bye"
// 	},
// 	{
// 		bowlerName: "munna",
// 		batterName: "shifayet",
// 		score: 6,
// 		time: 55,
// 		ballType: "legal",
// 		scoreType: "bye"
// 	},
// 	{
// 		bowlerName: "munna",
// 		batterName: "shifayet",
// 		score: 4,
// 		time: 65,
// 		ballType: "legal",
// 		scoreType: "bye"
// 	},
// 	{
// 		bowlerName: "munna",
// 		batterName: "shifayet",
// 		score: 1,
// 		time: 78,
// 		ballType: "legal",
// 		scoreType: "bye"
// 	}
// ]

const timeline = generateTimeline(match,60);

const dataMapped: { [key: number]: Timeline } = {};

timeline.forEach((item) => {
	dataMapped[item.frame] = item
});

const frames = Object.keys(dataMapped);

const Root = () => {

	const frame = useCurrentFrame();
	const setData = useSetRecoilState(DataState);

	useEffect(() => {

		const state: Timeline[] = [];

		for (let dFrame of frames) {
			if (Number(dFrame) <= frame) {
				state.push(dataMapped[Number(dFrame)]);
			}else{
				break;
			}
		}

		setData(state);

	}, [frame]);

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
			component={() => (
				<RecoilRoot>
					<Root />
				</RecoilRoot>
			)}
			durationInFrames={4800}
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
