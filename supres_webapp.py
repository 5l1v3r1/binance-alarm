import os
import subprocess
from binance.client import Client
from flask import Flask, render_template, request, redirect, url_for
import db_pandas
import os

client = Client("", "")
flask_app = Flask(__name__, template_folder='templates', static_folder='static')


def kill_process(pid):
    subprocess.Popen(f'taskkill /F /PID {pid}', shell=True)


def get_alarm_alert_script_pid_number():
    with open('pid.txt', 'r') as f:
        pid = f.read()
    return pid


@flask_app.route('/')
def index():
    db_pandas.create_db()
    alarm_table = db_pandas.get_alarms()
    coins = alarm_table.keys()
    alarms = alarm_table.values()
    return render_template('landing_page.html', coins=coins, alarms=alarms)


@flask_app.route('/run_script/', methods=['POST'])
def run_script():
    ticker = request.form['ticker']
    time_frame = request.form['timeframe']
    sensitivity = request.form['sensitivity']
    candle_count = request.form['candle_count']
    subprocess.run(f"python ../binance-alarm/analyze_script.py {ticker.upper()} "
                   f"{time_frame.upper()} {sensitivity} {candle_count}", cwd="../binance-alarm", shell=True)
    return redirect(url_for('index'))


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

    alarm_table = db_pandas.get_alarms()
    coins = alarm_table.keys()
    alarms = alarm_table.values()
    return render_template('landing_page.html', coins=coins, alarms=alarms)


@flask_app.route('/remove_alert/', methods=['POST'])
def remove_alert():
    data = request.get_json()
    ticker = data['ticker']
    alarm_price = data['price']
    db_pandas.remove_alarm_cell(ticker.upper(), float(alarm_price))
    alarm_table = db_pandas.get_alarms()
    coins = alarm_table.keys()
    alarms = alarm_table.values()
    return render_template('landing_page.html', coins=coins, alarms=alarms)


@flask_app.route('/run_alarm_script/', methods=['POST'])
def run_alarm_script():
    if os.path.exists('pid.txt'):
        kill_process(get_alarm_alert_script_pid_number())
        os.remove('pid.txt')
    if request.form['action'] == 'Alarm tracker start':
        subprocess.run(f"python ../binance-alarm/alarm_alert.py", cwd="../binance-alarm", shell=True)
    return redirect(url_for('index'))


@flask_app.route('/stop_alarm_script/', methods=['POST'])
def stop_alarm_script():
    if not os.path.exists('pid.txt'):
        return redirect(url_for('index'))
    if request.form['action'] == 'Alarm tracker stop':
        kill_process(get_alarm_alert_script_pid_number())
        os.remove('pid.txt')
    return redirect(url_for('index'))


@flask_app.route('/usage')
def usage():
    return 'Usage about bot'


if __name__ == '__main__':
    flask_app.run(debug=True)
