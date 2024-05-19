import "./closed.css"
import closed from './closed.png'

const Closed =(props) => {
    return(
        <div className="closed">
                <img src={closed} alt="closed icon" className="closed-Image" />
            <p className="closed-txt">閉鎖</p>
            <p className="time-stamp">{props.time}</p>
            <p className="time-txt">現在</p>
        </div>
    )
};

export { Closed };