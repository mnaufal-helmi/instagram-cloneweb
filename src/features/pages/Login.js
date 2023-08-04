import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const handleLogin = () => {
    const exampleEmail = "user@gmail.com"
    const examplePassword = "123"

    if (email === exampleEmail && password === examplePassword) {
      setIsloggedIn(true)
      // alert('Login succes')
    } else {
      // alert('Invalid email or password')
    }
  }

  const handleLogout = () => {
    setIsloggedIn(false)
  }
  return (
    <>
      <div>
        {isLoggedIn ? (
          <div>
            <h1>Welcome {email}</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <input 
              type='email'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input 
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Login