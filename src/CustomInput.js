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

        if (props.type === "email") {
            return ValidateEmail(value)
        } else if (props.type === "password") {
            return ValidatePassword(value)
        } else if (props.type === "phone") {
            return ValidatePhone(value)
        } else if (props.type === "task") {
            return ValidateTask(value)
        } else {
            return true
        }
    }

   return <> 
       
       <input 
            type={props.type} 
            value={props.value}
            onChange={(event) => {
                props.onChangeCustom(event.target.value, Validate)
            }}
        />

        <br/>

        { (Validate(props.value) ?  
            <span className="success"> { props.name } est valide </span> : 
            <span className="error"> { props.name } est pas valide </span>)
        }

        <br />

    </>

}

export default CustomInput