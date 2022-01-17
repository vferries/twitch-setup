import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {Player, PlayerRef} from "@remotion/player";
import {Follow} from "../remotion/components/Follow";
import React, {SyntheticEvent, useEffect, useRef} from "react";

const user = {user: 'Moonra'};

const Home: NextPage = () => {
    const player = useRef<PlayerRef>(null);
    const queue = useRef<string[]>([]);

    const handleEnd = () => {
        if (queue.current.length > 0) {
            queue.current.shift();
            if (queue.current.length > 0) {
                player.current?.play();
            }
        }
    };

    const handleClick = (e: SyntheticEvent) => {
        queue.current.push('follow');
        player.current?.play(e);
    };

    useEffect(() => {
        const playerRef = player.current;
        playerRef?.addEventListener('ended', handleEnd);
        return () => {
            playerRef?.removeEventListener('ended', handleEnd);
        };
    }, [handleEnd, player]);

    console.log('Rendering');
    return (
        <div className={styles.container}>
            <input
                type="button"
                value="Add an event to the queue"
                onClick={e => handleClick(e)}/>
            <Player
                ref={player}
                component={Follow}
                compositionWidth={1920}
                compositionHeight={1024}
                durationInFrames={150}
                numberOfSharedAudioTags={5}
                fps={30}
                inputProps={user}/>
        </div>
    )
}

export default Home
