const socket_string = "wss://stream.binance.com:9443/ws/";
const fav_coin_list = [];
const fav_coin_subscribe = [];
const sub_message = '{"method":"SUBSCRIBE","params":'
const elem_fav_list = document.getElementsByClassName('favorite-list');
for (let i = 0; i < elem_fav_list.length; ++i) {
    let span_text = elem_fav_list[i].innerText;
    let span_text_trade = span_text + "@trade";
    let span_text_ticker = span_text + "@ticker";
    fav_coin_list.push(span_text_trade);
    fav_coin_subscribe.push(span_text_ticker);
}
let fav_coin_list_string = fav_coin_list.join("/");
let sub_message_json = sub_message + JSON.stringify(fav_coin_subscribe) + ',"id":1}';
let ws1 = new WebSocket(socket_string + fav_coin_list_string.toLowerCase());

ws1.onmessage = (event) => {
    let ws_data = JSON.parse(event.data);
    let coin_list = coins;
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
            let coin_priceElement = document.getElementById(coin_list[i].toLowerCase() + '-price');
            coin_priceElement.innerText = parseFloat(ws_data.p).toFixed(comma_digit);
        }}}


ws1.send(sub_message_json);

ws1.addEventListener('open', () => {
    setInterval(() => {
        ws1.send('ping');
    }, 30000);
});

function fill_ticker_price(alarm,id) {
    document.getElementById("alarm-price").value=alarm;
     let coin_name = id
    console.log(coin_name)
    document.getElementById("myInput1").value = coin_name.replace(/\s+/g, '');
    const result = remove_alert(coin_name, alarm);
    console.log(result);
    setTimeout(function () {
        window.location.reload();
    }, 100);
}

function fill_ticker(ticker) {
    document.getElementById("myInput1").value=ticker;
    document.getElementById("myInput").value=ticker;

}

function remove_alert(ticker, price){
    //create alert if user want to remove coinname and price from alerts
    let alert = confirm("Do you want to remove " + ticker + " : " + price + " from alerts?");
    if (alert === true) {
        console.log("remove " + ticker + " from alerts");
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/remove_alert/", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            "ticker": ticker,
            "price": price
        }));
        console.log("removed " + ticker + " from alerts");
        return true;
    }}


function fetch_db_alarms() {
    fetch('/db_alarms/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let data_string = data.toString();
            let data_string2 = data_string.replace(/[\[\]']+/g, '');
            let data_array = data_string2.split(",");
            let data_array2 = data_array.map(function (item) {
                return item.replace(/['"]+/g, '');
            });
            let data_string3 = data_array2.toString();
            // let span = document.getElementById("alerts-textarea");
            // span.innerText = data_string3;
            // let data_array3 = [];
            let alert_1 = document.getElementById("alert-1");
            alert_1.innerText = data_array2.slice(0, 3).toString();
            let alert_2 = document.getElementById("alert-2");
            alert_2.innerText = data_array2.slice(3, 6).toString();
            let alert_3 = document.getElementById("alert-3");
            alert_3.innerText = data_array2.slice(6, 9).toString();
            let alert_4 = document.getElementById("alert-4");
            alert_4.innerText = data_array2.slice(9, 12).toString();
            let alert_5 = document.getElementById("alert-5");
            alert_5.innerText = data_array2.slice(12, 15).toString();
            // for (let i = 0; i < data_array2.length; i += 3) {
            //     data_array3.push(data_array2.slice(i, i + 3));
            // }
            // console.log(data_array3);
        })
    setTimeout(fetch_db_alarms, 10000);
}
window.onload = fetch_db_alarms;