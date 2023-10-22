import {useRef} from "react"

export const GuessNumber = ({guessAction} : {guessAction: (x: number) => void}) => {
    const input = useRef<HTMLInputElement>(null);
    return (
        <>
            <div>
                <label htmlFor="guess">Hodnota</label>
                <input type="number" ref={input} defaultValue="0"/>
            </div>
            <div>
                <button onClick={() => guessAction(Number(input?.current?.value))}>Hádej</button>
            </div>
        </>
    );
}

export default GuessNumber