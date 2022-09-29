let ws1 = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade/shibusdt@trade' +
    '/solusdt@trade/avaxusdt@trade/dotusdt@trade/apeusdt@trade/manausdt@trade/' +
    'sandusdt@trade/gmtusdt@trade/atomusdt@trade/nearusdt@trade/btcusdt@trade/ethusdt@trade');


ws1.onmessage = (event) => {
    let ws_data = JSON.parse(event.data);
    let coin_list = ['BTCUSDT','ETHUSDT',"SHIBUSDT",'BNBUSDT', 'SOLUSDT', 'AVAXUSDT', 'DOTUSDT', 'APEUSDT', 'MANAUSDT', 'SANDUSDT', 'GMTUSDT', 'NEARUSDT', 'ATOMUSDT'];
    let comma_digit;
    for (let i = 0; i < coin_list.length; i++) {
        if (ws_data.s === coin_list[i]) {
            if (ws_data.p >= 1) {
                comma_digit = 2;
            }
            else if (ws_data.p < 1 && ws_data.p > 0.1) {
                comma_digit = 4;
            }
            else {
                comma_digit = 8;
            }
            let coin_priceElement = document.getElementById(coin_list[i].toLowerCase().slice(0, -4) + '-price');
            coin_priceElement.innerText = parseFloat(ws_data.p).toFixed(comma_digit);
        }}}


ws1.send('{"method":"SUBSCRIBE","params":["BTCUSDT@ticker","ETHUSDT@ticker","SHIBUSDT@ticker","BNBUSDT@ticker",' +
    '"SOLUSDT@ticker","AVAXUSDT@ticker","APEUSDT@ticker","DOTUSDT@ticker","MANAUSDT@ticker","SANDUSDT@ticker",' +
    '"GMTUSDT@ticker","ATOMUSDT@ticker","NEARUSDT@ticker"],"id":1}');

ws1.addEventListener('open', () => {
    setInterval(() => {
        ws1.send('ping');
    }, 30000);
});

function fill_ticker_price(alarm,id) {
    document.getElementById("alarm-price").value=alarm;
    let coin_name = document.getElementById("coin-names").rows[id].innerText;
    console.log(coin_name)
    document.getElementById("myInput1").value = coin_name.replace(/\s+/g, '');

}