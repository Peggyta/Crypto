import React, {useEffect, useState} from 'react';
//API
import { getCoin } from '../services/api';
//Components
import Loading from './Loading';

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
                        coins.map (coin => <p key={coin.id}>{coin.name}</p>)
                    }
                </div> : 
                    <Loading />
            }
        </>
    );
};

export default Landing;