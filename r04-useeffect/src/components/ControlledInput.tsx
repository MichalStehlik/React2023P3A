import {useId} from "react"

interface IInputProps {
    value: string | undefined;
    inputAction: (value: string) => void
}

export const ControlledInput: React.FC<IInputProps> = 
({value, inputAction}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputAction(event.target.value);
    } 
    const id = useId();
    return(
        <div>
            <label htmlFor={`${id}-txt`}>Text</label>
            <input id={`${id}-txt`} value={value} onChange={handleChange} />
        </div>
    );
}

export default ControlledInput;