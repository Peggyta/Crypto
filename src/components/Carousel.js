import React, {useEffect, useState} from 'react';
//Components
import CoinIndex from './CoinIndex';
//API
import { getCoin } from '../services/api';

const Carousel = () => {
    const[trending, setTrending] = useState([]);
    useEffect(() => {
        const fetchAPI = async() => {
            setTrending(await getCoin())
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