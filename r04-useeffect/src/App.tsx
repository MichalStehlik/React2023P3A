import { useState } from 'react'
import './App.css'
import ControlledInput from './components/ControlledInput'
import ControlledInput2 from './components/ControlledInput2'
import EffectDemo from './components/EffectDemo'

enum Mode {
  Hidden = 0,
  Visible = 1
}

function App() {
  const [text, setText] = useState<string>("Veselý koník");
  const [mode, setMode] = useState<Mode>(Mode.Visible);

  return (
    <>
      <ControlledInput value={text} inputAction={setText} />
      <ControlledInput2 value={text} inputAction={setText} />
      <p>{text}</p>
      {mode == Mode.Visible ? <EffectDemo value={text.length} /> : null}
      <button onClick={
        () => setMode(
          x => x == Mode.Visible ? Mode.Hidden : Mode.Visible
          )}>on/off</button>
    </>
  )
}

export default App
