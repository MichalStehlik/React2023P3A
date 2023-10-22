import './App.css'
import DisplayAttempt from "./components/DisplayAttempt"
import GuessNumber from "./components/GuessNumber"
import {useState} from "react"

export const App = () => {
  const r = Math.round(Math.random() * 100);
  const [hidden, setHidden] = useState<number>(r);
  const [attempt, setAttempt] = useState<number>(0);
  const [value, setValue] = useState<number | undefined>(0);
  
  const GuessValue = (value : number) => {
    setAttempt(x => x + 1);
    setValue(value);
  }

  const Reset = () => {
    setHidden(Math.round(Math.random() * 100));
    setAttempt(0);
    setValue(0);
  }

  if (hidden === value && attempt > 0) {
    return (
      <>
      <DisplayAttempt mystery={hidden} guessed={value} attempt={attempt} />
      <button onClick={() => Reset()}>Restartovat</button>
      </>
    );
  }
  else
  {
    return (
      <>
      <p>{hidden}-{value} {attempt}</p>
        <DisplayAttempt mystery={hidden} guessed={value} attempt={attempt} />
        <GuessNumber guessAction={GuessValue} />
      </>
    )
  }

}

export default App