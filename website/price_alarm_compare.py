import db_pandas
import datetime


def alarms_all_coins():
    alarm_table = db_pandas.get_alarms()
    coins = alarm_table.keys()
    alarms = alarm_table.values()
    zip_alarms = list(zip(coins, alarms))
    coin_list = []
    alert_list = []
    get_live_prices = db_pandas.get_multiple_live_price(coins)

    def take_closest(num, collection):
        return min(collection, key=lambda x: abs(x - num))

    for i in coins:
        coin_list.append(i)

    for coin in range(len(coin_list)):
        coin_name = coin_list[coin]
        coin_price = get_live_prices[coin]
        alarm_list = zip_alarms[coin][1][1]
        closest_alarm = take_closest(get_live_prices[coin], alarm_list)
        if abs((coin_price / closest_alarm) - 1) < 0.01:
            print("ALARM", coin_name, coin_price, closest_alarm, datetime.datetime.now())
            alert_list.append([coin_name, coin_price, closest_alarm])
    return alert_list
