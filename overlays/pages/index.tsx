import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {Player, PlayerRef} from "@remotion/player";
import {Follow} from "../remotion/Follow";
import {useCallback, useEffect, useRef, useState} from "react";

const Home: NextPage = () => {
    let count = 0;

    const player = useRef<PlayerRef>(null);
    const [playing, setPlaying] = useState<string | undefined>(undefined);
    const [queue, setQueue] = useState<string[]>([]);

    const handleEnd = useCallback(() => {
        if (queue.length > 0) {
            const [first, ...rest] = queue;
            setQueue(rest);
            setPlaying(first);
            player?.current?.play();
        } else {
            setPlaying(undefined);
        }
    }, [queue]);

    const handleClick = useCallback(() => {
        if (playing) {
            setQueue([...queue, 'follow']);
        } else {
            setPlaying('follow');
            player?.current?.play();
        }
    }, [playing, queue]);

    useEffect(() => {
            const playerRef = player?.current;
            playerRef?.addEventListener('ended', handleEnd);
            return () => {
                playerRef?.removeEventListener('ended', handleEnd);
            };
    }, [handleEnd, player]);

    return (
        <div className={styles.container}>
            <input
                type="button"
                value="Ajouter un évènement à la queue"
                onClick={handleClick}/>
            <div>
                <h1>Queue</h1>
                {queue.map(e => {
                    count++;
                    return <div key={e + count}>{e}</div>
                })}
            </div>
            <Player
                ref={player}
                component={Follow}
                compositionWidth={1920}
                compositionHeight={1024}
                durationInFrames={150}
                fps={30}
                inputProps={{user: 'Moonra'}}/>
        </div>
    )
}

export default Home
