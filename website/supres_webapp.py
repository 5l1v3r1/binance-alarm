import os
import subprocess
import pandas as pd
from binance.client import Client
from flask import Flask, render_template, request, redirect, url_for
import db_pandas
import os

client = Client("", "")
flask_app = Flask(__name__, template_folder='../website/templates', static_folder='../website/static')


def kill_process(pid):
    subprocess.Popen(f'taskkill /F /PID {pid}', shell=True)


def get_alarm_alert_script_pid_number():
    with open('../website/pid.txt', 'r') as f:
        pid = f.read()
    return pid


@flask_app.route('/')
def index():
    db_pandas.create_db()
    alarm_table = db_pandas.get_alarms()
    coins = alarm_table.keys()
    alarms = alarm_table.values()
    fav_list = db_pandas.create_favourite_list_csv()
    favourite_list = fav_list['symbol'].to_list()
    return render_template('landing_page.html', coins=coins, alarms=alarms, alarm_table=alarm_table,
                           favourite_list=favourite_list)


@flask_app.route('/run_script/', methods=['POST'])
def run_script():
    ticker = request.form['ticker']
    time_frame = request.form['timeframe']
    sensitivity = request.form['sensitivity']
    candle_count = request.form['candle_count']
    sma_1 = request.form['sma1']
    sma_2 = request.form['sma2']
    sma_3 = request.form['sma3']
    if sma_1 == '' or sma_1 > candle_count:
        sma_1 = 50
    if sma_2 == '' or sma_2 > candle_count:
        sma_2 = 100
    if sma_3 == '' or sma_3 > candle_count:
        sma_3 = 200
    rsi_subplot = request.form.get('rsi_subplot')
    volume_subplot = request.form.get('volume_subplot')
    subprocess.run(f"python ../website/analyze_script.py {ticker.upper()} "
                   f"{time_frame.upper()} {sensitivity} {sma_1} {sma_2} {sma_3} {candle_count} {rsi_subplot} "
                   f"{volume_subplot}", cwd="../website",
                   shell=True)
    return index()


@flask_app.route('/alarm/', methods=['POST'])
def add_remove():
    ticker = request.form['ticker']
    alarm_price = request.form['alarm-price']
    if request.form['action'] == 'Add':
        db_pandas.add_alarm_data(ticker.upper(), float(alarm_price))
    elif request.form['action'] == 'Remove':
        db_pandas.remove_alarm_cell(ticker.upper(), float(alarm_price))
    elif request.form['action'] == 'Remove All':
        db_pandas.remove_all_alarms(ticker.upper())
    return index()


@flask_app.route('/remove_alert/', methods=['POST'])
def remove_alert():
    data = request.get_json()
    ticker = data['ticker']
    alarm_price = data['price']
    db_pandas.remove_alarm_cell(ticker.upper(), float(alarm_price))
    return index()


@flask_app.route('/run_alarm_script/', methods=['POST'])
def run_alarm_script():
    if os.path.exists('pid.txt'):
        kill_process(get_alarm_alert_script_pid_number())
        os.remove('pid.txt')
    if request.form['action'] == 'Alarm tracker start':
        subprocess.run(f"python ../website/alarm_alert.py", cwd="../website/", shell=True)
    return index()


@flask_app.route('/stop_alarm_script/', methods=['POST'])
def stop_alarm_script():
    if not os.path.exists('pid.txt'):
        return redirect(url_for('index'))
    if request.form['action'] == 'Alarm tracker stop':
        kill_process(get_alarm_alert_script_pid_number())
        os.remove('pid.txt')
    return index()


@flask_app.route('/favorite/', methods=['POST'])
def favorites():
    if request.form['action'] == 'Add Favorite':
        data = request.form['fav']
        db_pandas.add_favourite(data)
    if request.form['action'] == 'Remove Favorite':
        data = request.form['fav']
        db_pandas.remove_favourite(data.upper())
    return index()


if __name__ == '__main__':
    flask_app.run(debug=True)
