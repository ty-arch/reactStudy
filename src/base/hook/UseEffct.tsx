import { useState } from "react"

export const UseState = () => {
    const [num, setNum] = useState(0)

    const handleClick = () => {
        setNum(num + 1)
    }

    return (
        <div>
            {num}
            <button onClick={handleClick}>+1</button>
        </div>
    )
}