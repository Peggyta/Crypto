import React, {useEffect, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
//Components
import CoinIndex from './CoinIndex';
//API
import { indexCoin } from '../services/api';
//Styles
import styles from './Carousel.module.css';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = () => {
    const[trending, setTrending] = useState([]);
    useEffect(() => {
        const fetchAPI = async() => {
            setTrending(await indexCoin())
        }
        fetchAPI()
    },[])


    return (
        <div className={styles.container}>
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