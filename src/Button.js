import React, { useState } from 'react'

function CustomButton(props) {

    let { color, colorOnClick } = props

    let [clicked, setClicked] = useState(false)

    let background = "grey"

    if (color) {
        background = color
    }

    if (clicked) {
        background = "green"

        if (colorOnClick) {
            background = colorOnClick
        }
    }

    return <button
    disabled={clicked}
    onClick={() => {
        setClicked(true)
        if (props.onClick) {
            props.onClick()
        }
    }}
    style={{
        background: background,
        border: 0,
        borderRadius: '10px',
        color: 'white',
        padding: "25px"
    }}>
        {props.children}
    </button>

}

export default CustomButton