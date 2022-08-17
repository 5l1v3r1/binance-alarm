import pandas as pd

alarm_list = 'alarm1', 'alarm2', 'alarm3', 'alarm4', 'alarm5', \
             'alarm6', 'alarm7', 'alarm8', 'alarm9', 'alarm10', \
             'alarm11', 'alarm12', 'alarm13', 'alarm14', 'alarm15', \
             'alarm16', 'alarm17', 'alarm18', 'alarm19', 'alarm20', \
             'alarm21', 'alarm22', 'alarm23', 'alarm24', 'alarm25'


def alert_dict():
    all_data = {}
    csv_alarm = pd.read_csv('alarm_data.csv')
    csv_api_prices = pd.read_csv('api_data.csv')
    # print(db_pandas.get_alarms())
    # find all the coins that have an alarm count greater than 0
    index_list = csv_alarm['alarm_count'].loc[csv_alarm['alarm_count'] > 0].index
    # loop through the index list and print the symbol and alarm count for each coin
    for index in index_list:
        symbol = csv_alarm.at[index, 'symbol']
        alarm_count = csv_alarm.at[index, 'alarm_count']
        # print(f'{symbol}: {alarm_count}')
        # find all alarms
        alarms = []
        for i in alarm_list:
            if csv_alarm.at[index, i] != 0:
                alarms.append(csv_alarm.at[index, i])
        # find the price of the coin
        price = csv_api_prices.loc[csv_api_prices['symbol'] == symbol, 'price'].values[0]
        closest_alarm = min(alarms, key=lambda x: abs(x - price))
        percentage_difference = abs(price - closest_alarm) / price * 100
        # create dictionary to store the data
        all_data[symbol] = {'alarm_count': alarm_count, 'alarms': alarms, 'price': price,
                            'closest_alarm': closest_alarm, 'percentage_difference': percentage_difference}
        # print(f'{symbol}: %{percentage_difference=} {price=} : {closest_alarm=}')
    return all_data


print(alert_dict())
