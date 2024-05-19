import React from "react";
import styles from "./Home.css"
import key from './key.png'
import opening from './opening.png'

// import { useState } from "react"




const Home = () => {
    const [isOpened, setIsOpened] = useState(false);

    const Home = () => {
        const [isOpened, setIsOpened] = useState(false);
    
        useEffect(() => {
            async function fetchData() {
                const response = await fetch("https://tzv3gjr9k7.execute-api.ap-northeast-1.amazonaws.com/key/status?labId=ichikawa");
                const data = await response.json();
    
                if (data.status === "locked") {
                    setIsOpened(false);
                } else {
                    setIsOpened(true);
                }
            }
            fetchData();
        }, []);
    }

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
                    <div className="opening">
                        <img src={opening} alt="opening icon" className="opening-Image" />
                        <p className="opening-txt">開放</p>
                    </div>
                </main>
        </div>
    )
}

export default Home;