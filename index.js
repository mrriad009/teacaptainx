const axios = require('axios');

// Function to fetch and display crypto prices
async function fetchCryptoPrices() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const prices = response.data;

        console.log('Crypto Prices:');
        console.log(`Bitcoin: $${prices.bitcoin.usd}`);
        console.log(`Ethereum: $${prices.ethereum.usd}`);
    } catch (error) {
        console.error('Error fetching crypto prices:', error.message);
    }
}

// Fetch prices every minute
setInterval(fetchCryptoPrices, 60000);

// Initial fetch
fetchCryptoPrices();
