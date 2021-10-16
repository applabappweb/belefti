import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from './logo.jpg';
import './App.css';

function App() {
  const [totalUnpaids, setTotalUnpaids] = useState([])
  const [pricesUSD, setPricesUSD] = useState([])
  const [pricesEUR, setPricesEUR] = useState([])
  const [times, setTimes] = useState([])

  const refreshPage = () => {
    window.location.reload(false);
  }

  const getData = async () => {
    try {

      const totalUnpaid = await axios.get("https://hiveon.net/api/v1/stats/miner/1ad68e074d71c8fc6abe15187173767101d4c26e/ETH/billing-acc")  
      setTotalUnpaids(totalUnpaid.data.totalUnpaid);

      const priceUSD = await axios.get("https://api.ethereumdb.com/v1/ticker?pair=ETH-USD&range=1h")
      setPricesUSD(priceUSD.data.price);

      const priceEUR = await axios.get("https://api.ethereumdb.com/v1/ticker?pair=ETH-EUR&range=1h")
      setPricesEUR(priceEUR.data.price);
    
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTime = async() => {try {
    const newDate = await new Date(); 
    setTimes(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()} - ${((newDate.getHours() < 10)?"0":"") + newDate.getHours()}:${((newDate.getMinutes() < 10)?"0":"") + newDate.getMinutes()}:${((newDate.getSeconds() < 10)?"0":"") + newDate.getSeconds()}`);

  } catch (err) {
    console.error(err.message);
  }}

  useEffect(()=>{
    getData()
    getTime()

    const interval1=setInterval(()=>{
      getTime()
    },1000)

    const interval2=setInterval(()=>{
      getData()
      
    },60000)   
       
    return()=>{clearInterval(interval1); clearInterval(interval2)}}, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: "#c1aea8"}}>Mohamed HM</h1>
        <img src={logo} className="App-logo" alt="logo" style={{cursor:"pointer"}} onClick={()=>refreshPage()}/>
        <p>{times}</p>

          <p>E. : <span style={{color: "#37b837"}}>{parseFloat(totalUnpaids).toFixed(5)}</span><span style={{color: "#3c6bd4"}}>  (1E. = ${(parseFloat(pricesUSD).toFixed(2))} | £{(parseFloat(pricesEUR).toFixed(2))})</span></p>


          <p>% 0.1E. : <span style={{color: "#d46565"}}>{(parseFloat(totalUnpaids*1000).toFixed(2))} %</span></p>

          <p>Mt : <span style={{color: "#e4d06e"}}>${(parseFloat(pricesUSD*totalUnpaids).toFixed(2))}</span> | <span style={{color: "#e4f05e"}}>£{(parseFloat(pricesEUR*totalUnpaids).toFixed(2))}</span> | <span style={{color: "#e4d06e"}}>{(parseFloat(pricesUSD*totalUnpaids*182).toFixed(2))}DA</span></p>
          

      </header>
      
    </div>
  );
}

export default App;
