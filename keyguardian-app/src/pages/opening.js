import "./opening.css"
import opening from './opening.png'

const Opening =(props) => {
    return(
        <div className="opening">
            <img src={opening} alt="opening icon" className="opening-Image" />
            <p className="opening-txt">開放</p>
            <p className="time-stamp">{props.time}</p>
            <p className="time-txt">現在</p>
        </div>
    )
};

export { Opening };