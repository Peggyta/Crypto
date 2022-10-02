import React, {useEffect, useState} from 'react';
//API
import { getCoin } from '../services/api';
//Components
import Loading from './Loading';
import Coin from './Coin';

const Landing = () => {
    const[coins, setCoins] = useState([]);
    useEffect(() => {
        const fetchAPI = async() => {
            setCoins(await getCoin());
        }
        fetchAPI()
    }, [])
    return (
        <>
            <input type="text" placeholder="search..." />
            {
                coins.length ? 
                <div>
                    {
                        coins.map (coin => <Coin 
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