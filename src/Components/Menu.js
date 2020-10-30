import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function Menu() {
    let [ response, setResponse ] = useState({});
    
    useEffect(() => {
        Axios.get('http://212.198.150.235:3030/')
        .then(res => setResponse(res.data.consolidated_weather[0]))
        .catch(error => console.log(error))
    }, []);

    const theTemps = tmp => {
        if(tmp > 0 && tmp < 10){
            return "#B0E0E6";
        }else if(tmp > 10 && tmp < 20){
            return "#87CEEB";
        }else if(tmp > 20 && tmp < 40){
            return "#DC143C";
        }
    }

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/yesOrNot" className="nav-link">yesOrNot <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/west" className="nav-link">west</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                </ul>
            </div>
            {
            response.the_temp && (
            <div>
                <img src={`https://www.metaweather.com/static/img/weather/png/64/${response.weather_state_abbr}.png`} width="30px"/>
                <span style={{color: theTemps(response.the_temp)}}>
                    {
                        response.the_temp
                    }
                </span>
            </div>
            )
            }
  </nav>

}