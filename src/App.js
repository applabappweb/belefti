import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./App.css";

function App() {
  const [totalUnpaids, setTotalUnpaids] = useState([]);
  const [totalPaids, setTotalPaids] = useState([]);
  const [pricesUSD, setPricesUSD] = useState([]);
  const [pricesEUR, setPricesEUR] = useState([]);
  const [times, setTimes] = useState([]);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const getData = async () => {
    try {
      let wallet = process.env.ETH_WALLET || "0x1ad68e074d71c8fc6abe15187173767101d4c26e"
      wallet = wallet.replace("0x", "")
      const totalUnpaid = await axios.get(
        `https://hiveon.net/api/v1/stats/miner/${wallet}/ETH/billing-acc`
      );
      setTotalUnpaids(totalUnpaid.data.totalUnpaid);
      setTotalPaids(totalUnpaid.data.totalPaid);

      // const priceUSD = await axios.get("https://api.ethereumdb.com/v1/ticker?pair=ETH-USD&range=1h")
      // setPricesUSD(priceUSD.data.price);
      // const priceEUR = await axios.get("https://api.ethereumdb.com/v1/ticker?pair=ETH-EUR&range=1h")
      // setPricesEUR(priceEUR.data.price);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getEth = async () => {
    try {
      const priceUSD = await axios.get(
        "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
      );
      setPricesUSD(priceUSD.data.price);

      const priceEUR = await axios.get(
        "https://api.binance.com/api/v3/ticker/price?symbol=ETHEUR"
      );
      setPricesEUR(priceEUR.data.price);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTime = async () => {
    try {
      const newDate = await new Date();
      setTimes(
        `${newDate.getDate()}/${
          newDate.getMonth() + 1
        }/${newDate.getFullYear()} - ${
          (newDate.getHours() < 10 ? "0" : "") + newDate.getHours()
        }:${(newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes()}:${
          (newDate.getSeconds() < 10 ? "0" : "") + newDate.getSeconds()
        }`
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
    getTime();

    const interval1 = setInterval(() => {
      getTime();
      getEth();
    }, 1000);

    const interval2 = setInterval(() => {
      getData();
    }, 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="heading-frame"
          style={{ cursor: "pointer" }}
          onClick={() => refreshPage()}
        >
          <span>
            Mohamed HM<br />{times}
          </span>
        </div>

        <Circle>
          <Circle100>
            {Number.isNaN(parseFloat(totalPaids)) ? (
              <CircularProgressbar
                value={parseFloat(totalUnpaids * 100).toFixed(2)}
                strokeWidth={50}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  pathColor: "#0d5a7f",
                  trailColor: "#333",
                  width: "80%",
                })}
              />
            ) : (
              <CircularProgressbar
                value={parseFloat((totalPaids + totalUnpaids) * 100).toFixed(2)}
                strokeWidth={50}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  pathColor: "#0d5a7f",
                  trailColor: "#333",
                  width: "80%",
                })}
              />
            )}
          </Circle100>

          <Circle10>
            <CircularProgressbar
              value={parseFloat(totalUnpaids * 1000).toFixed(2)}
              text={`${parseFloat(totalUnpaids * 1000).toFixed(2)}%`}
              styles={buildStyles({
                strokeLinecap: "butt",
                textColor: "#c1aea8",
                pathColor: "#941717",
                trailColor: "#c1aea8",
              })}
            />
          </Circle10>
        </Circle>

        {Number.isNaN(parseFloat(pricesUSD)) ? (
          ""
        ) : (
          <p style={{ color: "#c1aea8" }}>
            <span
              className="iconify"
              data-icon="mdi:ethereum"
              style={{ paddingRight: 5, height: 14 }}
            ></span>
            <span style={{ color: "#6ee49d" }}>
              {numberWithCommas(parseFloat(pricesUSD).toFixed(2))}$
            </span> | <span style={{ color: "#d46565" }}>
              {numberWithCommas(parseFloat(pricesUSD * 180).toFixed(2))}
            </span> | <span style={{ color: "#e4d06e" }}>
              {numberWithCommas(parseFloat(pricesEUR).toFixed(2))}€
            </span>
          </p>
        )}

        {Number.isNaN(parseFloat(pricesUSD)) ? (
          ""
        ) : (
          <p style={{ color: "#c1aea8" }}>
            <span
              className="iconify"
              data-icon="clarity:resource-pool-solid"
              style={{ paddingRight: 5, height: 13 }}
            ></span>
            <span style={{ color: "#6ee49d" }}>
              {numberWithCommas(
                parseFloat(pricesUSD * totalUnpaids).toFixed(2)
              )}
              $
              </span> | <span style={{ color: "#d46565" }}>
              {numberWithCommas(
                parseFloat(pricesUSD * totalUnpaids * 180).toFixed(2)
              )}
            </span> | <span style={{ color: "#e4d06e" }}>
              {numberWithCommas(
                parseFloat(pricesEUR * totalUnpaids).toFixed(2)
              )}
              €
            </span>
          </p>
        )}

        {Number.isNaN(parseFloat(totalPaids)) ? (
          ""
        ) : (
          <p style={{ color: "#c1aea8" }}>
            <span className="iconify" data-icon="clarity:wallet-solid" style={{ paddingRight: 5, height: 13 }}></span>
            <span style={{ color: "#6ee49d" }}>
              {numberWithCommas(parseFloat(pricesUSD * totalPaids).toFixed(2))}$
            </span> | <span style={{ color: "#d46565" }}>
              {numberWithCommas(
                parseFloat(pricesUSD * totalPaids * 180).toFixed(2)
              )}
            </span> | <span style={{ color: "#e4d06e" }}>
              {numberWithCommas(parseFloat(pricesEUR * totalPaids).toFixed(2))}€
            </span>
          </p>
        )}
      </header>
    </div>
  );

  function Circle(props) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
          width: 100,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {props.children}
      </div>
    );
  }

  function Circle100(props) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          width: 100,
        }}
      >
        {props.children}
      </div>
    );
  }

  function Circle10(props) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {props.children}
      </div>
    );
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export default App;
