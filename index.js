const TelegramBot = require('node-telegram-bot-api');
const ccxt = require('ccxt');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new TelegramBot('7112433814:AAGE1G5-FgsFofJ3UtwkB8C9yjX3WW-4bmE', { polling: true });

// Replace 'YOUR_CHANNEL_ID' with your channel's chat ID
const channelId = '-1002153693812';

// Function to fetch volume changes and send updates to the channel
async function sendVolumeUpdates() {
    try {
        const volumeChanges = await getVolumeChanges();
        const sortedVolumeChanges = sortVolumeChanges(volumeChanges);
        let message = "Top 15 5-Minute Volume Changes (%):\n";

        for (let i = 0; i < Math.min(15, sortedVolumeChanges.length); i++) {
            const { symbol, change } = sortedVolumeChanges[i];
            message += `${symbol}: ${change.toFixed(2)}%\n`;
        }

        await bot.sendMessage(channelId, message);
    } catch (error) {
        console.error('Error fetching volume changes:', error);
        bot.sendMessage(channelId, 'Error fetching volume changes. Please try again later.');
    }
}

// Function to fetch volume changes
async function getVolumeChanges() {
    const exchange = new ccxt.binance();
    await exchange.loadMarkets();
    const tickers = await exchange.fetchTickers();
    const volumeChanges = [];

    for (const ticker in tickers) {
        const symbol = tickers[ticker]['symbol'];
        if (symbol.endsWith('/USDT')) {
            const volumeChange = tickers[ticker]['quoteVolume'] / tickers[ticker]['info']['volume'];
            volumeChanges.push({ symbol, change: volumeChange });
        }
    }

    return volumeChanges;
}

// Function to sort volume changes from most to least
function sortVolumeChanges(volumeChanges) {
    return volumeChanges.sort((a, b) => b.change - a.change);
}

// Set up interval to send updates every 5 minutes (300,000 milliseconds)
setInterval(sendVolumeUpdates, 300000);
