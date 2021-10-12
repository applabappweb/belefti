import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from './logo.jpg';
import './App.css';

function App() {
  const [earnings, setEarnings] = useState([])
    useEffect(()=>{axios.get("https://hiveon.net/api/v1/stats/miner/1ad68e074d71c8fc6abe15187173767101d4c26e/ETH/billing-acc").then(res=>setEarnings(res.data)).catch(err=>console.log(err))}, [])
    const tot=earnings.totalUnpaid;
    const act = new Date(); 
    const now =`${act.getDate()}/${act.getMonth()+1}/${act.getFullYear()} à ${act.getHours()}:${act.getMinutes()}:${((act.getSeconds() < 10)?"0":"") + act.getSeconds()}`;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mohamed HM</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{now}</h3>
        <h4>
          {`La valeur actuelle est de: `}<span style={{color: "green"}}>{parseFloat(tot).toFixed(5)}</span>
        </h4>
        <h5>
          Le pourcentage pour atteindre 0.1 est de: <span style={{color: "red"}}>{(parseFloat(tot*1000).toFixed(2))} %</span>
        </h5>
      </header>
      
    </div>
  );
}

export default App;
