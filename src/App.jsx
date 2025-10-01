import {useState} from 'react'
import './App.css'
import {RuleList} from "./RuleList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <RuleList/>
  )
}

export default App
