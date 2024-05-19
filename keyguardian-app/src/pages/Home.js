import React from "react";
import styles from "./Home.css"
import key from './key.png'
import opening from './opening.png'

const Home = () => {
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