import './App.css'
import Greetings from "./components/Greetings"
import Container from "./components/Container"
import Counter from './components/Counter'

const App = () => {
  return(
    <>
    <Container number="2" text="t">AAAA<span>BBBB</span></Container>
    <Greetings text="Nazdar" />
    <Counter />
    </>
  );
  
}

export default App
