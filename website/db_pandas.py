from binance.client import Client
import pandas as pd
import os.path

alarm_list = 'alarm1', 'alarm2', 'alarm3', 'alarm4', 'alarm5', \
             'alarm6', 'alarm7', 'alarm8', 'alarm9', 'alarm10', \
             'alarm11', 'alarm12', 'alarm13', 'alarm14', 'alarm15', \
             'alarm16', 'alarm17', 'alarm18', 'alarm19', 'alarm20', \
             'alarm21', 'alarm22', 'alarm23', 'alarm24', 'alarm25'


def create_db() -> None:
    """
    If the file alarm_data.csv does not exist, create it
    """
    if os.path.isfile('alarm_data.csv'):
        print('Getting data from alarm_data.csv')
    else:
        print('alarm_data.csv does not exist, It will be created.')
        client = Client("", "")
        df = pd.DataFrame(client.get_all_tickers(), columns={'symbol': str(), 'price': float()})
        df.to_csv('api_data.csv', index=False)
        alarm_data_columns = {'symbol': str(), 'alarm_count': float(), 'alarm1': float(), 'alarm2': float(),
                              'alarm3': float(), 'alarm4': float(), 'alarm5': float(), 'alarm6': float(),
                              'alarm7': float(), 'alarm8': float(), 'alarm9': float(), 'alarm10': float(),
                              'alarm11': float(), 'alarm12': float(), 'alarm13': float(), 'alarm14': float(),
                              'alarm15': float(), 'alarm16': float(), 'alarm17': float(), 'alarm18': float(),
                              'alarm19': float(), 'alarm20': float(), 'alarm21': float(), 'alarm22': float(),
                              'alarm23': float(), 'alarm24': float(), 'alarm25': float()}
        alarm_data = pd.DataFrame(df['symbol'], columns=alarm_data_columns)
        alarm_data.update(alarm_data.fillna(0))
        alarm_data.to_csv('alarm_data.csv', index=False)


def get_live_price(self: str):
    df = pd.DataFrame(Client("", "").get_all_tickers(), columns={'symbol': str(), 'price': float()})
    coin = df.loc[df['symbol'] == self, ['symbol', 'price']]
    return coin.to_dict('records')[0]['price']


def add_alarm_data(self: str, alarm: float):
    """
    If the coin exists in the dataframe, then add the alarm to the first empty alarm column
    """
    alarm_db = pd.read_csv('alarm_data.csv')
    coin = alarm_db.loc[alarm_db['symbol'] == self, ['symbol']]
    coin_dict = alarm_db[alarm_db['symbol'] == self].to_dict('records')[0]
    if alarm_db.at[coin.index[0], 'symbol'] == self:
        for i in alarm_list:
            if 0 not in coin_dict.values():  # TODO: if alarms are full, throw error
                print("All alarms are full. Try to remove one alarm to add new one.")
                continue
            if alarm in coin_dict.values():
                for idx in alarm_list:
                    if coin_dict[idx] == alarm:
                        if idx == 'alarm1':
                            continue
                        else:
                            return print(f"{self}: {alarm} is already exist in alarm_data.")
            if coin_dict[i] == 0:
                alarm_db.at[coin.index[0], i] = alarm
                alarm_db.at[coin.index[0], 'alarm_count'] += 1
                alarm_db.to_csv('alarm_data.csv', index=False)
                return print(f"{self}: {alarm} added")
            if coin_dict[i] != 0:
                continue


# Shift alarm to left until there is no zero alarm
def shift_alarm(self: str):
    """
    Shift the value to the next column
    """
    alarm_db = pd.read_csv('alarm_data.csv')
    coin = alarm_db.loc[alarm_db['symbol'] == self, ['symbol']]
    for i in alarm_list:
        if alarm_db[alarm_db['symbol'] == self].to_dict('records')[0][i] == 0:
            continue
        else:
            for j in alarm_list:
                if alarm_db[alarm_db['symbol'] == self].to_dict('records')[0][j] == 0:
                    alarm_db.at[coin.index[0], j] = alarm_db[alarm_db['symbol'] == self].to_dict('records')[0][i]
                    alarm_db.at[coin.index[0], i] = 0
                    alarm_db.to_csv('alarm_data.csv', index=False)
                    break


def remove_alarm_cell(self: str, alarm: float):
    """
    Remove specific alarm from the dataframe
    """
    alarm_db = pd.read_csv('alarm_data.csv')
    coin = alarm_db.loc[alarm_db['symbol'] == self, ['symbol']]
    for i in alarm_list:
        if alarm_db[alarm_db['symbol'] == self].to_dict('records')[0][i] == alarm:
            alarm_db.at[coin.index[0], i] = 0
            print(f"{self}: {alarm} removed")
            alarm_db.at[coin.index[0], 'alarm_count'] -= 1
            alarm_db.to_csv('alarm_data.csv', index=False)
            shift_alarm(self)
            break


def remove_all_alarms(self: str):
    """
    Remove all alarms from the dataframe for specific coin
    """
    alarm_db = pd.read_csv('alarm_data.csv')
    coin = alarm_db.loc[alarm_db['symbol'] == self, ['symbol']]
    for i in alarm_list:
        alarm_db.at[coin.index[0], i] = 0
        alarm_db.at[coin.index[0], 'alarm_count'] = 0
        alarm_db.to_csv('alarm_data.csv', index=False)
        print(f"{self}: all alarms removed")
        break


def get_alarms():
    """
    Loops through the 'alarm_count' column and prints out the symbol and
    alarm count if the alarm count is not equal to zero
    """
    alarm_db = pd.read_csv('alarm_data.csv')
    alarm_dict = dict()
    index_list = alarm_db['alarm_count'].loc[alarm_db['alarm_count'] != 0].index
    for index in index_list:
        symbol = alarm_db.at[index, 'symbol']
        alarm_count = alarm_db.at[index, 'alarm_count']
        alarms = []
        for i in alarm_list:
            if alarm_db.at[index, i] != 0:
                alarms.append(alarm_db.at[index, i])
        alarms.sort()
        alarm_dict[symbol] = alarm_count, alarms
    return alarm_dict

# TESTING
# create_db()
# get_live_price('BTCUSDT')
# shift_alarm('ETHBTC')
# add_alarm_data('BTCUSDT', 1000)
# get_alarms()
# remove_alarm_cell('BTCUSDT', 1000)
# remove_all_alarms('BTCUSDT')
