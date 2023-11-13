import {useState, useEffect} from "react"

interface IEffectProps {
    value: number
}

export const  EffectDemo: React.FC<IEffectProps> = ({value}) => {
    const [txt, setTxt] = useState("");
    console.log("Redraw");
    useEffect(()=>{
        console.log("always after component redraw");
    });
    useEffect(()=>{
        console.log("mount");
        return () => {console.log("unmount");}
    },[]);
    useEffect(()=>{
        console.log("mount or dependencies change");
    },[value]);
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            setTxt(x => x + event.key);
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => {window.removeEventListener("keydown", handleKeyDown)}
    },[]
    );
    return (
        <p>{value}{txt}</p>
    );
}

export default EffectDemo;