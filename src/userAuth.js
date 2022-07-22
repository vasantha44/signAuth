import React, {useState} from 'react'
import { auth } from './firebase';
function UserAuth() {
    const [data, setData] = useState({
        email : "",
        password : ""
    })
    const {email, password} = data;
    const changeHandler= e =>{
      setData({...data,[e.target.name] : e.target.value})
    }
    const SignUp = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(
            user => console.log(user))
    }
    const SignIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(
          user => console.log(user))
    }
  return (
    <div>
       <h1>User Authentacation</h1>
            <form>
                <input type="email" placeholder='Email' value={email} name='email'  onChange={changeHandler}/><br/>
                <input type="password" placeholder='Password' value={password} onChange={changeHandler} name='password'/><br/>
                <button onClick={SignIn}>SignIn</button> &nbsp;
                <button onClick={SignUp}>SignUp</button>
            </form>
      
    </div>
  )
}

export default UserAuth