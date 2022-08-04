import csv
import os
import sys
import time
from dataclasses import dataclass
from datetime import datetime, timedelta
import pandas as pd
import pandas_ta.momentum as ta
import plotly.graph_objects as go
from binance import Client
from plotly.subplots import make_subplots


@dataclass
class Values:
    ticker_csv: str
    selected_timeframe: str

    def __post_init__(self):
        self.ticker_csv = self.ticker_csv.upper()
        self.selected_timeframe = self.selected_timeframe.lower()


class Supres(Values):
    @staticmethod
    def main(ticker_csv, selected_timeframe, candle_count=254):
        print(f"Start main function in {time.perf_counter() - perf} seconds\n"
              f"{ticker_csv} data analysis in progress.")
        df = pd.read_csv(ticker_csv, delimiter=',', encoding="utf-8-sig", index_col=False, nrows=candle_count,
                         keep_default_na=False)
        df = df.iloc[::-1]
        df['date'] = pd.to_datetime(df['date'], format="%Y-%m-%d")
        df = pd.concat([df, df.tail(1)], axis=0, ignore_index=True)
        df.dropna(inplace=True)
        historical_hightimeframe = (Client.KLINE_INTERVAL_1DAY,
                                    Client.KLINE_INTERVAL_3DAY)
        historical_lowtimeframe = (Client.KLINE_INTERVAL_1MINUTE,
                                   Client.KLINE_INTERVAL_3MINUTE,
                                   Client.KLINE_INTERVAL_5MINUTE,
                                   Client.KLINE_INTERVAL_15MINUTE,
                                   Client.KLINE_INTERVAL_30MINUTE,
                                   Client.KLINE_INTERVAL_1HOUR,
                                   Client.KLINE_INTERVAL_2HOUR,
                                   Client.KLINE_INTERVAL_4HOUR,
                                   Client.KLINE_INTERVAL_6HOUR,
                                   Client.KLINE_INTERVAL_8HOUR,
                                   Client.KLINE_INTERVAL_12HOUR)
        # Sma, Rsi, Macd, Fibonacci variables
        dfsma = df[:-1]
        sma10 = tuple((dfsma.ta.sma(10)))
        sma50 = tuple((dfsma.ta.sma(50)))
        sma100 = tuple((dfsma.ta.sma(100)))
        rsi = tuple((ta.rsi(df['close'][:-1])))
        support_list, resistance_list, fibonacci_uptrend, fibonacci_downtrend, pattern_list = [], [], [], [], []
        support_above, support_below, resistance_below, resistance_above, x_date = [], [], [], [], ''
        fibonacci_multipliers = (0.236, 0.382, 0.500, 0.618, 0.705, 0.786, 0.886, 1.13)
        # Chart settings
        legend_color = "#D8D8D8"
        chart_color = "#E7E7E7"
        background_color = "#E7E7E7"
        support_line_color = "LightSeaGreen"
        resistance_line_color = "MediumPurple"
        # Add a watermark to the plot
        watermark_layout = (dict(name="draft watermark", text="twitter.com/sup_res", textangle=-30, opacity=0.15,
                                 font=dict(color="black", size=100), xref="paper", yref="paper", x=0.5, y=0.3,
                                 showarrow=False))
        fig = make_subplots(rows=3, cols=1, shared_xaxes=True,
                            vertical_spacing=0, row_width=[0.1, 0.1, 0.8])

        def support(candle_value, candle_index, before_candle_count, after_candle_count) -> (bool | None):
            """
            If the price of the asset is increasing for the last before_candle_count and decreasing for
            the last after_candle_count, then return True. Otherwise, return False
            candle_value: The price data for the asset
            candle_index: The index of the first bar in the support
            before_candle_count: The number of bars back you want to look
            after_candle_count: The number of bars in the second trend
            True if the price of the price is supported by the previous low price, False if it is not
            """
            try:
                for current_value in range(candle_index - before_candle_count + 1, candle_index + 1):
                    if candle_value.low[current_value] > candle_value.low[current_value - 1]:
                        return False
                for current_value in range(candle_index + 1, candle_index + after_candle_count + 1):
                    if candle_value.low[current_value] < candle_value.low[current_value - 1]:
                        return False
                return True
            except KeyError:
                pass

        def resistance(candle_value, candle_index, before_candle_count, after_candle_count) -> (bool | None):
            """
            If the price of the stock is increasing for the last before_candle_count and decreasing for the last
            after_candle_count, then return True. Otherwise, return False
            candle_value: The price data for the asset
            candle_index: The index of the first candlestick in the resistance
            before_candle_count: The number of candlesticks back you want to analyze
            after_candle_count: The number of candlesticks after the can
            True if the price has been increasing for the last n1 periods and decreasing for the n2 periods
            """
            try:
                for current_value in range(candle_index - before_candle_count + 1, candle_index + 1):
                    if candle_value.high[current_value] < candle_value.high[current_value - 1]:
                        return False
                for current_value in range(candle_index + 1, candle_index + after_candle_count + 1):
                    if candle_value.high[current_value] > candle_value.high[current_value - 1]:
                        return False
                return True
            except KeyError:
                pass

        def fibonacci_pricelevels(high_price, low_price) -> tuple[list, list]:
            """
            Uptrend Fibonacci Retracement Formula =>
            Fibonacci Price Level = High Price - (High Price - Low Price)*Fibonacci Level
            high_price: High price for the current price level
            low_price: Low price for the period
            """
            for multiplier in fibonacci_multipliers:
                retracement_levels_uptrend = low_price + (high_price - low_price) * multiplier
                fibonacci_uptrend.append(retracement_levels_uptrend)
                retracement_levels_downtrend = high_price - (high_price - low_price) * multiplier
                fibonacci_downtrend.append(retracement_levels_downtrend)
            return fibonacci_uptrend, fibonacci_downtrend

        def candlestick_patterns() -> list:
            """
            Takes in a dataframe and returns a list of candlestick patterns found in the dataframe
            """
            from candlestick import candlestick
            nonlocal df
            df = candlestick.inverted_hammer(df, target='inverted_hammer')
            df = candlestick.hammer(df, target='hammer')
            df = candlestick.doji(df, target='doji')
            df = candlestick.bearish_harami(df, target='bearish_harami')
            df = candlestick.bearish_engulfing(df, target='bearish_engulfing')
            df = candlestick.bullish_harami(df, target='bullish_harami')
            df = candlestick.bullish_engulfing(df, target='bullish_engulfing')
            df = candlestick.dark_cloud_cover(df, target='dark_cloud_cover')
            df = candlestick.dragonfly_doji(df, target='dragonfly_doji')
            df = candlestick.hanging_man(df, target='hanging_man')
            df = candlestick.gravestone_doji(df, target='gravestone_doji')
            df = candlestick.morning_star(df, target='morning_star')
            df = candlestick.morning_star_doji(df, target='morning_star_doji')
            df = candlestick.piercing_pattern(df, target='piercing_pattern')
            df = candlestick.star(df, target='star')
            df = candlestick.shooting_star(df, target='shooting_star')
            df.replace({True: 'pattern_found'}, inplace=True)  # Dodge boolean 'True' output

            def pattern_find_func(pattern_row, t=0, pattern_find=None) -> list:
                """
                The function takes in a dataframe and a list of column names. It then iterates through the
                list of column names and checks if the column name is in the dataframe. If it is, it adds
                the column name to a list and adds the date of the match to another list
                """
                if pattern_find is None:
                    pattern_find = []
                for col in df.columns:
                    pattern_find.append(col)
                for pattern in pattern_row:
                    if pattern == 'pattern_found':
                        # even pattern, odd date
                        pattern_list.append(pattern_find[t])
                        pattern_list.append(pattern_row['date'].strftime('%b-%d-%y'))
                    t += 1
                return pattern_list

            # Loop through the dataframe and find the pattern in the dataframe
            for item in range(-3, -30, -1):
                pattern_find_func(df.iloc[item])
            return pattern_list

        def sensitivity(sens=2) -> tuple[list, list]:
            """
            Find the support and resistance levels for a given asset
            sensitivity:1 is recommended for daily charts or high frequency trade scalping
            sens: sensitivity parameter default:2, level of detail 1-2-3 can be given to function
            """
            for sens_row in range(3, len(df) - 1):
                if support(df, sens_row, 3, sens):
                    support_list.append((sens_row, df.low[sens_row]))
                if resistance(df, sens_row, 3, sens):
                    resistance_list.append((sens_row, df.high[sens_row]))
            return support_list, resistance_list

        def check_lines() -> tuple[list, list]:
            """
            Check if the support and resistance lines are above or below the latest close price.
            """
            # Find support and resistance levels
            # Check if the support is below the latest close. If it is, it is appending it to the list
            # support_below. If it isn't, it is appending it to the list resistance_below.
            all_support_list = tuple(map(lambda sup1: sup1[1], support_list))
            all_resistance_list = tuple(map(lambda res1: res1[1], resistance_list))
            latest_close = tuple(df['close'])[-1]
            for support_line in all_support_list:  # Find closes
                if support_line < latest_close:
                    support_below.append(support_line)
                else:
                    resistance_below.append(support_line)
            # Check if the price is above the latest close price. If it is, it is appending it to the
            # resistance_above list. If it is not, it is appending it to the support_above list.
            for resistance_line in all_resistance_list:
                if resistance_line > latest_close:
                    resistance_above.append(resistance_line)
                else:
                    support_above.append(resistance_line)
            return list(all_support_list), list(all_resistance_list)

        def legend_candle_patterns() -> None:
            fig.add_trace(go.Scatter(
                y=[support_list[0]], name="----------------------------------------", mode="markers",
                marker=dict(color=legend_color, size=14)))
            fig.add_trace(go.Scatter(
                y=[support_list[0]], name="Latest Candlestick Patterns", mode="markers",
                marker=dict(color=legend_color, size=14)))
            for pat1 in range(1, len(pattern_list), 2):  # Candlestick patterns
                fig.add_trace(go.Scatter(
                    y=[support_list[0]], name=f"{pattern_list[pat1]} -> {pattern_list[pat1 - 1]}", mode="lines",
                    marker=dict(color=legend_color, size=10)))

        def levels() -> tuple[list, list]:
            # Check if the support level is empty. If it is, it appends the minimum value of the low
            # column to the list.
            if len(support_below) == 0:
                support_below.append(df.low.min())
            # Check if the resistance level is empty. If it is, it appends the minimum value of the high
            # column to the list.
            if len(resistance_above) == 0:
                resistance_above.append(df.high.max())
            # Compute the Fibonacci sequence for the numbers in the range of the last element of the
            # resistance_above list and the last element of the support_below list.
            return fibonacci_pricelevels(resistance_above[-1], support_below[-1])

        def create_candlestick_plot() -> None:
            fig.add_trace(go.Candlestick(x=df['date'][:-1].dt.strftime(x_date),
                                         name="Candlestick",
                                         text=df['date'].dt.strftime(x_date),
                                         open=df['open'],
                                         high=df['high'],
                                         low=df['low'],
                                         close=df['close']), row=1, col=1)
            fig.update_layout(annotations=[watermark_layout])

        def add_volume_subplot() -> None:
            fig.add_trace(go.Bar(x=df['date'][:-1].dt.strftime(x_date), y=df['Volume USDT'], name="Volume USDT",
                                 showlegend=False), row=2, col=1)

        def add_rsi_subplot() -> None:
            fig.add_trace(go.Scatter(x=df['date'][:-1].dt.strftime(x_date), y=rsi, name="RSI",
                                     showlegend=False), row=3, col=1)
            fig.add_hline(y=30, name="RSI lower band", line=dict(color='red', width=1), line_dash='dash', row=3, col=1)
            fig.add_hline(y=70, name="RSI higher band", line=dict(color='red', width=1), line_dash='dash', row=3, col=1)
            fig.add_hrect(y0=30, y1=70, line_width=0, fillcolor="gray", opacity=0.2, row=3, col=1)

        def draw_support(c=0) -> None:
            """
            Draws the support lines and adds annotations to the chart.
            """
            while True:
                if c > len(support_list) - 1:
                    break
                # Support lines
                fig.add_shape(type='line', x0=support_list[c][0] - 1, y0=support_list[c][1],
                              x1=len(df) + 25,
                              y1=support_list[c][1], line=dict(color=support_line_color, width=2))
                # Support annotations
                fig.add_annotation(x=len(df) + 7, y=support_list[c][1], text=str(support_list[c][1]),
                                   font=dict(size=15, color=support_line_color))
                c += 1

        def draw_resistance(c=0) -> None:
            """
            Draws the resistance lines and adds annotations to the chart.
            """
            while True:
                if c > len(resistance_list) - 1:
                    break
                # Resistance lines
                fig.add_shape(type='line', x0=resistance_list[c][0] - 1, y0=resistance_list[c][1],
                              x1=len(df) + 25,
                              y1=resistance_list[c][1], line=dict(color=resistance_line_color, width=1))
                # Resistance annotations
                fig.add_annotation(x=len(df) + 20, y=resistance_list[c][1], text=str(resistance_list[c][1]),
                                   font=dict(size=15, color=resistance_line_color))
                c += 1

        def legend_texts() -> None:
            fig.add_trace(go.Scatter(
                y=[support_list[0]], name=f"Resistances    ||   Supports", mode="markers+lines",
                marker=dict(color=resistance_line_color, size=10)))
            str_price_len = 3
            sample_price = df['close'][0]
            if sample_price < 1:
                str_price_len = len(str(sample_price))

            def legend_support_resistance_values(temp=0) -> None:
                blank = " " * (len(str(sample_price)) + 1)
                differ = len(float_resistance_above) - len(float_support_below)
                try:
                    if differ < 0:
                        for i in range(abs(differ)):
                            float_resistance_above.extend([0])
                    if differ > 0:
                        for i in range(abs(differ)):
                            float_support_below.extend([0])
                    for _ in range(max(len(float_resistance_above), len(float_support_below))):
                        if float_resistance_above[temp] == 0:  # This is for legend alignment
                            legend_supres = f"{float(float_resistance_above[temp]):.{str_price_len - 1}f}{blank}     " \
                                            f"||   {float(float_support_below[temp]):.{str_price_len - 1}f}"
                        else:
                            legend_supres = f"{float(float_resistance_above[temp]):.{str_price_len - 1}f}       " \
                                            f"||   {float(float_support_below[temp]):.{str_price_len - 1}f}"
                        fig.add_trace(go.Scatter(
                            y=[support_list[0]],
                            name=legend_supres,
                            mode="lines",
                            marker=dict(color=legend_color, size=10)))
                        if temp != 14:
                            temp += 1
                        else:
                            break
                except IndexError:
                    pass

            def text_and_indicators() -> None:
                fig.add_trace(go.Scatter(
                    y=[support_list[0]], name=f"github.com/arabacibahadir/sup-res", mode="markers",
                    marker=dict(color=legend_color, size=0)))
                fig.add_trace(go.Scatter(
                    y=[support_list[0]], name=f"-------  twitter.com/sup_res  --------", mode="markers",
                    marker=dict(color=legend_color, size=0)))
                fig.add_trace(go.Scatter(
                    y=[support_list[0]], name=f"Indicators", mode="markers", marker=dict(color=legend_color, size=14)))
                fig.add_trace(go.Scatter(
                    y=[support_list[0]], name=f"RSI         : {int(rsi[-1])}", mode="lines",
                    marker=dict(color=legend_color, size=10)))
                # Add SMA10, SMA50, and SMA100 to the chart and legend
                fig.add_trace(go.Scatter(x=df['date'].dt.strftime(x_date), y=sma10,
                                         name=f"SMA10     : {float(sma10[-1]):.{str_price_len}f}",
                                         line=dict(color='#5c6cff', width=3)))
                fig.add_trace(go.Scatter(x=df['date'].dt.strftime(x_date), y=sma50,
                                         name=f"SMA50     : {float(sma50[-1]):.{str_price_len}f}",
                                         line=dict(color='#950fba', width=3)))
                fig.add_trace(go.Scatter(x=df['date'].dt.strftime(x_date), y=sma100,
                                         name=f"SMA100   : {float(sma100[-1]):.{str_price_len}f}",
                                         line=dict(color='#a69b05', width=3)))
                fig.add_trace(go.Scatter(
                    y=[support_list[0]], name=f"-- Fibonacci Uptrend | Downtrend --", mode="markers",
                    marker=dict(color=legend_color, size=0)))

            def legend_fibonacci() -> None:
                # Add a line to the legend for each Fibonacci level
                mtp = len(fibonacci_multipliers) - 1
                for _ in fibonacci_uptrend:
                    fig.add_trace(go.Scatter(
                        y=[support_list[0]],
                        name=f"Fib {fibonacci_multipliers[mtp]:.3f} "
                             f": {float(fibonacci_uptrend[mtp]):.{str_price_len}f} "
                             f"| {float(fibonacci_downtrend[mtp]):.{str_price_len}f} ",
                        mode="lines",
                        marker=dict(color=legend_color, size=10)))
                    mtp -= 1

            legend_support_resistance_values()
            text_and_indicators()
            legend_fibonacci()
            # Candle patterns for HTF
            if selected_timeframe in historical_hightimeframe:
                legend_candle_patterns()

        def chart_updates() -> None:
            fig.update_layout(title=str(f"{ticker} {selected_timeframe.upper()} Chart"),
                              hovermode='x', dragmode="zoom",
                              paper_bgcolor=background_color, plot_bgcolor=chart_color, xaxis_rangeslider_visible=False,
                              legend=dict(bgcolor=legend_color, font=dict(size=11)), margin=dict(t=30, l=0, b=0, r=0))
            fig.update_xaxes(showspikes=True, spikecolor="green", spikethickness=2)
            fig.update_yaxes(showspikes=True, spikecolor="green", spikethickness=2)

        sensitivity()
        check_lines()
        if selected_timeframe in historical_hightimeframe:
            candlestick_patterns()
            x_date = '%b-%d-%y'
        elif selected_timeframe in historical_lowtimeframe:
            x_date = '%H:%M %d-%b'
        create_candlestick_plot()
        add_volume_subplot()
        add_rsi_subplot()
        levels()
        float_resistance_above = list(map(float, sorted(resistance_above + resistance_below)))
        float_support_below = list(map(float, sorted(support_below + support_above, reverse=True)))
        draw_support()
        draw_resistance()
        legend_texts()
        chart_updates()
        print(f"Completed execution in {time.perf_counter() - perf} seconds")
        return fig.show(id='the_graph', config={'displaylogo': False})


def remove(csv_filename):
    """
    Removes the .csv file that was created by the function "get_historical_data"
    """
    print("Data analysis is done. Browser opening.")
    if os.path.exists(csv_filename):
        os.remove(csv_filename)
        print(f"{csv_filename} deleted.")
    else:
        print(f"{csv_filename} does not exist.")


def frame_select(kline: str) -> tuple[str | int, str]:
    frame_select_dict = {"1M": [Client.KLINE_INTERVAL_1MINUTE, -260],
                         "3M": [Client.KLINE_INTERVAL_3MINUTE, -780],
                         "5M": [Client.KLINE_INTERVAL_5MINUTE, -1300],
                         "15M": [Client.KLINE_INTERVAL_15MINUTE, -3900],
                         "30M": [Client.KLINE_INTERVAL_30MINUTE, -7800],
                         "1H": [Client.KLINE_INTERVAL_1HOUR, -260],
                         "2H": [Client.KLINE_INTERVAL_2HOUR, -520],
                         "4H": [Client.KLINE_INTERVAL_4HOUR, -1040],
                         "6H": [Client.KLINE_INTERVAL_6HOUR, -1560],
                         "8H": [Client.KLINE_INTERVAL_8HOUR, -2080],
                         "12H": [Client.KLINE_INTERVAL_12HOUR, -15],
                         "1D": [Client.KLINE_INTERVAL_1DAY, -260],
                         "3D": [Client.KLINE_INTERVAL_3DAY, -780]}
    start_date = datetime.now()
    last_letter = frame_select_dict[kline][0][-1].upper()
    kline_interval = frame_select_dict[kline][1]
    times = {"M": timedelta(minutes=kline_interval),
             "H": timedelta(hours=kline_interval),
             "D": timedelta(days=kline_interval)}
    start_date += times[last_letter]
    return frame_select_dict[kline][0], start_date.strftime("%d %B, %Y")


def hist_data():
    """
    Get historical data from the Binance API and write it to a csv file
    """
    def historical_data_write(ticker_symbol):
        """
        Write the historical data to a csv file
        """
        def write_candlesticks():
            csv_file_w = open(file_name, "w", newline='')
            klines_writer = csv.writer(csv_file_w, delimiter=",")
            klines_writer.writerow(header_list)
            for candlestick in client.get_historical_klines(symbol=ticker_symbol, interval=time_frame, start_str=start,
                                                            limit=300):
                klines_writer.writerow(candlestick)
            csv_file_w.close()

        def final_csv():
            df = pd.read_csv(file_name)
            # Revers the order of the dataframe
            df = df.iloc[::-1]
            df.to_csv(file_name, header=header_list, index=False)
            df = pd.read_csv(file_name)
            # Convert the unix time to a readable date format for today
            date = pd.to_datetime(df['unix'], unit='ms')
            df.insert(1, 'date', date)
            del df['volume'], df['close time'], df['taker buy vol'], df['taker buy quote vol'], df['ignore'], \
                df['tradecount']
            df.to_csv(file_name, index=False)

        write_candlesticks()
        final_csv()

    print("Data writing:", file_name)
    historical_data_write(ticker)


if __name__ == "__main__":
    os.chdir("../binance-alarm")  # Change the directory to the binance-alarm folder
    ticker = sys.argv[1]  # Pair
    frame_s = sys.argv[2]  # Timeframe
    time_frame = frame_select(frame_s)[0]
    # Creating a client object that is used to interact with the Binance API
    client = Client("", "")
    has_pair = any(ticker == i.get('symbol') for i in client.get_all_tickers())  # Check pair is in Binance API
    print('Pair found in Binance API.' if has_pair else 'Pair not found in Binance API.')
    start = frame_select(frame_s)[1]
    file_name = ticker + ".csv"
    symbol_data = client.get_symbol_info(ticker)
    header_list = ('unix', 'open', 'high', 'low', 'close', 'volume', 'close time', 'Volume USDT', 'tradecount',
                   'taker buy vol', 'taker buy quote vol', 'ignore')

    try:
        perf = time.perf_counter()
        hist_data()
        if os.path.isfile(file_name):  # Check .csv file exists
            print(f"{file_name} downloaded and created.")
            Supres.main(file_name, time_frame)
            remove(file_name)
        else:
            raise print("One or more issues caused the download to fail. "
                        "Make sure you typed the filename correctly.")

    except KeyError:
        remove(file_name)
        raise KeyError("Key error, algorithm issue")
