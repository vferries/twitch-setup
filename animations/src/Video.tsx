import {Composition} from 'remotion';
import {Follow} from './Follow';
import {Logo} from './HelloWorld/Logo';
import {Title} from './HelloWorld/Title';
import {EnVeille} from "./HelloWorld/EnVeille";
import {Outro} from "./HelloWorld/Outro";
import {Full} from "./Full";

export const RemotionVideo = (): JSX.Element => {
	return (
		<>
			<Composition
				id="Follow"
				component={Follow}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					user: 'Anonymous'
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Merci pour le follow !'
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
				id="Outro"
				component={Outro}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Full"
				component={Full}
				durationInFrames={1000}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
