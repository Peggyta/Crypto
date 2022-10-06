import React from 'react';
//Styles


const CoinIndex = ({image, price, symbol}) => {
    return (
        <div >
            <img src={image} alt="coins" style={{width:"100px"}} />
            <span>{symbol}</span> 
            <span>$ {price.toLocaleString()}</span>    
        </div>
    );
};

export default CoinIndex;