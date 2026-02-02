import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click me... {count}
        </button>
        <p>
          Hello World!
        </p>
      </div>
    </>
  )
}

export default App
