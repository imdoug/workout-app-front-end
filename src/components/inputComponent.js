import React from "react"

const InputDropDown = (props) =>{
    return(
        <>
        <select onChange={props.func}>
            <option value="Chest">CHEST</option>
            <option value="Back">BACK</option>
            <option value="Arms">ARMS</option>
            <option value="Abdominals">ABDOMINALS</option>
            <option value="Legs">LEGS</option>
            <option value="Shoulders">SHOULDERS</option>
        </select>
        </>
    )
}

export default InputDropDown