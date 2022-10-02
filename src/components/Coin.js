import React from 'react';

const Coin = ({name, image, price, symbol, marketCap, priceChange}) => {
    return (
        <div>
            <img src={image} alt={name} />
            <span>{name}</span>
            <span>{symbol}</span>
            <span>{price}</span>
            <span>{priceChange}</span>
            <span>{marketCap}</span>
            
        </div>
    );
};

export default Coin;