import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from './logo.jpg';
import './App.css';

function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  const [earnings, setEarnings] = useState([])
  const [prices, setPrices] = useState([])

  useEffect(()=>{
    axios.get("https://hiveon.net/api/v1/stats/miner/1ad68e074d71c8fc6abe15187173767101d4c26e/ETH/billing-acc").then(res=>setEarnings(res.data)).catch(err=>console.log(err));
  
    axios.get("https://api.ethereumdb.com/v1/ticker?pair=ETH-USD&range=1h").then(res=>setPrices(res.data)).catch(err=>console.log(err))
  }, [])

  const cur = prices.price;
  const tot=earnings.totalUnpaid;
  const act = new Date(); 
  const now =`${act.getDate()}/${act.getMonth()+1}/${act.getFullYear()} à ${((act.getHours() < 10)?"0":"") + act.getHours()}:${((act.getMinutes() < 10)?"0":"") + act.getMinutes()}:${((act.getSeconds() < 10)?"0":"") + act.getSeconds()}`;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mohamed HM</h1>
        <img src={logo} className="App-logo" alt="logo" onClick={refreshPage} style={{cursor: 'pointer'}}/>
        <h3>{now}</h3>
        <h4>
          La valeur actuelle est de: <span style={{color: "#37b837"}}>{parseFloat(tot).toFixed(5)}</span><span style={{color: "#3c6bd4"}}>  (1E. = ${(parseFloat(cur).toFixed(2))})</span>
        </h4>
        <h4>
          Le pourcentage pour atteindre 0.1E. est de: <span style={{color: "#d46565"}}>{(parseFloat(tot*1000).toFixed(2))} %</span>
        </h4>
        <h4>
          Le Montant est de: <span style={{color: "#e4d06e"}}>{(parseFloat(cur*tot*180).toFixed(2))} DA</span>
        </h4>
      </header>
      
    </div>
  );
}

export default App;
