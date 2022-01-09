import OBSWebSocket from 'obs-websocket-js';
import tmi from 'tmi.js';

const CHANNEL = 'enveillecode';
const opts = {
    identity: {
        username: process.env.TMI_USER,
        password: process.env.TMI_OAUTH_TOKEN,
    },
    channels: [CHANNEL],
};
const commandSceneMapping: { [key: string]: string; } = {
    'ide': 'Code',
    'code': 'Code',
    'browser': 'Browser',
    'navigateur': 'Browser',
};

const obs = new OBSWebSocket();
obs.on('ConnectionOpened', () => {
    console.log('Connected to OBS');
});

const client = new tmi.client(opts);
client.on('message', (_target: string, context: any, msg: any, self: boolean) => {
    if (self) {
        return;
    } // Ignore messages from the bot

    console.log('Received one new message', _target, context, msg, self);

    if (msg === '!commands') {
        client.say(CHANNEL, 'You can use ' + Object.keys(commandSceneMapping).join(', ') + ' commands to switch from one scene to the other when your caster forgets to.')
            .then(() => console.log('sent'));
    }
    for (let key of Object.keys(commandSceneMapping)) {
        if (msg === `!${key}`) {
            const scene = commandSceneMapping[key];
            obs.send('SetCurrentScene', {'scene-name': scene}).then(() => console.log(`Scene changed to ${scene}`));
        }
    }
});
client.on('connected', (addr: string, port: number) => {
    console.log(`* Connected to tmi chat ${addr}:${port}`);
});

const connect = () => {
    obs.connect({
        address: 'localhost:4444',
    }).catch(error => {
        console.error(error);
        console.log('⌛ Retry in 10 seconds...');
        setTimeout(connect, 10000);
    });
}

connect();
client.connect().catch(error => console.error(error));
