import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('https://vercel-express-api-teal.vercel.app/')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching the message:", error));
  }, []);

  return (
    <>
      <p className="read-the-docs">
        {message ? message : "Loading the message..."}
      </p>
    </>
  )
}

export default App
