import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  
  const handleEmailChange = e => {
		setEmail(e.target.value);
	}

	const handlePasswordChange = e => {
		setPassword(e.target.value);
	}

	const handleLogin = () => {
    axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: 'http://localhost:3001/login',
      data:{      "user":{
        "email":email,
        "password":password
      }
}
		}).then(res=>{
      console.log(res)
      console.log(res.data)
			sessionStorage.token = res.data.authorization;
      sessionStorage.user = JSON.stringify(res.data.email)
			// console.log(res.data.token)
		})

  }

  return (
    <>
    <form>
      <input type={"email"} onChange={handleEmailChange}/>
      <input type={"password"} onChange={handlePasswordChange}/>
      <button
				onClick={handleLogin}
        type={"button"}
			>
				Login
			</button>
    </form>
    </>
  )
}

export default App
