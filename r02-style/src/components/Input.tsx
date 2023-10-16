import {useRef} from "react"
import styles from "./Input.module.css"

export const Input = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <div className={styles.container}>
                <label htmlFor={inputRef?.current?.id}>Vstupní</label>
                <input 
                    ref={inputRef}
                    type="text" 
                    id="number" 
                    className="txt-input" 
                    defaultValue="2" />
            </div>
            <div>
                <button 
                    style={{color: "red", backgroundColor: "yellow"}}
                    onClick={()=>{console.log(inputRef); alert(inputRef?.current?.value)}}>
                        Odeslat
                </button>
            </div>
        </>
    );
}

export default Input