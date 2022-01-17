import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from './Title';
import {WindowsXP} from './WindowsXP';
import {EnVeille} from './EnVeille';

export const Follow = ({user}: { user?: string }): JSX.Element => {
    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();

    const opacity = interpolate(
        frame,
        [videoConfig.durationInFrames - 15, videoConfig.durationInFrames - 5],
        [1, 0],
        {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
        }
    );
    const transitionStart = 25;

    return (
        <div style={{flex: 1, backgroundColor: 'transparent'}}>
            <div style={{opacity}}>
                <Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
                    <EnVeille/>
                </Sequence>
                <Sequence key="Audio" from={5}>
                    <WindowsXP/>
                </Sequence>
                <Sequence from={transitionStart + 10}>
                    <Title titleText={`Merci ${user} pour le follow !`}/>
                </Sequence>
            </div>
        </div>
    );
};
