import { useState } from "react"

export default function Toggler() {

    let [visiblity, visibilityChange] = useState(true)

    return (
        <div>
            { visiblity && <p>Hi there!</p> }
            <button onClick={() => visibilityChange(!visiblity)}>toggle</button>
        </div>
    )
}