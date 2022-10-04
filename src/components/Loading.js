import React from 'react';
//Gif
import spinner from './gif/spinner.gif';
//Style
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={spinner} alt="loading" />
            <h2>Loading ...</h2>
        </div>
    );
};

export default Loading;