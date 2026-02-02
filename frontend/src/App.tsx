import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <button className="bg-emerald-700 text-white border-2 border-gray-800 p-4 rounded-lg hover:bg-emerald-400 hover:cursor-pointer hover:text-gray-80 hover:transition duration-200 ease-in-out" onClick={() => setCount((count) => count + 1)}>
          Click me... {count}
        </button>
        <p className="mt-4"> 
          Hello World!
        </p>
      </div>
    </>
  )
}

export default App
