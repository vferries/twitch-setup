import {Composition, continueRender, delayRender} from 'remotion';
import {Follow} from './Follow';
import {Title} from './components/Title';
import {EnVeille} from './components/EnVeille';
import {Full} from './Full';
import {useEffect, useState} from 'react';
import {VideoDescription} from './VideoDescription';
import {getVideoMetadata} from '@remotion/media-utils';

export const RemotionVideo = (): JSX.Element => {
	/*
	const [handle] = useState(() => delayRender());
	const [videos, setVideos] = useState<VideoDescription[]>([]);
	const [totalDuration, setTotalDuration] = useState(0);
	//const videoNames = ['Intro.mp4', 'video.mp4', 'Outro.mp4'];
	const videoNames = ['Outro.mp4'];

	useEffect(() => {
		const videoMetadata = videoNames.map((name) => {
			return getVideoMetadata(name).then(({durationInSeconds}) => ({
				name,
				duration: Math.floor(durationInSeconds * 30),
			}));
		});
		Promise.all(videoMetadata).then((videoDescriptions) => {
			setVideos(videoDescriptions);
			setTotalDuration(
				videoDescriptions.reduce(
					(totalDuration, {duration}) => totalDuration + duration,
					0
				)
			);
		});
	}, [handle]);
	useEffect(() => {
		if (totalDuration > 0) {
			console.log('TOTAL DURATION', totalDuration);
			continueRender(handle);
		}
	}, [handle, totalDuration]);
*/
	return (
		<>
			<Composition
				id="Follow"
				component={Follow}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				/*defaultProps={{
					user: 'Anonymous',
				}}*/
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Merci pour le follow !',
				}}
			/>
			<Composition
				id="EnVeille"
				component={EnVeille}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Full"
				component={Full}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
				//				defaultProps={{videos}}
			/>
		</>
	);
};
