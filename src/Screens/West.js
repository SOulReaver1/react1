import Axios from "axios";
import React, { useState, useEffect} from "react";

export default function West() {

    let [ response, setResponse ] = useState({});

    useEffect(() => {
        Axios.get('https://api.kanye.rest/')
        .then(res => setResponse(res.data))
        .catch(error => console.log(error));
    }, [])
        
    return (
        <div className="container-fluid">
            {response.quote && <h3>{response.quote}</h3>}
        </div>
    );
}