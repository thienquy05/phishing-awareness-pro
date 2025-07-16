import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },

        body: new URLSearchParams({
          user_email: email,
          check_box: consent ? "1" : "0"
        }).toString()
      })
       const text = await response.text()
       setMessage(`${text}`)
    }

    catch (error) {
      console.error("Error submitting: ", error)
      setMessage("Submission failed. Please try again.")
    }
  }

  return (
    <div className="App" style={{padding: "2rem", fontFamily:"Arial"}}>
      <h2>You just clicked on a suspicious link</h2>
      <p>Please answer few questions below: </p>

      <form onSubmit={handleSubmit}>
        <label>
          User Email:
          <input
            type='email'
            name='user_email'
            required
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{marginLeft: "10px"}}
          />
        </label>
        <br /> <br />

        <label>
          <input
            type='checkbox'
            name='check_box'
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span style={ { marginLeft: "8px" }}>
            Check if you authorize me to track your IP address
          </span>
        </label>
        <br /> <br />

        <button type="submit">Verify Now</button>
      </form>

      <br />
      {message && <p style={ {color:"darkgreen"}}>{message}</p>}
    </div>
  )
}

export default App
