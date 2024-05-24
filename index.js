const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your bot's token
const bot = new TelegramBot('7112433814:AAGE1G5-FgsFofJ3UtwkB8C9yjX3WW-4bmE', { polling: false });

// Replace 'YOUR_CHAT_ID' with your chat ID obtained from the getUpdates method
const chatId = '-1002153693812';

// Function to fetch and send crypto prices to a specific chat ID
async function sendCryptoPrices() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,dogecoin,inj&vs_currencies=usd');
        const prices = response.data;

        const message = `
╔═══════════════════════════════════════╗
║           Crypto Prices               ║
╠═══════════════════════════════════════╣
║ 🟠 Bitcoin: $${prices.bitcoin.usd} 
             
║ 🟣 Ethereum: $${prices.ethereum.usd} 
           
║ 🟢 Solana: $${prices.solana.usd}    
            
║ 🔵 Binance Coin: $${prices.binancecoin.usd} 
    
║ 🟡 Dogecoin: $${prices.dogecoin.usd}            
╚════════════════════════════════════════╝
        `;

        bot.sendMessage(chatId, message);
    } catch (error) {
        console.error('Error fetching and sending crypto prices:', error.message);
    }
}

// Fetch and send prices initially
sendCryptoPrices();

// Fetch and send prices every 10 seconds
setInterval(sendCryptoPrices, 3000000);