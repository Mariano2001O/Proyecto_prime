import { useState } from 'react'
import './App.css'

//theme
import "primereact/resources/themes/Soho-Dark/theme.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Proyecto Prime React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          contador {count}
        </button>
      </div>
      <p className="read-the-docs">
        esto es texto
      </p>
    </>
  )
}

export default App
