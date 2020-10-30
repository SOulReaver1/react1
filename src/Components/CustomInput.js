import React, { useState } from 'react'

function CustomInput(props) {

    function ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
            return true
        }

        return false
    }

    function ValidatePassword(password) {
        if (password.length > 7) {
            return true
        }

        return false
    }

    function ValidateQuestion(question){
        if(question){
            return true;
        }
        return false;
    }

    function ValidatePhone(phone) {
        if (/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(phone)) {
            return true
        }

        return false
    }

    function ValidateTask(task) {

        if (task.length > 2 && task.length < 27 && /^[A-Z]/.test(task)) {
            return true
        }

        return false

    }

    function Validate(value) {

        switch (props.type){
            case "email":
                return ValidateEmail(value)
            break;
            case "phone":
                return ValidatePhone(value)
            break;
            case "task":
                return ValidateTask(value)
            break;
            case "question":
                return ValidateQuestion(value);
            break;
            default: 
                return true;
            break;
        }
    }

   return <> 
       <div className="form-group">
            <input 
                type={props.type} 
                value={props.value}
                onChange={(event) => {
                    props.onChangeCustom(event.target.value, Validate)
                }}
                className="form-control"
            />
       </div>
       <div className="form-group">
            { (Validate(props.value) ?  
                <span className="success"> { props.name } est valide </span> : 
                <span className="error"> { props.name } est pas valide </span>)
            }
       </div>
        

    </>

}

export default CustomInput