type GreetingsProps = {
    text: string
}

// const Greetings = (props: any) => <p>{props.text}</p>
const Greetings = ({text}: {text: string}) => <p>{text}</p>
//const Greetings = ({text}: GreetingsProps) => <p>{text}</p>

export default Greetings