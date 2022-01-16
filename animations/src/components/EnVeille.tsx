import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import logo from '../assets/enveille.png';

export const EnVeille: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const rotate = interpolate(frame, [0, 125], [0, 360], {
		extrapolateRight: 'clamp',
	});
	const scale = spring({frame, fps, from: 0, to: 1});
	return (
		<Img
			style={{
				filter: 'drop-shadow(white 2px 4px 20px)',
				transformOrigin: '50% 50%',
				transform: `rotate(${rotate}deg) scale(${scale})`,
				position: 'absolute',
				bottom: 320,
				left: 650,
			}}
			src={logo}
		/>
	);
};
