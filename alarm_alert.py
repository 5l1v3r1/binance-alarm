import pandas as pd
from binance.client import Client
from winotify import Notification, audio
from datetime import datetime, timedelta

alarm_list = 'alarm1', 'alarm2', 'alarm3', 'alarm4', 'alarm5', \
             'alarm6', 'alarm7', 'alarm8', 'alarm9', 'alarm10', \
             'alarm11', 'alarm12', 'alarm13', 'alarm14', 'alarm15', \
             'alarm16', 'alarm17', 'alarm18', 'alarm19', 'alarm20', \
             'alarm21', 'alarm22', 'alarm23', 'alarm24', 'alarm25'


def alert_dict():
    sent_alerts = {}
    while True:
        client = Client("", "")
        all_data = {}
        csv_alarm = pd.read_csv('alarm_data.csv')
        df = pd.DataFrame(client.get_all_tickers(), columns={'symbol': str(), 'price': float()})
        df.to_csv('api_data.csv', index=False)
        csv_api_prices = pd.read_csv('api_data.csv')
        index_list = csv_alarm['alarm_count'].loc[csv_alarm['alarm_count'] > 0].index
        for index in index_list:
            symbol = csv_alarm.at[index, 'symbol']
            alarm_count = csv_alarm.at[index, 'alarm_count']
            alarms = []
            for i in alarm_list:
                if csv_alarm.at[index, i] != 0:
                    alarms.append(csv_alarm.at[index, i])
            price = csv_api_prices.loc[csv_api_prices['symbol'] == symbol, 'price'].values[0]
            closest_alarm = min(alarms, key=lambda x: abs(x - price))
            percentage_difference = abs(price - closest_alarm) / price * 100
            all_data[symbol] = {'alarm_count': alarm_count, 'alarms': alarms, 'price': price,
                                'closest_alarm': closest_alarm, 'percentage_difference': percentage_difference}
            now = datetime.now()
            postponed_alert = now + timedelta(minutes=2)
            if symbol in sent_alerts:
                if now - sent_alerts[symbol]['postponed_alert'] < timedelta(minutes=3):
                    continue
                else:
                    sent_alerts.pop(symbol)
            if percentage_difference < 1:
                alert_msg = f"{symbol} : {price} \n" \
                            f"Difference : {percentage_difference:.2f}%\n" \
                            f"Alarm : {closest_alarm}"
                toast = Notification(app_id="SupRes", title="Alert", msg=alert_msg, duration="short")
                toast.add_actions(label=f"Go to Spot {symbol}",
                                  launch=f"https://www.binance.com/en/trade/{symbol}")
                toast.add_actions(label=f"Go to Futures {symbol}",
                                  launch=f"https://www.binance.com/en/futures/{symbol}")
                toast.set_audio(audio.Mail, loop=False)
                toast.show()
                with open('sent_alarms.txt', 'a') as f:
                    f.write(f"time: {now} | {symbol} : {price} -> alert: {closest_alarm} "
                            f"difference: {percentage_difference}\n")
                sent_alerts[symbol] = {'time': now, 'postponed_alert': postponed_alert, 'price': price,
                                       'alarm': closest_alarm}
    # return all_data


alert_dict()
