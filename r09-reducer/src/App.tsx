import { useReducer, useRef } from 'react'
import './App.css'

interface ITodo {
  id: string,
  title: string,
  completed: boolean
}

const initialToDos: Array<ITodo> = [
  {id: crypto.randomUUID(), title: "Naučit se na písemku z Reactu", completed: false},
  {id: crypto.randomUUID(), title: "Doladit Gamebook", completed: false},
  {id: crypto.randomUUID(), title: "Dodělat projekt v MAUI", completed: false},
];

type Action = 
  {type: "COMPLETE"; id: string} |
  {type: "DELETE"; id: string} |
  {type: "ADD"; title: string}

const reducer = (state: Array<ITodo>, action: Action) => {
  switch(action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      });
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id)
    case "ADD":
      return [...state,
        {
          id: crypto.randomUUID(),
          title: action.title,
          completed: false
        }
      ]
    default:
      return state;  
  }
}

// React.Dispatch<Action>, Array<ITodo>

function App() {
  //const [todos, dispatch] = useState(initialToDos);
  const input = useRef<HTMLInputElement>(null);
  const [todos, dispatch] = useReducer<(state: Array<ITodo>, action: Action) => (Array<ITodo>)>(reducer, initialToDos);
  const handleComplete = (id: string) => {
    dispatch({type: "COMPLETE", id: id})
  }
  const handleDelete = (id: string) => {
    dispatch({type: "DELETE", id: id})
  }
  const handleAdd = (title: string) => {
    dispatch({type: "ADD", title: title})
  }
  return (
    <>
    {todos.map((todo: ITodo) => (
      <div key={todo.id}>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => handleComplete(todo.id)}
        />
        <span>{todo.title}</span>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    ))}
    <div>
      <input ref={input} />
      <button onClick={
        () => 
        handleAdd(String(input?.current?.value))
      }>Add</button>
    </div>
    </>
  )
}

export default App