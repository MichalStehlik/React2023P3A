const Counter = (
    // {value, setValue}: {value: number, setValue: React.Dispatch<React.SetStateAction<number>>}
    // { value, setValue } : {value: number,  setValue: { (value: number): void; (value: (prev: number) => number): void; }; }
    { value, setValue } : {value: number,  setValue: (x: ((val:number) => number) | number) => void}
    ) => {
    return (
        <span>
            <button onClick={e => {setValue(0)}}>0</button>
            <button onClick={e => {setValue(value - 1)}}>-</button>
            <span>{value}</span>
            <button onClick={e => {setValue(x => x + 1)}}>+</button>
        </span>
    );
}

export default Counter;
// type UseState<S> = (action: S | ((prevState: S) => S)) => void;
// 