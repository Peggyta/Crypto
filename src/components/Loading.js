import React from 'react';
//Gif
import spinner from './gif/spinner.gif';

const Loading = () => {
    return (
        <div>
            <img src={spinner} alt="loading" />
            <h2>Loading ...</h2>
        </div>
    );
};

export default Loading;