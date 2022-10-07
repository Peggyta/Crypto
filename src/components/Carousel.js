import React, {useEffect, useState} from 'react';
//Components
import CoinIndex from './CoinIndex';
//API
import { indexCoin } from '../services/api';

const Carousel = () => {
    const[trending, setTrending] = useState([]);
    useEffect(() => {
        const fetchAPI = async() => {
            setTrending(await indexCoin())
        }
        fetchAPI()
    },[])
    return (
        <div>
            {
                trending.map(coin => <CoinIndex key={coin.id} 
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price} />)
            }
        </div>
    );
};

export default Carousel;