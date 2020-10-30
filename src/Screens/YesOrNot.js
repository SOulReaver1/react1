import React, { useState } from 'react'
import CustomInput from '../Components/CustomInput'
const axios = require('axios');

export default function About() {

    let [ question, setQuestion ] = useState({value: "Vai-je être un jour millionnaire ?", isValid: false});

    let [ response, setResponse] = useState({});

    return (<div className="container-fluid">
        { response.answer && 
        <div>
            <span>
                Reponse : 
                <span className={response.answer === "yes" ? "text-success" : "text-danger"}>
                    {response.answer}
                </span>
            </span>
            <br/>
            <img src={response.image}/>
        </div>
        }
        <form className="form-horizontal" onSubmit={evt => {
            evt.preventDefault();
            axios.get('https://yesno.wtf/api')
            .then(res => setResponse(res.data))
            .catch(error => console.log(error))
        }}>
            <div>
                <h2>Posez une question !!</h2>
                <CustomInput type="question" value={question.value} name="Question" onChangeCustom={(value, isValid) => {
                    setQuestion({value: value, isValid: isValid});
                }}/>
                <button type="submit" disabled={ question.isValid ? true : false} className="btn btn-info" >Envoyer</button>
            </div>
        </form>
    </div>);
}