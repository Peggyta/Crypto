import React, {useEffect, useState} from 'react';
//API
import { getCoin } from '../services/api';
//Components
import Loading from './Loading';
import Coin from './Coin';
//Styles
import styles from './Landing.module.css';

const Landing = () => {
    const[coins, setCoins] = useState([]);
    const[search, setSearch] = useState("");
    useEffect(() => {
        const fetchAPI = async() => {
            setCoins(await getCoin());
        }
        fetchAPI()
    }, [])

const searchHandler = event => {
    setSearch(event.target.value)
}
const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <input className={styles.input} type="text" placeholder="  search token name" value={search} onChange={searchHandler} />
            {
                coins.length ? 
                <div className={styles.coinContainer} >
                    <div className={styles.headerContainer}>
                        <span className={styles.coinName}><p>Coin</p></span>
                        <span className={styles.coinAbbr}><p>Abbr</p></span>
                        <span className={styles.coinPrice}><p>Price</p></span>
                        <span className={styles.priceChange}><p>24h</p></span>
                        <span className={styles.marketCap}><p>Mkt Cap</p></span>
                    </div>
                    {
                        searchedCoins.map (coin => <Coin 
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            marketCap={coin.market_cap}
                            priceChange={coin.price_change_percentage_24h}
                            />)
                    }
                </div> : 
                    <Loading />
            }
        </>
    );
};

export default Landing;