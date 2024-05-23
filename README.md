# teacaptainx
# Crypto Price Alert

## Description
Crypto Price Alert is a Python-based tool that monitors cryptocurrency prices and sends email alerts when the price crosses a user-defined threshold.

## Features
- Fetch current cryptocurrency prices.
- Set price thresholds for alerts.
- Send email notifications when the price exceeds the threshold.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/crypto-price-alert.git
   ```
2. Navigate to the project directory:
   ```sh
   cd crypto-price-alert
   ```
3. Create and activate a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `.\venv\Scripts\activate`
   ```
4. Install dependencies:
   ```sh
   pip install requests
   ```

## Configuration
1. Edit the `config.json` file to set your preferences:
   ```json
   {
       "crypto_id": "bitcoin",
       "threshold": 30000,
       "email": "user@example.com"
   }
   ```

## Usage
Run the main script:
```sh
python main.py
