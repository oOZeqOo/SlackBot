const SlackBot = require('slackbots');
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'ViperBot'
})

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    bot.postMessageToChannel(
        'random',
        'Get inspired while working with @ViperBot',
        params
    );
})

bot.on('error', (err) => {
    console.log(err);
})

function handleMessage(message) {
    // Create the handles for the endpoints
}

// Random Joke
function randomJoke() {
    axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            const joke = res.data.value;

            const params = {
                icon_emoji: ':smile:'
            }

            bot.postMessageToChannel(
                'random',
                `:zap: ${joke}`,
                params
            );

        })
}