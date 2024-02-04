import React from 'react'
import { useState } from 'react'

const Toggle = () => {

    const [toggle, setToggle] = useState('ON')
    function handleClick() {
        toggle === "ON" ? setToggle('OFF') : setToggle('ON')
    }
    
    return (
        <button onClick={() => handleClick()}>{toggle}</button>
    )
}

export default Toggle