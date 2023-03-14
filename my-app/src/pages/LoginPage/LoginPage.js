import React from 'react'
import axios from 'axios'

const Login = () =>{
  const username = document.getElementById("username").value
  const password = document.getElementById("passwd").value
  axios.post("http://localhost:3000/signIn", {username, password}, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }
  }).then((resp)=>{
    console.log(resp.headers)
    alert("success")
  }).catch((err)=>{
    alert("wrong")
  })
  console.log({username, password})
}
export const LoginPage = () => {
  axios.get("http://localhost:3000/balanceSummary", {
    withCredentials: true,

  }).then((resp)=>{
    console.log({resp})
  }).catch((err)=>{
    console.error(err)

  })
  return (<div>
    <input type="text" id="username"></input>
    <input type="password" id="passwd"></input>
    <button onClick={Login}>login</button>
  </div>)
}