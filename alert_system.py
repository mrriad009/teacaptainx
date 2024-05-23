import smtplib
from email.mime.text import MIMEText
from crypto_price_fetcher import get_crypto_price

def send_email_alert(subject, body, to_email):
    from_email = "youremail@example.com"
    from_password = "yourpassword"

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email

    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.login(from_email, from_password)
    server.sendmail(from_email, to_email, msg.as_string())
    server.quit()

def check_price_and_alert(crypto_id, threshold, email):
    current_price = get_crypto_price(crypto_id)
    if current_price >= threshold:
        subject = f"{crypto_id.capitalize()} Price Alert!"
        body = f"The price of {crypto_id} has reached ${current_price}."
        send_email_alert(subject, body, email)

if __name__ == "__main__":
    crypto_id = 'bitcoin'
    threshold = 30000  # Example threshold
    email = 'user@example.com'
    check_price_and_alert(crypto_id, threshold, email)
