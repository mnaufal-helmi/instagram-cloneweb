import React, { useState } from 'react'
import LoginBox from '../Layouts/LoginBox';

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
      <LoginBox />
    </>
  )
}

export default Login