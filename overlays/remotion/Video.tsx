import {Composition} from 'remotion';
import {Follow} from './components/Follow';
import {Title} from './components/Title';
import {EnVeille} from './components/EnVeille';

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
        </>
    );
};
