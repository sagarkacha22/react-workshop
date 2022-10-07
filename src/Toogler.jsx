import { useState } from "react"

export default function Toggler() {

    let [visiblity, visibilityChange] = useState(true)

    let clickHandler = () => {
        visibilityChange(!visiblity)
    }

    return (
        <div>
            { visiblity && <p>Hi there!</p> }
            <button onClick={clickHandler}>toggle</button>
        </div>
    )
}