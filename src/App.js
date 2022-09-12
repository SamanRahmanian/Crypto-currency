import React from 'react'
import Card from './components/Card';
import { useState , useEffect } from 'react';
import getCoin from './services/api';
import "./components/card.css";
function App() {

  const [data , setData] = useState([])
  const [search , setSearch] = useState("")

    useEffect(() => {
        const getData = async () => {
            const coinsObject = await getCoin()
            setData(coinsObject)
            console.log(coinsObject);
        }
        getData()
    } , [])

    const changeHandler = event => {
      setSearch(event.target.value)
    }

    const searchCoins = data.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='container'>
      <input type='text' placeholder='search...' className='searchInput' value={search} onChange={changeHandler} /> 
      {
        searchCoins.map(coin => <Card 
          key={coin.id} 
          image={coin.image} 
          name={coin.name} 
          current_price={coin.current_price} 
          market_cap_change_percentage_24h={coin.market_cap_change_percentage_24h}
          symbol={coin.symbol}
          />
        )
      }
    </div>
  );
}

export default App;
