import json
from alert_system import check_price_and_alert

def load_config(config_file):
    with open(config_file, 'r') as file:
        config = json.load(file)
    return config

if __name__ == "__main__":
    config = load_config('config.json')
    check_price_and_alert(config['crypto_id'], config['threshold'], config['email'])
