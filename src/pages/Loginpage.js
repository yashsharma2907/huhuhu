import React,{ useContext, useState }from "react";
import {Navigate} from 'react-router-dom';
import { UserContext } from "../UserContext";
export default function Loginpage(){
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
    async function login(e) {
      e.preventDefault();
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({username,pass}),
        headers: {'Content-Type':'application/json'},
        credentials:'include',
      });
      if (response.ok) {
        response.json().then(userInfo =>{
          setUserInfo(userInfo);
          setRedirect(true);
        })
      } else {
        alert('Wrong Credentials');
      }
    }

    if(redirect){
      return <Navigate to={'/'}/>
    }
    return(
      <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
      <input type="password" placeholder="password" value={pass} onChange={e => setPass(e.target.value)}/>
        <button>Login</button>
      </form> 
    )
}