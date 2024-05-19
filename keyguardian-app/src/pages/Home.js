import React from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import styles from "./Home.css"
import key from './key.png'
import { Opening } from './opening.js'
import { Closed } from './closed.js'

const Home = () => {
    const [isOpened, setIsOpened] = useState(false);
    const url = useLocation().pathname;
    const timestamp = new Date("2024-05-17T12:34:56Z");
    
    function TimeEdit(timestamp){
        const date = timestamp
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}/${month}/${day} ${hours}:${minutes}`;
    }

    const time = TimeEdit(timestamp)

    return (
        <div>
            <header className="Home-header">
                <img src={key} alt="key logo" className="header-Image" />
                <h1 className="header-title">KeyGuardian</h1>
            </header>
            <main className="Home-main">
                    <h2 className="main-message">
                        ようこそKeyGuardianへ<br/>
                        現在の○○研究室の開閉状態は
                    </h2>
                    {isOpened ? <Opening time={time}/> : <Closed time={time}/>}
                </main>
        </div>
    )
}

export default Home;