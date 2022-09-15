import {useState} from "react"

export default function Counter() {

    let [count, updateCount] = useState(0)

    let countUpdate = () => {
        updateCount(count + 1)
    }

    let resetCounter = () => {
        updateCount(0)
    }

    return (
        <div>
            <button onClick={countUpdate}>{count}</button>
            <button onClick={resetCounter}>reset</button>
        </div>
    )
}