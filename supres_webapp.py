import subprocess
from binance.client import Client
from flask import Flask, render_template, request, redirect, url_for
import db_pandas

client = Client("", "")
flask_app = Flask(__name__, template_folder='templates', static_folder='static')


@flask_app.route('/')
def index():
    db_pandas.create_db()
    alarm_table = db_pandas.get_alarms()
    coins = alarm_table.keys()
    alarms = alarm_table.values()
    return render_template('alarm_page.html', coins=coins, alarms=alarms)


@flask_app.route('/run_script/', methods=['POST'])
def run_script():
    ticker = request.form['ticker']
    time_frame = request.form['timeframe']
    subprocess.run(f"python ../binance-alarm/analyze_script.py {ticker.upper()} "
                   f"{time_frame.upper()}", cwd="../binance-alarm", shell=True)
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
    elif request.form['action'] == 'Alarm tracker start':
        #subprocess.run(f"python ../binance-alarm/alarm_alert.py", cwd="../binance-alarm", shell=True)
        pass
    elif request.form['action'] == 'Alarm tracker stop':
        pass

    alarm_table = db_pandas.get_alarms()
    coins = alarm_table.keys()
    alarms = alarm_table.values()
    return render_template('alarm_page.html', coins=coins, alarms=alarms)


@flask_app.route('/usage')
def usage():
    return 'Usage about bot'


if __name__ == '__main__':
    flask_app.run(debug=True)
