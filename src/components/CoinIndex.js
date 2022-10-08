import React from 'react';
//Styles
import styles from './CoinIndex.module.css';

const CoinIndex = ({image, price, symbol}) => {
    return (
        <div className={styles.container} >
            <img src={image} alt="coins" />
            <div className={styles.textContainer}>
                <span className={styles.symbol}>{symbol}</span> 
                <span className={styles.price}>{price.toLocaleString()} $</span>
             </div>
        </div>
        
    );
};

export default CoinIndex;