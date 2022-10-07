import { useState } from "react"

export default function Input({ defaultValue }) {

    let [inputValue, inputValueChange] = useState(defaultValue)

    let inputChange = (event) => {
        inputValueChange(event.target.value)
    }

    let clearValue = () => {
        inputValueChange(defaultValue)
    }

    return (
        <div>
            <input value={inputValue} onChange={inputChange}></input>
            <button onClick={clearValue}>clear</button>
            <h3>{inputValue}</h3>
        </div>
    )
}