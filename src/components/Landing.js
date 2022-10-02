import React, {useState, useEffect} from 'react';
//API
import { getCoin } from '../services/api';

const Landing = () => {
    const[coins, setCoins] = useState([]);
    useEffect(() => {
        const fetchAPI = async() => {
            setCoins(await getCoin());
        }
        fetchAPI()
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Landing;