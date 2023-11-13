import {useId, useState} from "react"

interface IInputProps {
    value: string | undefined;
    inputAction: (value: string) => void
}

export const ControlledInput2: React.FC<IInputProps> = 
({value, inputAction}) => {
    const [input, setInput] = useState(value);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        inputAction(event.target.value);
    } 
    let length = input?.length;
    const id = useId();
    return(
        <div>
            <label htmlFor={`${id}-txt`}>Text</label>
            <input id={`${id}-txt`} value={input} onChange={handleChange} />
            <span>{length}</span>
        </div>
    );
}

export default ControlledInput2;