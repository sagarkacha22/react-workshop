import { useState } from "react"

export default function Input({ defaultValue }) {

    let [inputValue, inputValueChange] = useState(defaultValue)

    let inputChange = (event) => {
        inputValueChange(event.target.value)
    }

    return (
        <div>
            <input value={inputValue} onChange={inputChange}></input>
            <h3>{inputValue}</h3>
        </div>
    )
}