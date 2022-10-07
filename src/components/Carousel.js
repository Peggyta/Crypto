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

    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };

    return (
        <div className={styles.container}>
            <AliceCarousel
            infinite
            disableButtonsControls
            disableDotsControls
            autoPlay
            autoPlayInterval={1000}
            animationDuration={2000}
            mouseTracking
            items= {
                trending.map(coin => <CoinIndex key={coin.id} 
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price} />)
                } 
            responsive= {responsive}
                />
        </div>
    );
};

export default Carousel;