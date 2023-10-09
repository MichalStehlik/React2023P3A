import { useState } from "react";

useState
const Counter = (
    // {value, setValue}: {value: number, setValue: React.Dispatch<React.SetStateAction<number>>}
    // { value, setValue } : {value: number,  setValue: { (value: (prev: number) => number): void; (value: number): void}; }
    // { value, setValue } : {value: number,  setValue: (x: ((val:number) => number) | number) => void}
    {value, setValue}: {value: number, setValue: (x: number) => void}
    ) => {
    return (
        <span>
            <button onClick={e => {setValue(0)}}>0</button>
            <button onClick={e => {setValue(-1)}}>-</button>
            <span>{value}</span>
            <button onClick={e => {setValue(1)}}>+</button>
        </span>
    );
}

export default Counter;
// type UseState<S> = (action: S | ((prevState: S) => S)) => void;
type X = ReturnType<typeof useState<number>>[1];