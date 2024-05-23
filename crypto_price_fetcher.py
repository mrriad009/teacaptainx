import requests

def get_crypto_price(crypto_id):
    url = f'https://api.coingecko.com/api/v3/simple/price?ids={crypto_id}&vs_currencies=usd'
    response = requests.get(url)
    data = response.json()
    return data[crypto_id]['usd']

if __name__ == "__main__":
    crypto_id = 'bitcoin'
    price = get_crypto_price(crypto_id)
    print(f"The current price of {crypto_id} is ${price}")
