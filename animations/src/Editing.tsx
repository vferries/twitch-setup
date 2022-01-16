import {Composition, continueRender, delayRender} from 'remotion';
import {useEffect, useState} from 'react';
import {getVideoMetadata} from '@remotion/media-utils';
import {Full} from './Full';
import {VideoDescription} from './VideoDescription';

export const Editing = ({videoNames}: {videoNames: string[]}): JSX.Element => {
	const [handle] = useState(() => delayRender());
	const [videos, setVideos] = useState<VideoDescription[]>([]);
	const [totalDuration, setTotalDuration] = useState(0);

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

	return (
		<>
			<Composition
				id="Full"
				component={Full}
				durationInFrames={totalDuration + 1}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{videos}}
			/>
		</>
	);
};
