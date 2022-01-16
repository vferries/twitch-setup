import {Series, staticFile, Video} from 'remotion';
import {VideoDescription} from './VideoDescription';

//export const Full = ({videos}: {videos: VideoDescription[]}): JSX.Element => {
export const Full = (): JSX.Element => {
	const videos = [
		{duration: 100, name: 'Intro.mp4'},
		{duration: 100, name: 'Outro.mp4'},
	];
	return (
		<Series>
			{videos.map(({name, duration}) => (
				<Series.Sequence key={name} durationInFrames={duration}>
					<Video src={staticFile('/' + name)} />
				</Series.Sequence>
			))}
		</Series>
	);
};
