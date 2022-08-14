let ws1 = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade' +
    '/solusdt@trade/avaxusdt@trade/dotusdt@trade/apeusdt@trade/manausdt@trade/' +
    'sandusdt@trade/gmtusdt@trade/atomusdt@trade/nearusdt@trade');
let ws_btc_eth = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade/ethusdt@trade')

let btc_priceElement = document.getElementById('btc-price');
let eth_priceElement = document.getElementById('eth-price');
let bnb_priceElement = document.getElementById('bnb-price');
let sol_priceElement = document.getElementById('sol-price');
let avax_priceElement = document.getElementById('avax-price');
let dot_priceElement = document.getElementById('dot-price');
let ape_priceElement = document.getElementById('ape-price');
let mana_priceElement = document.getElementById('mana-price');
let sand_priceElement = document.getElementById('sand-price');
let gmt_priceElement = document.getElementById('gmt-price');
let near_priceElement = document.getElementById('near-price');
let atom_priceElement = document.getElementById('atom-price');

let btc_lastPrice = null;
let eth_lastPrice = null;
let bnb_lastPrice = null;
let sol_lastPrice = null;
let avax_lastPrice = null;
let ape_lastPrice = null;
let dot_lastPrice = null;
let mana_lastPrice = null;
let sand_lastPrice = null;
let near_lastPrice = null;
let atom_lastPrice = null;
let gmt_lastPrice = null;


ws_btc_eth.onmessage = (event) => {
    let data_btc_eth = JSON.parse(event.data);
    if (data_btc_eth.s === 'BTCUSDT') {
        let btc_price = parseFloat(data_btc_eth.p).toFixed(2);
        btc_priceElement.innerText = parseFloat(data_btc_eth.p).toFixed(2);
        if (btc_lastPrice !== null) {
            if (btc_price - btc_lastPrice > 1) {
                btc_priceElement.style.color = 'red';
            } else if (btc_price - btc_lastPrice < -1) {
                btc_priceElement.style.color = 'green';
            } else {
                btc_priceElement.style.color = 'black';
            }
        }
        btc_lastPrice = btc_price;
    }
    if (data_btc_eth.s === 'ETHUSDT') {
        let eth_price = parseFloat(data_btc_eth.p).toFixed(2);
        eth_priceElement.innerText = parseFloat(data_btc_eth.p).toFixed(2);
        eth_priceElement.style.color = !eth_lastPrice || eth_lastPrice === eth_price ? '#000000' : eth_price > eth_lastPrice ? '#4aea06' : '#e70000';
        eth_lastPrice = eth_price;
    }}

ws1.onmessage = (event) => {
    let data = JSON.parse(event.data);
    if (data.s === 'BNBUSDT') {
        let bnb_price = parseFloat(data.p).toFixed(1);
        bnb_priceElement.innerText = parseFloat(data.p).toFixed(1);
        bnb_priceElement.style.color = !bnb_lastPrice || bnb_lastPrice === bnb_price ? '#000000' : bnb_price > bnb_lastPrice ? '#4AEA06FF' : '#e70000';
        bnb_lastPrice = bnb_price;
    }
    if (data.s === 'SOLUSDT') {
        let sol_price = parseFloat(data.p).toFixed(2);
        sol_priceElement.innerText = parseFloat(data.p).toFixed(2);
        sol_priceElement.style.color = !sol_lastPrice || sol_lastPrice === sol_price ? '#000000' : sol_price > sol_lastPrice ? '#4AEA06FF' : '#e70000';
        sol_lastPrice = sol_price;
    }
    if (data.s === 'AVAXUSDT') {
        let avax_price = parseFloat(data.p).toFixed(2);
        avax_priceElement.innerText = parseFloat(data.p).toFixed(2);
        avax_priceElement.style.color = !avax_lastPrice || avax_lastPrice === avax_price ? '#000000' : avax_price > avax_lastPrice ? '#4AEA06FF' : '#e70000';
        avax_lastPrice = avax_price;
    }
    if (data.s === 'APEUSDT') {
        let ape_price = parseFloat(data.p).toFixed(4);
        ape_priceElement.innerText = parseFloat(data.p).toFixed(4);
        ape_priceElement.style.color = !ape_lastPrice || ape_lastPrice === ape_price ? '#000000' : ape_price > ape_lastPrice ? '#4AEA06FF' : '#e70000';
        ape_lastPrice = ape_price;
    }
    if (data.s === 'DOTUSDT') {
        let dot_price = parseFloat(data.p).toFixed(2);
        dot_priceElement.innerText = parseFloat(data.p).toFixed(2);
        dot_priceElement.style.color = !dot_lastPrice || dot_lastPrice === dot_price ? '#000000' : dot_price > dot_lastPrice ? '#4AEA06FF' : '#e70000';
        dot_lastPrice = dot_price;
    }
    if (data.s === 'MANAUSDT') {
        let mana_price = parseFloat(data.p).toFixed(4);
        mana_priceElement.innerText = parseFloat(data.p).toFixed(4);
        mana_priceElement.style.color = !mana_lastPrice || mana_lastPrice === mana_price ? '#000000' : mana_price > mana_lastPrice ? '#4AEA06FF' : '#e70000';
        mana_lastPrice = mana_price;
    }

    if (data.s === 'SANDUSDT') {
        let sand_price = parseFloat(data.p).toFixed(4);
        sand_priceElement.innerText = parseFloat(data.p).toFixed(4);
        sand_priceElement.style.color = !sand_lastPrice || sand_lastPrice === sand_price ? '#000000' : sand_price > sand_lastPrice ? '#4AEA06FF' : '#e70000';
        sand_lastPrice = sand_price;
    }
    if (data.s === 'GMTUSDT') {
        let gmt_price = parseFloat(data.p).toFixed(4);
        gmt_priceElement.innerText = parseFloat(data.p).toFixed(4);
        gmt_priceElement.style.color = !gmt_lastPrice || gmt_lastPrice === gmt_price ? '#000000' : gmt_price > gmt_lastPrice ? '#4AEA06FF' : '#e70000';
        gmt_lastPrice = gmt_price;
    }
    if (data.s === 'ATOMUSDT') {
        let atom_price = parseFloat(data.p).toFixed(3);
        atom_priceElement.innerText = parseFloat(data.p).toFixed(3);
        atom_priceElement.style.color = !atom_lastPrice || atom_lastPrice === atom_price ? '#000000' : atom_price > atom_lastPrice ? '#4AEA06FF' : '#e70000';
        atom_lastPrice = atom_price;
    }
    if (data.s === 'NEARUSDT') {
        let near_price = parseFloat(data.p).toFixed(3);
        near_priceElement.innerText = parseFloat(data.p).toFixed(3);
        near_priceElement.style.color = !near_lastPrice || near_lastPrice === near_price ? '#000000' : near_price > near_lastPrice ? '#4AEA06FF' : '#e70000';
        near_lastPrice = near_price;
    }
}


setInterval(() => {
    ws1.send('pong');
}, 1000 * 60 * 7);  //ping every 7 minutes
setInterval(() => {
    ws_btc_eth.send('pong');
}, 1000 * 60 * 7);  //ping every 7 minutes




