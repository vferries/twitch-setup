import {Series} from 'remotion'
import {Intro} from "./HelloWorld/Intro";
import {Outro} from "./HelloWorld/Outro";

export const Full: React.FC<{
    user: string;
}> = () => {
    return (
	<Series>
		<Series.Sequence durationInFrames={Infinity}>
			<Intro/>
		</Series.Sequence>
		<Series.Sequence durationInFrames={Infinity}>
			<Outro/>
		</Series.Sequence>
	</Series>
    );
};
