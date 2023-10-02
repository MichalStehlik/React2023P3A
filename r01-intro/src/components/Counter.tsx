import {useState} from "react"

const Counter = () => {
    const [value, setValue] = useState<number>();
    return (
        <span>
            <button onClick={e => {setValue(3)}}>-</button>
            <span>{value}</span>
            <button onClick={e => {setValue(x => x + 1)}}>+</button>
        </span>
    );
}

export default Counter;